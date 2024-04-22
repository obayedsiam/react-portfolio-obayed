// App.js
import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <ProfileSection />
      <Footer />
    </div>
  );
}

export default App;
