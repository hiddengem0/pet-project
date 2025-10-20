function AppViewing({ 
  username, 
  setUsername, 
  password, 
  setPassword, 
  handleRegister, 
  handleLogin, 
  errormessage 
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Set up a profile
        </h2>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* Buttons */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={handleRegister}
            className="flex-1 px-4 py-3 bg-indigo-500 text-black rounded-lg hover:bg-indigo-600 transition font-medium"
          >
            Register
          </button>
          <button
            onClick={handleLogin}
            className="flex-1 px-4 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
          >
            Login
          </button>
        </div>

        {errormessage && (
          <p className="text-center text-red-500 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}

export default AppViewing;
