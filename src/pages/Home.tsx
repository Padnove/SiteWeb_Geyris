import React from "react";
import Hero from "../components/Hero";
import ProblematiqueSection from "../components/problematic";
import SolutionSection from "../components/solution";


const Home: React.FC = () => {
  return (
    <>  
      <Hero />
      <ProblematiqueSection />
      <SolutionSection />
    </>
  );
};

export default Home;