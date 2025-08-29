export default function SignUp() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#192048] via-[#0d1640] to-[#080e31] text-white font-sans">
      <div className="bg-[#101737] p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>
        <p className="text-gray-400 text-center mb-8">
          Join us and experience secure, passwordless biometric authentication
        </p>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-md bg-[#1b234a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-md bg-[#1b234a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-md bg-[#1b234a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition rounded-md font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="w-1/5 border-t border-gray-600"></span>
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <span className="w-1/5 border-t border-gray-600"></span>
        </div>

        {/* Sign In Link */}
        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-400 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
