"use client"; // Add this at the top to make it a client component

import { personalData } from "@/utils/data/personal-data";
import { useEffect, useState } from "react";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?username=${personalData.devUsername}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        const filtered = data
          .filter((item) => item?.cover_image)
          .sort(() => Math.random() - 0.5);
        setArticles(filtered);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects articles={articles} /> {/* Pass fetched data to Projects */}
      <Education />
      <ContactSection />
    </div>
  );
}
