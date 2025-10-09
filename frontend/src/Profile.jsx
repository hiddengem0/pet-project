import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import petProfiles from "./data/petprofiles";
import "./Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ShowInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const [favourites, setfavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : []; // prevents null crash
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const favouriteprofiles = useMemo(
    () => petProfiles.filter((pet) => favourites.includes(pet.name)),
    [favourites]
  );

  const currentProfile = favouriteprofiles[currentIndex];

  if (!currentProfile) {
    return (
      <div className="home-container">
        <h2>No favourites yet ❤️</h2>
        <button onClick={() => navigate("/home")}>Back to all pets</button>
      </div>
    );
  }

  const toggleinfo = () => {
    setShowInfo((prev) => !prev);
  };

  const removefav = () => {
    const petName = currentProfile.name;
    if (favourites.includes(petName)) {
      setfavourites(favourites.filter((name) => name !== petName)); // remove
    }
  };

  const Next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= favouriteprofiles.length - 1 ? 0 : prevIndex + 1
    );
    setShowInfo(false);
  };

  const Previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? favouriteprofiles.length - 1 : prevIndex - 1
    );
    setShowInfo(false);
  };

  const isFavourite = favourites.includes(currentProfile.name);

  return (
    <div className="home-container">
      <div className="profile-section">
        <div className="profile-card">
          <img
            src={currentProfile.image2}
            alt={currentProfile.name}
            className="profile-img"
            onClick={toggleinfo}
            style={{ cursor: "pointer" }}
          />
          <button className="favbutton" onClick={removefav}>
            ❌
          </button>
        </div>

        <Link to="/home">
          <button>Home</button>
        </Link>

        <div className="button-group">
          <button onClick={Previous}>Previous</button>
          <button onClick={Next}>Next</button>
        </div>
      </div>

      {ShowInfo && (
        <div className="profile-details">
          <h2>{currentProfile.name}</h2>
          <p>{currentProfile.info}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
