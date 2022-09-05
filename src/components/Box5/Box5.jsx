import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

/* KEYFRAMES 
    each value depends on the duration
    in this case 2s / 5steps = 0.4s
*/

const Box5 = () => {
 const control = useAnimation();

 const moveRight = () => {
  control.start({
   x: 1000,
   transition: { duration: 2 },
  });
 };
 const moveLeft = () => {
  control.start({
   x: 0,
   transition: { duration: 2 },
  });
 };
 const circle = () => {
  control.start({
   borderRadius: "50%",
   transition: { duration: 1 },
  });
 };
 const square = () => {
  control.start({
   borderRadius: 0,
   transition: { duration: 1 },
  });
 };

 return (
  <div className="box-container">
   <div>
    <button onClick={moveRight}>Move Right</button>
    <button onClick={moveLeft}>Move Left</button>
    <button onClick={circle}>Circle</button>
    <button onClick={square}>Square</button>
    <button onClick={() => control.stop()}>Stop</button>
   </div>
   <motion.div className="box" animate={control} />
  </div>
 );
};

export default Box5;
