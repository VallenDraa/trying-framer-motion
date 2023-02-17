import R from "react";

export default function useNavigate(initialPage: number, maxPages: number) {
  const [activePage, setActivePage] = R.useState(() => {
    const hash = parseInt(window.location.hash.replace("#", ""));

    if (Number.isNaN(hash) || hash < initialPage || hash > maxPages) {
      return initialPage;
    } else {
      return hash;
    }
  });

  const [nextPage, setNextPage] = R.useState(() =>
    activePage === maxPages ? initialPage : activePage + 1
  );
  const [prevPage, setPrevPage] = R.useState(() =>
    activePage === initialPage ? maxPages : activePage - 1
  );

  const navigate = R.useCallback(
    (type: "next" | "prev") => {
      setActivePage((prev) => {
        if (type === "next") {
          return prev === maxPages ? initialPage : prev + 1;
        } else {
          return prev === initialPage ? maxPages : prev - 1;
        }
      });
    },
    [initialPage, maxPages]
  );

  R.useEffect(() => {
    setPrevPage(() => (activePage === initialPage ? maxPages : activePage - 1));
    setNextPage(() => (activePage === maxPages ? initialPage : activePage + 1));
  }, [activePage]);

  return { activePage, nextPage, prevPage, navigate };
}
