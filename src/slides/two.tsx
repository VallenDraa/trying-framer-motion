import { motion } from "framer-motion";
import useAnimateOnView from "../hooks/useAnimateOnView";
import canCode from "../assets/can-code.jpg";
import canCodeTwo from "../assets/can-code-two.jpg";
import jempol from "../assets/jempol.webp";

export default function Two() {
  // h2 animation
  const [h2Ref, h2Animation] = useAnimateOnView<HTMLHeadingElement>({
    inView: { opacity: 1, x: 0 },
    notInView: { opacity: 0, x: "-100%" },
  });

  // image animation
  const [canCodeRef, canCodeAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, y: "0%" },
    notInView: { opacity: 0, y: "-50%" },
  });
  const [canCodeTwoRef, canCodeTwoAnimation] =
    useAnimateOnView<HTMLImageElement>({
      inView: { opacity: 1, scale: 1 },
      notInView: { opacity: 0, scale: 0 },
    });
  const [jempolRef, jempolAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, scale: 1, rotate: 720 },
    notInView: { opacity: 0, scale: 0.5, rotate: 0 },
  });

  return (
    <section
      id="2"
      className="relative flex flex-col items-center justify-center gap-2 h-screen py-20"
    >
      <motion.h2
        ref={h2Ref}
        className="text-5xl self-start"
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1, type: "spring" }}
        animate={h2Animation}
      >
        1. I can code (Not your avergae programmer)
      </motion.h2>
      <div className="relative flex justify-center gap-5 grow items-center">
        <motion.img
          ref={canCodeRef}
          className="h-96"
          initial={{ opacity: 0, y: "-50%" }}
          transition={{ duration: 3, delay: 1, type: "spring" }}
          animate={canCodeAnimation}
          src={canCode}
        />
        <motion.img
          ref={canCodeTwoRef}
          className="h-96"
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 3, delay: 2, type: "spring" }}
          animate={canCodeTwoAnimation}
          src={canCodeTwo}
        />
        <motion.img
          ref={jempolRef}
          transition={{ duration: 2.5, delay: 3, type: "spring" }}
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={jempolAnimation}
          className="absolute w-72 bottom-0"
          src={jempol}
        />
      </div>
    </section>
  );
}
