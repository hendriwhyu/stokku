"use client"

import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Pricing from "./components/Pricing";
import HomeLayout from "@/layouts/HomeLayout";

const HomePage = () => {
  return (
    <HomeLayout title="Stokku - Warehouse Inventory Management">
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
    </HomeLayout>
  );
};

export default HomePage;
