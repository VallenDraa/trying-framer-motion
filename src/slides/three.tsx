import { motion, useInView } from "framer-motion";
import useAnimateOnView from "../hooks/useAnimateOnView";
import kaget from "../assets/wut-da-hell.gif";
import haxx from "../assets/robux-haxx.mp4";
import R from "react";
export default function Three() {
  // h1 animation
  const [h2Ref, h2Animation] = useAnimateOnView<HTMLHeadingElement>({
    inView: { opacity: 1, x: 0 },
    notInView: { opacity: 0, x: "-100%" },
  });

  // image animation
  const [jempolRef, jempolAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, scale: 1, rotate: 720 },
    notInView: { opacity: 0, scale: 0.5, rotate: 0 },
  });

  const videoRef = R.useRef<HTMLVideoElement>(null);
  const videoIsInView = useInView(videoRef);

  R.useEffect(() => {
    if (videoIsInView) {
      videoRef.current?.pause();
      videoRef.current?.load();
      videoRef.current?.play();
    }
  }, [videoIsInView]);

  return (
    <section
      id="3"
      className="relative flex flex-col items-center justify-center gap-8 h-screen py-20"
    >
      <motion.h2
        ref={h2Ref}
        className="text-5xl self-start"
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1, type: "spring" }}
        animate={h2Animation}
      >
        2. I can hack (INFINITE ROBUX HACK) 🙀🙀🙀
      </motion.h2>

      <motion.video ref={videoRef} className="w-3/4" autoPlay muted>
        <source src={haxx} type="video/mp4" />
      </motion.video>

      <motion.img
        ref={jempolRef}
        transition={{ duration: 1, delay: 4, type: "spring" }}
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={jempolAnimation}
        className="absolute w-72 bottom-10"
        src={kaget}
      />
    </section>
  );
}
