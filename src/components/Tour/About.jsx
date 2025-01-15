import React from "react";
import { Canvas } from "react-three-fiber";
import app1 from "../../assets/asset 1.svg";
import app2 from "../../assets/asset 2.svg";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import TreeModel from "../../3DScene/TreeModel";
// import about from "../../assets/asset 3.png";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}

const About = () => {
  return (
    <div className="px-6 py-6 mt-[120px] md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="w-full">
          <h1 className="text-lg md:text-xl text-gray-800 uppercase">
            Download our Application
          </h1>
          <p className="text-[40px] md:text-[80px] lg:text-[120px] font-bold leading-none">
            Start Adventure
          </p>
          <p className="text-base md:text-lg lg:text-[24px] mt-6 md:mt-8">
            Discover a world of possibilities with our travel app, your ultimate
            companion for seamless and unforgettable journeys. Whether you are
            planning a weekend getaway or an extended adventure, our app
            provides everything you need to enhance your travel experience.
          </p>
          <div className="flex items-center mt-6 md:mt-8 gap-4">
            <img
              src={app1}
              alt="Play store app"
              className="w-[120px] md:w-[150px] lg:w-auto"
            />
            <img
              src={app2}
              alt="Apple App Store"
              className="w-[120px] md:w-[150px] lg:w-auto"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[60%] h-[520px] px-5 rounded-[50%]">
          {/* <img
            src={about}
            alt="About us illustration"
            className="w-[80%] md:w-[70%] lg:w-auto"
          /> */}
          <Canvas
            camera={{ position: [10, 3, 6], fov: 10 }}
            className="w-[350px] h-[350px] rounded-[50%] shadow-2xl"
          >
            <ambientLight intensity={5} />
            <directionalLight position={[100, 100, 500]} intensity={1} />
            <React.Suspense fallback={<Loader />}>
              <TreeModel scale={[1, 1, 1]} />
            </React.Suspense>
            <OrbitControls
              enableZoom={true} // Allow zooming
              enablePan={true} // Allow panning
              maxPolarAngle={Math.PI} // Allow full rotation
              minPolarAngle={0} // Allow full rotation
              minDistance={3} // Set minimum zoom distance
              maxDistance={100}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default About;
