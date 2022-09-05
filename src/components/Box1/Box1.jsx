import { useState } from "react";
import { motion } from "framer-motion";

const Box1 = () => {
 const [isAnimating, setIsAnimating] = useState(false);

 return (
  <div className="box-container">
   <motion.div
    className="box"
    animate={{
     x: isAnimating ? 1000 : 0,
     opacity: isAnimating ? 1 : 0.5,
     rotate: isAnimating ? 360 : 0,
    }}
    initial={{
     x: 0,
     opacity: 0.5,
    }}
    transition={{
     type: "spring",
     stiffness: 100,
     damping: 10,
    }}
    onClick={() => setIsAnimating(!isAnimating)}
   >
    <span className="label">CLICK ME</span>
   </motion.div>
  </div>
 );
};

export default Box1;
