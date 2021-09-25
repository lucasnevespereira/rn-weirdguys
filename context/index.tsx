import React from "react";
import { defaultPosition, UserPosition } from "../types";

export const AppContext = React.createContext({
  positionContext: {
    position: defaultPosition,
    setPosition: (position: UserPosition) => {}
  }
})