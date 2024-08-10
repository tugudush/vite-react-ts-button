import React, { useCallback } from "react";
import "../index.css";

export const Button = () => {
  const onClick = useCallback(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️");
  }, []);

  return (
    <button
      onClick={onClick}      
    >
      Vite is better than Webpack
    </button>
  );
};
