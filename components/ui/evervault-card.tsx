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
    // <div className="container mx-auto p-4 pb-0 pt-20 md:p-20 md:pb-0 md:pt-64 lg:p-36 lg:pb-0 lg:pt-64 h-screen">
    <div>
      <div className="h-screen p-4 md:p-26 pt-64 pb-0">
        <div
          className={cn(
            " container mx-auto  bg-transparent flex w-full h-full relative bg-[#131518] rounded-t-lg",
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
            // className="w-screen"
            />
            <div className="relative z-10 flex w-full">
              <div className="z-0  w-full flex  text-white font-bold text-4xl bg-transparent">
                <div className="w-full flex flex-col justify-end p-4 pt-32 md:p-16 pb-20 overflow-hidden">
                  <div className='md:space-y-5 space-y-7 w-full'>
                    <div className="">
                      <h2 className='text-black text-2xl lg:text-5xl font-extralight shadow-white font-Poppins'>
                        Yo yo my dear stranger,
                      </h2>
                      <div className="w-16 border border-secondary leading-4 mb-6 "></div>
                    </div>
                    <h1 className="text-[10vh] lg:text-[180px] font-bold text-black relative md:text-start  md:leading-none leading-[100px]">
                      Welcome to <br />My Code Cave
                    </h1>
                  </div>
                </div>
              </div>
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

// "use client";
// import { useMotionValue } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { useMotionTemplate, motion } from "framer-motion";
// import { cn } from "@/utils/cn";

// export const EvervaultCard = ({
//   text,
//   className,
// }: {
//   text?: string;
//   className?: string;
// }) => {
//   let mouseX = useMotionValue(0);
//   let mouseY = useMotionValue(0);

//   const [randomString, setRandomString] = useState("");

//   useEffect(() => {
//     let str = generateRandomString(1500);
//     setRandomString(str);
//   }, []);

//   function onMouseMove({ currentTarget, clientX, clientY }: any) {
//     let { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);

//     const str = generateRandomString(1500);
//     setRandomString(str);
//   }

//   return (
//     <div
//       className={cn(
//         "p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative",
//         className
//       )}
//     >
//       <div
//         onMouseMove={onMouseMove}
//         className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
//       >
//         <CardPattern
//           mouseX={mouseX}
//           mouseY={mouseY}
//           randomString={randomString}
//         />
//         <div className="relative z-10 flex items-center justify-center">
//           <div className="relative h-44 w-44  rounded-full flex items-center justify-center text-white font-bold text-4xl">
//             <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
//             <span className="dark:text-white text-black z-20">{text}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export function CardPattern({ mouseX, mouseY, randomString }: any) {
//   let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
//   let style = { maskImage, WebkitMaskImage: maskImage };

//   return (
//     <div className="pointer-events-none">
//       <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
//       <motion.div
//         className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
//         style={style}
//       />
//       <motion.div
//         className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
//         style={style}
//       >
//         <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
//           {randomString}
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// const characters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// export const generateRandomString = (length: number) => {
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// };

// export const Icon = ({ className, ...rest }: any) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };
