import React from 'react';
import useNavBarResponsiveSize from './useNavBarResponsiveSize';

/* These are the possible values for the current variant. Use this to change the currentVariant dynamically.
Please don't modify */
const variantOptions = {
  ScreenDesktop: 'ScreenDesktop',
  ScreenMobile: 'ScreenMobile',
};

const useNavBar = () => {
  const [currentVariant, setCurrentVariant] = React.useState(
    variantOptions['ScreenDesktop']
  );

  const breakpointsVariant = useNavBarResponsiveSize();
  
  React.useEffect(() => {
    if (breakpointsVariant !== currentVariant) {
      setCurrentVariant(breakpointsVariant);
    }
  // eslint-disable-next-line  
  }, [breakpointsVariant]);

  const data = { currentVariant };

  const fns = { setCurrentVariant };

  return { data, fns };
};

export default useNavBar;
