"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initalState = {
  from: undefined,
  to: undefined,
};

// reservation provider component
// We create a component so that everything related to context setup is available in one place
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initalState);

  function resetRange() {
    setRange(initalState);
  }
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }
  return context;
}

export { ReservationProvider, useReservation };
