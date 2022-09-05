import { motion } from "framer-motion";

/* VARIANTS */

const Box3 = () => {
 const boxVariant = {
  hidden: {
   x: "-100vh",
  },
  visible: {
   x: 0,
   transition: {
    delay: 0.5,
    when: "beforeChildren",
    staggerChildren: 0.2,
   },
  },
 };

 const listVariant = {
  hidden: {
   x: -10,
   opacity: 0,
  },
  visible: {
   x: 0,
   opacity: 1,
  },
 };

 return (
  <div className="box-container">
   <motion.div
    className="box"
    variants={boxVariant}
    animate="visible"
    initial="hidden"
   >
    {[1, 2, 3].map(() => {
     return <motion.li className="boxItem" variants={listVariant} />;
    })}
   </motion.div>
  </div>
 );
};

export default Box3;
