import R from "react";
import One from "./slides/one";
import Two from "./slides/two";
import Three from "./slides/three";
import useNavigate from "./hooks/useNavigate";
import Four from "./slides/four";
import Five from "./slides/five";
import Six from "./slides/six";

const anthem = new Audio("/anthem.mp3");

export default function App() {
  const { nextPage, prevPage, navigate } = useNavigate(1, 6);

  const [gotCopyright, setGotCopyright] = R.useState(false);

  // bless ear with the best song ever from the best musician
  R.useEffect(() => {
    gotCopyright
      ? anthem.play().then(() => (anthem.currentTime = 0))
      : anthem.pause();

    return () => {
      if (!anthem.paused || anthem.currentTime) anthem.pause();
    };
  }, [gotCopyright]);

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* to play and pause anthem */}
      <button
        onClick={() => setGotCopyright((prev) => !prev)}
        className="border-2 p-1 border-black fixed left-1/2 -translate-x-1/2 top-2 z-10 bg-white"
      >
        Click {gotCopyright ? "to exit torture" : "for immersion"}
      </button>

      {/* nav button */}
      <nav className="flex flex-col z-20 gap-2 fixed right-10 bottom-10">
        <a
          href={`#${prevPage}`}
          onClick={() => navigate("prev")}
          className="rounded-full h-10 w-10 border-2 border-black text-3xl flex items-center justify-center"
        >
          &uarr;
        </a>
        <a
          href={`#${nextPage}`}
          onClick={() => navigate("next")}
          className="rounded-full h-10 w-10 border-2 border-black text-3xl flex items-center justify-center"
        >
          &darr;
        </a>
      </nav>

      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
    </div>
  );
}
