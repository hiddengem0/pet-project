import { Link } from "react-router-dom";
import { useState } from "react";
import petProfiles from "./data/petprofiles";
import "./Home.css";

function Home() {
  const[currentIndex, setCurrentIndex] = useState(0);
  const[ShowInfo, setShowInfo] = useState(false);
  const[favourites, setfavourites] = useState([]);
  
 const toggleinfo = () => {
    setShowInfo=((prev) => !prev );
  };

  const addfavourites = () => {
    const petName = currentProfile.name;
    if (!favourites.includes(petName)) {
        setfavourites([favourites, petName])
    }
  }

  const Next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= petProfiles.length - 1 ? 0 : prevIndex + 1
    );
    setShowInfo(False)
  };

  const Previous = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? petProfiles.length - 1 : prevIndex - 1
    );
    setShowInfo(False)
  };

  const currentProfile = petProfiles[currentIndex];

  return (
    <div className="home-container">
      <div className="profile-section">
        <div className="profile-card">
          <img
            src={currentProfile.image}
            alt={currentProfile.name}
            className="profile-img"
            onClick={toggleinfo}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="button-group">
          <button onClick={Previous}>Previous</button>
          <button onClick={Next}>Next</button>
        </div>
      </div>

      <div className="profile-details">
        <h2>{currentProfile.name}</h2>
        <p>{currentProfile.info}</p>
      </div>

      <div className="favourite">
        <button onClick={addfavourites}>Favourite</button>
      </div>
    </div>
  );
}

export default Home;

// --- plans --- 
// add a fave button top right of img 
// add localstorage for favourited format 
// home page 
// add wallpaper for welcome and reformat
// create profile page

