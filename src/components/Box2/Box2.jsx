import { motion } from "framer-motion";

const Box1 = () => {
 return (
  <div className="box-container">
   <motion.div
    className="box cursor-drag"
    drag
    dragConstraints={{
     right: 20,
     left: -20,
     top: 20,
     right: 20,
    }}
    whileHover={{
     scale: 1.1,
    }}
    whileTap={{
     scale: 0.9,
    }}
   >
    <span className="label">DRAG ME</span>
   </motion.div>
  </div>
 );
};

export default Box1;
