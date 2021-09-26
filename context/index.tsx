import React from "react";
import { defaultPosition, defaultSpots, Position, Spot } from "../types";

export const AppContext = React.createContext({
  positionContext: {
    position: defaultPosition,
    setPosition: (position: Position) => {}
  },
  spotsContext: {
    spots: defaultSpots,
    setSpots: (spots: Spot[]) => {}
  }
})