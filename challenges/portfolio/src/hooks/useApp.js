import { useState } from "react";

export default function useApp(){
  const themeLight = {
    primary: "white",
    secondary: "#333533",
  };
  
  const [theme, setTheme] = useState(themeLight);

  return {theme, setTheme}
}
