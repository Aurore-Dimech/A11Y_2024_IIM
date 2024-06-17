import React, { createContext, useState } from "react";

export const BurgerContext = createContext();

export const BurgerProvider = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <BurgerContext.Provider value={{ isBurgerOpen, toggleBurger }}>
      {children}
    </BurgerContext.Provider>
  );
};
