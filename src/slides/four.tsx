import { motion } from "framer-motion";
import useAnimateOnView from "../hooks/useAnimateOnView";
import ME from "../assets/gigachad.gif";
import britishGuy from "../assets/average-fan.gif";
import nerd from "../assets/nerd.jpeg";

export default function Four() {
  // h1 animation
  const [h2Ref, h2Animation] = useAnimateOnView<HTMLHeadingElement>({
    inView: { opacity: 1, x: 0 },
    notInView: { opacity: 0, x: "-100%" },
  });

  // image animation
  const [britishGuyRef, britishGuyAnimation] =
    useAnimateOnView<HTMLImageElement>({
      inView: { opacity: 1, y: "0%" },
      notInView: { opacity: 0, y: "-50%" },
    });
  const [nerdRef, nerdAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, scale: 1 },
    notInView: { opacity: 0, scale: 0 },
  });
  const [MERef, MEAnimation] = useAnimateOnView<HTMLImageElement>({
    inView: { opacity: 1, scale: 1, rotate: 720 },
    notInView: { opacity: 0, scale: 0.5, rotate: 0 },
  });

  return (
    <section
      id="4"
      className="relative flex flex-col items-center justify-center gap-8 h-screen py-20"
    >
      <motion.h2
        ref={h2Ref}
        className="text-5xl self-start"
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 1, type: "spring" }}
        animate={h2Animation}
      >
        3. Im use typescript (js bad🤓❌)
      </motion.h2>

      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-5">
          <span>Avergae js user</span>
          <motion.img
            ref={britishGuyRef}
            className="h-52"
            initial={{ opacity: 0, y: "-50%" }}
            transition={{ duration: 3, delay: 1, type: "spring" }}
            animate={britishGuyAnimation}
            src={britishGuy}
          />
          <motion.img
            ref={nerdRef}
            className="h-52"
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 3, delay: 2, type: "spring" }}
            animate={nerdAnimation}
            src={nerd}
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-4xl font-bold">average ts user</span>
          <motion.img
            ref={MERef}
            transition={{ duration: 2.5, delay: 3, type: "spring" }}
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={MEAnimation}
            className="w-72 bottom-0"
            src={ME}
          />
        </div>
      </div>
    </section>
  );
}
