import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import petProfiles from "./data/petprofiles";
import HomeViewing from "./homeViewing.jsx";

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

  const togglefav = () => {
    const petName = currentProfile.name;
    if (favourites.includes(petName)) {
        setfavourites(favourites.filter((name) => name !==petName)); //clear
    } else {
        setfavourites([...favourites, petName]); //add
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
    <HomeViewing
      currentProfile={currentProfile}
      toggleinfo={toggleinfo}
      togglefav={togglefav}
      isFavourite={isFavourite}
      Previous={Previous}
      Next={Next}
      ShowInfo={ShowInfo}
    />
  );
}

export default Home;

// --- plans --- 
// reformat home page 
// add wallpaper for welcome and reformat
// create profile page

