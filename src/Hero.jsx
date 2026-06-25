import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-icon">
          🏥
        </div>

        <h1>Doctor Appointment System</h1>

        <p>
          Book appointments with doctors easily and manage patient
          records efficiently through a modern healthcare platform.
        </p>

        <div className="hero-buttons">
          <Link to="/user" className="btn-primary">
            Book Appointment
          </Link>

          <Link to="/admin" className="btn-secondary">
            Admin Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;