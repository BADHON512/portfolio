"use client"
import { Height } from '@mui/icons-material';
import React from 'react';
import { useCallback } from "react";
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
       
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
   
    }, []);
    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "",
                },
            },
            style:{
              position:"absolute",
              width:"100%",
              Height:"90vh"
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffff",
                },
                links: {
                    color: "#d0ff00",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
    );
};

export default Particle;