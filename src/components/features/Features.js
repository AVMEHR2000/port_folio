import React from 'react'
import { TbMathIntegralX } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsDatabaseExclamation,BsUnity,BsPaletteFill } from "react-icons/bs";
import { FaMobile, FaGlobe } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Pure and Applied Mathematics"
          des="I have always been excited about math concepts and problems since I was 7 years old."
          icon={<TbMathIntegralX />}
        />
        <Card
          title="Machine Learning and Artificial Inteligence"
          des="I have worked with many machine learning models and I like to design new optimized models and see results on real problems."
          icon={<GiArtificialIntelligence />}
        />
        <Card
          title="Data Science"
          des="I like data analysis and designing and implementing algorithms on data and extracting practical results from data."
          icon={<BsDatabaseExclamation />}
        />
        <Card
          title="Full Stack Development"
          des="I work as a full-stack developer in my free time. I usually code with React as a front-end framework and Django as the backend."
          icon={<FaGlobe />}
        />
        <Card
          title="Game Design"
          des="I have created some simple games with the unity engine. I love playing games and creating my games. I want to continue my journey in game dev in the feature."
          icon={<BsUnity />}
        />
        <Card
          title="Art"
          des="I watch movies and series a lot. I love listening to music as well and I'm going to learn an instrument."
          icon={<BsPaletteFill />}
        />
      </div>
    </section>
  );
}

export default Features