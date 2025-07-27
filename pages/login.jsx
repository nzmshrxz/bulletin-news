import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth, provider } from '../firebase/fireBaseConfig';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const { currentUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        alert('Signup Successful!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login Successful!');
      }
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Google Login Successful!');
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          {isSignup ? 'Register' : 'Login'}
        </h2>

        <form onSubmit={handleLogin}>
          {isSignup && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
          >
            {isSignup ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="text-center my-4 text-white">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition"
        >
          Sign in with Google
        </button>

        <p className="mt-6 text-center text-white">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="text-blue-400 hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
}
