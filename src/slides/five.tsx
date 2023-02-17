import { motion } from "framer-motion";
import useAnimateOnView from "../hooks/useAnimateOnView";
import happy from "../assets/happy-af.jpg";
import vscode from "../assets/vscode.png";
import sad from "../assets/sad.jpeg";
import prime from "../assets/blazingly-fast.gif";

export default function Five() {
  // h1 animation
  const [h2Ref, h2Animation] = useAnimateOnView<HTMLHeadingElement>({
    inView: { opacity: 1, x: 0 },
    notInView: { opacity: 0, x: "-100%" },
  });

  // image animation
  const [vscodeRef, vscodeAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, y: "0%" },
    notInView: { opacity: 0, y: "-50%" },
  });
  const [sadRef, sadAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, scale: 1 },
    notInView: { opacity: 0, scale: 0 },
  });
  const [happyRef, happyAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, scale: 1, rotate: 720 },
    notInView: { opacity: 0, scale: 0.5, rotate: 0 },
  });
  const [primeRef, primeAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, scale: 1.5, x: "0%" },
    notInView: { opacity: 0, scale: 0.5, x: "100%" },
  });

  return (
    <section
      id="5"
      className="relative flex flex-col items-center justify-center gap-8 h-screen py-20"
    >
      <motion.h2
        ref={h2Ref}
        className="text-5xl self-start"
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1, type: "spring" }}
        animate={h2Animation}
      >
        5. I Code in VIM
      </motion.h2>

      <div className="flex items-center gap-64">
        <div className="flex flex-col gap-5">
          <span>Me when no vim:</span>
          <motion.img
            ref={vscodeRef}
            className="h-52"
            initial={{ opacity: 0, y: "-50%" }}
            transition={{ duration: 3, delay: 1, type: "spring" }}
            animate={vscodeAnimation}
            src={vscode}
          />
          <motion.img
            ref={sadRef}
            className="h-52"
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 3, delay: 2, type: "spring" }}
            animate={sadAnimation}
            src={sad}
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-4xl font-bold">Me When Vim:</span>
          <motion.img
            ref={happyRef}
            transition={{ duration: 2.5, delay: 3, type: "spring" }}
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={happyAnimation}
            className="w-72"
            src={happy}
          />

          {/* primeagen */}
          <motion.img
            src={prime}
            ref={primeRef}
            transition={{ duration: 0.5, delay: 4, type: "spring" }}
            initial={{ opacity: 0, scale: 0.5, x: "100%" }}
            className="w-72"
            animate={primeAnimation}
          />
        </div>
      </div>
    </section>
  );
}
