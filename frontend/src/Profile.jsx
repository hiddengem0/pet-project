import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import petProfiles from "./data/petprofiles";
import ProfileViewing from "./profileViewing.jsx";
import EmptyFav from "./emptyFav.jsx";

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
    [favourites],
  );

  useEffect(() => {
    if (currentIndex >= favouriteprofiles.length) {
      setCurrentIndex(favouriteprofiles.length - 1);
    }
  }, [currentIndex, favouriteprofiles]);

  const currentProfile = favouriteprofiles[currentIndex];

  if (!currentProfile) return <EmptyFav />;

  const toggleinfo = () => setShowInfo((prev) => !prev);

  const removefav = () => {
    const petName = currentProfile.name;
    if (favourites.includes(petName)) {
      setfavourites(favourites.filter((name) => name !== petName)); // remove
    }
  };

  const Next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= favouriteprofiles.length - 1 ? 0 : prevIndex + 1,
    );
    setShowInfo(false);
  };

  const Previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? favouriteprofiles.length - 1 : prevIndex - 1,
    );
    setShowInfo(false);
  };

  const isFavourite = favourites.includes(currentProfile.name);

  return (
    <ProfileViewing
      currentProfile={currentProfile}
      toggleinfo={toggleinfo}
      removefav={removefav}
      isFavourite={isFavourite}
      Previous={Previous}
      Next={Next}
      ShowInfo={ShowInfo}
    />
  );
}

export default Home;