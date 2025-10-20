import { Link } from "react-router-dom";

function HomeViewing({
  username,
  currentProfile,
  toggleinfo,
  togglefav,
  isFavourite,
  Previous,
  Next,
  ShowInfo,
}) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-indigo-100 p-6">

      {/* Profile button */}
      <Link to="/profile" className="absolute top-4 left-4">
        <button className="px-4 py-2 bg-indigo-500 text-black rounded-md hover:bg-indigo-300 transition">
          Profile
        </button>
      </Link>

      {/* Main card container */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center w-full max-w-sm">
        
        {/* Pet image */}
        <div className="relative">
          <img
            src={currentProfile.image}
            alt={currentProfile.name}
            className="w-80 h-100 object-cover border-3 border-gray-600 hover:border-black transition cursor-pointer rounded-lg"
            onClick={toggleinfo}
          />

          {/* Fav button */}
          <button
            className="absolute top-2 right-2 text-3xl bg-white/70 rounded-full p-1 hover:bg-white transition"
            onClick={togglefav}
          >
            {isFavourite ? "❤️" : "🤍"}
          </button>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={Previous}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition"
          >
            Previous
          </button>
          <button
            onClick={Next}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition"
          >
            Next
          </button>
        </div>

        {/* Pet info box */}
        {ShowInfo && (
          <div className="mt-6 text-center bg-gray-50 border border-gray-200 rounded-lg p-4 w-full">
            <h2 className="text-2xl font-semibold text-gray-800">
              {currentProfile.name}
            </h2>
            <p className="text-gray-600">
              {currentProfile.info}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeViewing;
