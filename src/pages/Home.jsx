import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";  
import soundon from "../assets/icons/soundon.png";
import soundoff from "../assets/icons/soundoff.png";
import  Sky from "../models/Sky";
import  Bird from "../models/Bird";
import  Island from "../models/Island";
import  Plane from "../models/Plane";

const Home = () => {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    const [showText, setShowText] = useState(true); // State to control the visibility of the text

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.pause();
        };
    }, [isPlayingMusic]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(false); // Hide the text after 3 seconds
        }, 2000);

        return () => clearTimeout(timer);
    }, []); // This effect runs only once when the component mounts

    const adjustBiplaneForScreenSize = () => {
        let screenScale, screenPosition;

        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    };

    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1,1,1]; // Adjust the scale for smaller screens
            screenPosition = [-1, -1, -18]; // Adjust the position for smaller screens
        } else {
            screenScale = [1.8,1.8,1.8]; // Adjust the scale for larger screens
            screenPosition = [0, -2.65, -30]; // Adjust the z-value based on your preference for larger screens
        }

        return [screenScale, screenPosition];
    };

    const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
    const [islandScale, islandPosition] = adjustIslandForScreenSize();

    return (
        <section className='w-full h-screen relative'>
            {showText && <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">DRAG TO EXPLORE</div>}
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"
                    }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <spotLight
                        position={[0, 50, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />
                    <hemisphereLight
                        skyColor='#b1e1ff'
                        groundColor='#000000'
                        intensity={1}
                    />

                    <Bird />
                    <Sky isRotating={isRotating} />
                    <Island
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        position={islandPosition}
                        rotation={[0.1, 4.7077, 0]}
                        scale={islandScale}
                    />
                    <Plane
                        isRotating={isRotating}
                        position={biplanePosition}
                        rotation={[0, 20.1, 0]}
                        scale={biplaneScale}
                    />
                </Suspense>
            </Canvas>

            <div className='absolute bottom-2 left-2'>
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt='jukebox'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className='w-10 h-10 cursor-pointer object-contain'
                />
            </div>
        </section>
    );
};

export default Home;
