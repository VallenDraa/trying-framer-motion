import R from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="container">
      <header>
        <motion.h1 className="text-5xl" animate={{ x: 100 }}>
          WHY IM THE BEST PROGRAMMER !
        </motion.h1>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
