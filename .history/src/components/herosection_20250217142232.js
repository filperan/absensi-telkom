import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Card className="max-w-[400px] mx-auto mt-10">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">HeroUI</p>
              <p className="text-small text-default-500">heroui.com</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
        <HeroSection />
      </div>
    </Router>
  );
}