// filepath: c:\Users\mn512\OneDrive\Desktop\website\frontend\src\components\AnimatedBackground.js
import React from "react";
import { Particles } from "@tsparticles/react";

const AnimatedBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
      }}
    />
  );
};

export default AnimatedBackground;