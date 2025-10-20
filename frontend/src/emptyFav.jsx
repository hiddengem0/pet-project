import { useNavigate } from "react-router-dom";

function EmptyFav() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-100">
      <h2 className="text-2xl font-semibold mb-4">
        No favourites yet ❤️
      </h2>
      <button onClick={() => navigate("/home")}> Back to home </button>
    </div>
  );
}

export default EmptyFav;
