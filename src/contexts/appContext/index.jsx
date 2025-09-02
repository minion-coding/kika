import { createContext, useState, useContext } from "react";

const CurrentPIDContext = createContext();

const useCurrentPID = () => {
  return useContext(CurrentPIDContext);
};

const CurrentPIDProvider = ({ children }) => {
  const [currentPID, setCurrentPID] = useState(null);
  return (
    <CurrentPIDContext.Provider value={{ currentPID, setCurrentPID }}>
      {children}
    </CurrentPIDContext.Provider>
  );
};

export { useCurrentPID, CurrentPIDProvider };
