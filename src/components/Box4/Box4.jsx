import { motion } from "framer-motion";

/* KEYFRAMES 
    each value depends on the duration
    in this case 2s / 5steps = 0.4s
*/

const Box4 = () => {
 return (
  <div className="box-container">
   <motion.div
    className="box"
    animate={{
     scale: [1, 1.4, 1.4, 1, 1],
     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
     rotate: [0, 0, 270, 270, 0],
     backgroundColor: ["#7FFFD4", "#07A0C3", "#086788", "#07A0C3", "#7FFFD4"],
    }}
    transition={{ duration: 2 }}
   ></motion.div>
  </div>
 );
};

export default Box4;
