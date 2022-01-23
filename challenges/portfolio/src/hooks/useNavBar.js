import { useState } from "react";

export default function useNavBar(changeTheme) {
  const [mode, setMode] = useState({
    shadow: "0px",
    translate: "0px",
    color: "#ccc"
  });

  const themeLight = {
    primary: "white",
    secondary: "#252323",
    highlight: "#61dafb",
  };

  const themeDark = {
    primary: "#252323",
    secondary: "#61dafb",
    highlight: "white",
  };

  const changeMode = () => {
    if(mode.shadow === "0px") {
      setMode({
        shadow: "2px",
        translate: "26px",
        color: "#61dafb"
      })

      changeTheme(themeDark)
    } else {
      setMode({
        shadow: "0px",
        translate: "0px",
        color: "#ccc"
      })

      changeTheme(themeLight)
    }
  }

  return { mode, setMode, changeMode }
}