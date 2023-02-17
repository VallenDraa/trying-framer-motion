import {
  AnimationControls,
  TargetAndTransition,
  useAnimation,
  useInView,
} from "framer-motion";
import R from "react";

export default function useAnimateOnView<T extends HTMLElement>({
  inView,
  notInView,
}: {
  inView: TargetAndTransition;
  notInView: TargetAndTransition;
}): [R.MutableRefObject<T | null>, AnimationControls] {
  const ref = R.useRef<T | null>(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  R.useEffect(() => {
    animation.start(isInView ? inView : notInView);
  }, [isInView]);

  return [ref, animation];
}
