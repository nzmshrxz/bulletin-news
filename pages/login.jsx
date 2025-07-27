import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase/fireBaseConfig';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const { currentUser } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        alert("Signup Successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!");
      }
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google Login Successful!");
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl mb-4">{isSignup ? "Register" : "Login"}</h2>
      <form onSubmit={handleLogin}>
        {isSignup && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 mb-3 border rounded"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 mb-3 border rounded"
          required
        />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          {isSignup ? "Register" : "Login"}
        </button>
      </form>

      <div className="text-center mt-4">
        <p>or</p>
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Sign in with Google
        </button>
        <p className="mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-blue-500 underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}
