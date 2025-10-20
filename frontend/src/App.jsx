import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AppViewing from "./appViewing";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // handles user registration
  const handleRegister = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error || "Registration failed");
      }
    } catch (error) { //fallback
      setMessage("Error connecting to server");
    } 
  };

  // Handle user login
  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        navigate("/welcome");
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

   return (
    <AppViewing
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleRegister={handleRegister}
      handleLogin={handleLogin}
      message={message}
    />
  );
}

export default App;