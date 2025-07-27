import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useAuth } from '@/context/AuthContext'

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme()
  const { currentUser, logout } = useAuth()

  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left Side: Brand + Theme Toggle + Username */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
              <Link href="/">
                Bulletin<span className="text-black dark:text-white">News</span>
              </Link>
            </h1>
            <button onClick={toggleTheme}>
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>

          {/* Username below logo */}
          {currentUser && (
            <span className="ml-0 sm:ml-0 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              Welcome, {currentUser.displayName}
            </span>
          )}
        </div>

        {/* Right Side: Navigation Links */}
        <div className="space-x-6 flex items-center">
          <Link href="/" className="text-gray-700 dark:text-white text-sm sm:text-lg hover:text-blue-600 font-medium">Home</Link>
          <Link href="/about" className="text-gray-700 dark:text-white text-sm sm:text-lg hover:text-blue-600 font-medium">About</Link>

          {currentUser ? (
            <button
              onClick={logout}
              className="text-white text-sm sm:text-lg bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 font-medium transition duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-white text-sm sm:text-lg bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 font-medium transition duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
