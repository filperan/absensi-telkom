import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/login');
  };

  return (
    <section className="hero">
      <h1>THE REAL INFORMATICS SCHOOL</h1>
      <button className="jelajahi-sekarang" onClick={handleExploreClick}>
        Masuk Absen
      </button>
    </section>
  );
};

export default HeroSection;
