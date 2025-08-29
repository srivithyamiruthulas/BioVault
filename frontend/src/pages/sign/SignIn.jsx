import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white font-sans">
      <div className="bg-[#101737] p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
        <p className="text-gray-400 text-center mb-8">
          Sign in to access your secure biometric vault
        </p>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md bg-[#1b234a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md bg-[#1b234a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <a href="#" className="hover:text-blue-400">Forgot password?</a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition rounded-md font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="w-1/5 border-t border-gray-600"></span>
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <span className="w-1/5 border-t border-gray-600"></span>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
