import React, { useCallback } from "react";
//import "../index.css";
import './Button.css'

export const Button = () => {
  const onClick = useCallback(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️");
  }, []);

  return (
    <button
      className="button"
      onClick={onClick}      
    >
      Vite is better than Webpack
    </button>
  );
};
