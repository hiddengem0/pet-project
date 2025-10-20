import { Link } from "react-router-dom";

function ProfileViewing({
  currentProfile,
  toggleinfo,
  removefav,
  Previous,
  Next,
}) {
  return (
    <div className="relative w-screen h-screen bg-indigo-100 text-gray-800">
      {/* Back button */}
      <div className="absolute top-4 right-4 z-20">
        <Link
          to="/home"
          className="text-[1.3vw] font-medium text-indigo-600 hover:text-indigo-700 transition select-none"
        >
          ← Back
        </Link>
      </div>

      {/* arrows */}
      <div className="absolute bottom-4 left-4 flex gap-[2vw] text-[3vw] font-light select-none z-20">
        <button
          onClick={Previous}
          className="hover:text-indigo-600 transition"
          title="Previous"
        >
          ←
        </button>
        <button
          onClick={Next}
          className="hover:text-indigo-600 transition"
          title="Next"
        >
          →
        </button>
      </div>

      {/* Pet Info + Pet Image */}
      <div className="flex w-full h-full pb-[6vw]">
        {/* Pet Info */}
        <div className="flex flex-col h-full w-[45%] p-[2vw]">
          <div className="bg-white/90 backdrop-blur-sm p-[1.5vw] rounded-lg shadow-md border border-gray-200 flex-1 overflow-auto">
            <h2 className="text-[1.8vw] font-semibold mb-[0.6vw]">
              {currentProfile.name}
            </h2>
            <p className="text-[1vw] leading-relaxed text-gray-700">
              {currentProfile.info}
            </p>
          </div>
        </div>

        {/* Pet Image */}
        <div className="flex flex-col items-center justify-center w-[50%] h-full p-[2vw]">
          <div className="relative inline-block">
            <img
              src={currentProfile.image2}
              alt={currentProfile.name}
              className="w-full max-h-[90vh] object-contain transition cursor-pointer hover:scale-[1.02]"
              onClick={toggleinfo}
            />

            <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded shadow z-10">
              <p className="text-[1.8vw] font-semibold">{currentProfile.name}</p>
            </div>

            <button
              className="absolute top-2 right-2 text-[1.5vw] bg-white/80 rounded-full px-[0.6vw] py-[0.3vw] hover:bg-white transition shadow z-10"
              onClick={removefav}
              title="Remove Favourite"
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileViewing;
