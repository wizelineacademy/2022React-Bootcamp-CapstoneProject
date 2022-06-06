import { useEffect, useState } from "react";
import useGetScreenWidth from "./useGetScreenWidth";
import baseScreenSizes from "styles/screenSizes";

const initialSizeValues = {
  isMobile: false,
  isTablet: false,
  isLaptop: false,
  isDesktop: false,
  isDesktopXL: false,
};

// TODO: Test this. Seems like behaviour is not the expected
const useGetScreenSize = () => {
  const [screenSizes, setScreenSizes] = useState(initialSizeValues);
  const screenWidth = useGetScreenWidth();

  useEffect(() => {
    const { mobile, tablet, laptop, desktop } = baseScreenSizes;

    if (screenWidth <= mobile) {
      setScreenSizes({
        isMobile: true,
        isTablet: false,
        isLaptop: false,
        isDesktop: false,
        isDesktopXL: false,
      });
      return;
    }

    if (screenWidth > mobile && screenWidth <= tablet) {
      setScreenSizes({
        isMobile: false,
        isTablet: true,
        isLaptop: false,
        isDesktop: false,
        isDesktopXL: false,
      });
      return;
    }

    if (screenWidth > tablet && screenWidth <= laptop) {
      setScreenSizes({
        isMobile: false,
        isTablet: false,
        isLaptop: true,
        isDesktop: false,
        isDesktopXL: false,
      });
      return;
    }

    if (screenWidth > laptop && screenWidth <= desktop) {
      setScreenSizes({
        isMobile: false,
        isTablet: false,
        isLaptop: false,
        isDesktop: false,
        isDesktopXL: true,
      });
      return;
    }
  }, [screenWidth]);

  return screenSizes;
};

export default useGetScreenSize;
