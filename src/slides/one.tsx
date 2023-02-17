import { motion } from "framer-motion";
import kece from "../assets/kece.jpeg";
import useAnimateOnView from "../hooks/useAnimateOnView";

export default function One() {
  // h1 animation
  const [h1Ref, h1Animation] = useAnimateOnView<HTMLHeadingElement>({
    inView: { opacity: 1, y: 0, scale: 1 },
    notInView: { opacity: 0, y: "100%", scale: 0 },
  });

  // span animation
  const [spanRef, spanAnimation] = useAnimateOnView<HTMLSpanElement>({
    inView: { opacity: 1, y: 0 },
    notInView: { opacity: 0, y: "500%" },
  });

  // image animation
  const [imgRef, imgAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, scale: 1, rotate: 720 },
    notInView: { opacity: 0, scale: 0.5, rotate: 0 },
  });

  return (
    <section
      id="1"
      className="relative flex flex-col items-center justify-center gap-10 h-screen"
    >
      <motion.h1
        ref={h1Ref}
        className="text-7xl"
        initial={{ opacity: 0, y: "100%", scale: 0.4 }}
        transition={{ duration: 1.2, type: "spring" }}
        animate={h1Animation}
      >
        5 REASON IM BEST PROGRAMMER !
      </motion.h1>
      <motion.span
        ref={spanRef}
        transition={{ duration: 1.2, delay: 1, type: "spring" }}
        initial={{ opacity: 0, y: "500%" }}
        animate={spanAnimation}
      >
        a web presentation by me a.k.a <i>best web developer</i> (trust me)
      </motion.span>

      <motion.img
        src={kece}
        ref={imgRef}
        className="absolute right-20 bottom-20"
        transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={imgAnimation}
      />
    </section>
  );
}
