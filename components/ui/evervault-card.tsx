"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(20000);
    setRandomString(str);
  }

  return (
    <div className="h-full">

      <div
        className={cn(
          " bg-transparent flex w-full h-full relative bg-[#131518] rounded-t-lg",
          className
        )}
      >
        {/* <div className="bg"></div> */}
        <div
          onMouseMove={onMouseMove}
          className="group/card w-full relative overflow-hidden bg-transparent flex h-full border-white "
        >
          <div className="bg"></div>
          <CardPattern
            mouseX={mouseX}
            mouseY={mouseY}
            randomString={randomString}
            className="w-screen "
          />
          <div className="relative z-10 flex w-full">
            <div className="z-0  w-full flex  text-white font-bold text-4xl bg-transparent">
              <div className="w-full flex flex-col items-center md:justify-end p-4 pt-32 md:p-16 pb-20 overflow-hidden">
                {/* <EvervaultCard text="Hover" /> */}
                <div className='md:space-y-5 space-y-7 w-full'>
                  <div className="">

                    <h2 className=' text-black text-2xl md:text-2xl lg:text-5xl font-extralight shadow-white font-Poppins'>
                      Yo yo my dear stranger,
                    </h2>
                    <div className="w-16 border border-green-950 leading-4 mb-6 "></div>
                  </div>
                  {/* <h1 className="md:text-7xl text-5xl lg:text-[200px] font-bold text-center bg-gradient-to-b from-white to-black bg-clip-text text-transparent relative z-20 hover:rotate-2 duration-300"> */}
                  <h1 className=" text-[10vh] lg:text-[100px] xl:text-[130px] 2xl:text-[180px] font-bold text-black relative md:text-start  md:leading-none leading-[100px]">
                    Welcome to <br />My Code Cave
                  </h1>
                </div>
                {/* <div className="w-[40rem] h-40 relative"> */}
                {/* Gradients */}
                {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-900 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-900 to-transparent h-px w-3/4" />
                  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-900 to-transparent h-[5px] w-1/4 blur-sm" />
                  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-900 to-transparent h-px w-1/4" /> */}

                {/* Core component */}
                {/* <SparklesCore
                  background="transparent z-40"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full rounded-full"
                  particleColor="#FFFFFF"
                  /> */}
                {/* Radial Gradient to prevent sharp edges */}
                {/* <div className="absolute inset-0 w-full h-full bg-black hover:hidden  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
                {/* </div> */}
              </div>
              {/* <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" /> */}
              {/* <span className="dark:text-white text-black z-20">{text}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
