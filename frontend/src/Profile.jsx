import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import petProfiles from "./data/petprofiles";
import "./Home.css";

function Home() {
  const[currentIndex, setCurrentIndex] = useState(0);
  const[ShowInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const[favourites, setfavourites] = useState(() => { // ui update
    const saved = localStorage.getItem("favourites"); 
    return saved ? JSON.parse(saved) : []; // returns info or nothing, returning [] prevents crash from null
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);
  
 const toggleinfo = () => {
    setShowInfo((prev) => !prev );
  };

  const removefav = () => {
    const petName = currentProfile.name;
    if (favourites.includes(petName)) {
        setfavourites(favourites.filter((name) => name !==petName)); //clear
    } 
  }

  const Next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= petProfiles.length - 1 ? 0 : prevIndex + 1
    );
    setShowInfo(false)
  };

  const Previous = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? petProfiles.length - 1 : prevIndex - 1
    );
    setShowInfo(false)
  };

  const currentProfile = petProfiles[currentIndex];
  const isFavourite = favourites.includes(currentProfile.name); // checks if already in favourites

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
          <button className="unfavbutton" onClick={removefav}>
            {isFavourite ? "❌" : "REFRESH"} 
          </button>
        </div>

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

// --- edits to be --- 
// reformat home page 
// add wallpaper for welcome and reformat
// create profile page

