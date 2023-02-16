import R from "react";
import { motion } from "framer-motion";
import kece from "./assets/kece.jpeg";

const anthem = new Audio("/anthem.mp3");

export default function App() {
  const [gotCopyright, setGotCopyright] = R.useState(false);

  // bless ear with the best song ever from the best musician
  R.useEffect(() => {
    gotCopyright ? anthem.play() : anthem.pause();

    return () => {
      if (!anthem.paused || anthem.currentTime) anthem.pause();
    };
  }, [gotCopyright]);

  return (
    <div className="container mx-auto">
      {/* to play and pause anthem */}
      <button
        onClick={() => setGotCopyright((prev) => !prev)}
        className="border-2 p-1 border-black fixed left-1/2 -translate-x-1/2 top-2 z-10 bg-white"
      >
        Click {gotCopyright ? "to exit torture" : "for immersion"}
      </button>

      {/* page 1 */}
      <section
        id="page-1"
        className="relative flex flex-col items-center justify-center gap-10 h-screen"
      >
        <motion.h1
          className="text-7xl"
          initial={{ opacity: 0, y: "100%", scale: 0.4 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          WHY IM BEST PROGRAMMER !
        </motion.h1>
        <motion.span
          transition={{ duration: 1.2, delay: 1, type: "spring" }}
          initial={{ opacity: 0, y: "500%" }}
          animate={{ opacity: 1, y: 0 }}
        >
          a web presentation by me a.k.a <i>best web developer</i> (trust me)
        </motion.span>

        <motion.img
          src={kece}
          className="absolute right-20 bottom-20"
          transition={{ duration: 1.2, delay: 2, type: "spring" }}
          initial={{ opacity: 0, scale: 0.5, rotate: 360 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
        />
      </section>

      {/* page 2 */}
      <section id="page-2" className="h-screen"></section>

      {/* page 3 */}
      <section id="page-3" className="h-screen"></section>
    </div>
  );
}
