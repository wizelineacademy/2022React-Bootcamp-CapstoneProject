import { useEffect, useState } from "react";

const useGetScreenWidth = () => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowWidth]);

  return windowWidth;
};

export default useGetScreenWidth;
