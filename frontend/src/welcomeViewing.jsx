import { Link } from "react-router-dom";

function WelcomeView({ username }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-100 p-5">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold mb-6">
          Welcome, <span className="text-indigo-600">{username}</span>!
        </h1>
        <Link to="/home">
          <button className="px-6 py-3 bg-indigo-600 text-black rounded-md hover:bg-indigo-700 transition font-medium">
            View Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeView;
