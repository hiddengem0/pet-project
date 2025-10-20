import { Link, useNavigate } from "react-router-dom";
import WelcomeViewing from "./welcomeViewing.jsx";
import { useState, useEffect } from 'react';

function Welcome() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");           //doesnt make the user sit on a broken page
        return;
      }

      try {
        const res = await fetch("/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setUsername(data.profile.username);
      } catch (e) {
        setError("Couldn't load profile");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <WelcomeViewing username={username} />;
}

export default Welcome;