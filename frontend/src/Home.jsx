import { Link } from "react-router-dom";
import { useState } from "react";
import petProfiles from "./data/petprofiles";
import "./Home.css";

function Home() {
  const[currentIndex, setCurrentIndex] = useState(0);

  const Next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= petProfiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const Previous = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? petProfiles.length - 1 : prevIndex - 1
    );
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
          />
          <div className="profile-name">{currentProfile.name}</div>
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
    </div>
  );
}

export default Home;