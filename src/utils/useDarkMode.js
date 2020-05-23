import { useState, useEffect } from "react";
const matchDark = "(prefers-color-scheme: dark)";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia && window.matchMedia(matchDark).matches
  );

  useEffect(() => {
    const matcher = window.matchMedia(matchDark);
    const onChange = ({ matches }) => setIsDark(matches);
    matcher.addListener(onChange);
    return () => {
      matcher.removeListener(onChange);
    };
  }, [setIsDark]);

  return isDark;
};

export default useDarkMode;
