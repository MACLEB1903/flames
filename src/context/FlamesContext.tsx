// FlamesContext.tsx
import React, { createContext, useState, ReactNode } from "react";

type PersonsInfo = {
  name: string | null;
  middleName: string | null;
  lastName: string | null;
  colorPref: string | null;
};

type FlamesContextType = {
  user: PersonsInfo;
  setUser: React.Dispatch<React.SetStateAction<PersonsInfo>>;
  partner: PersonsInfo;
  setPartner: React.Dispatch<React.SetStateAction<PersonsInfo>>;
  displayFrame: number;
  setDisplayFrame: React.Dispatch<React.SetStateAction<number>>;
};

const defaultPersonInfo: PersonsInfo = {
  name: null,
  middleName: null,
  lastName: null,
  colorPref: null,
};

const contextDefaultValues: FlamesContextType = {
  user: defaultPersonInfo,
  setUser: () => {},
  partner: defaultPersonInfo,
  setPartner: () => {},
  displayFrame: 1,
  setDisplayFrame: () => {},
};

export const FlamesContext =
  createContext<FlamesContextType>(contextDefaultValues);

interface FlamesInfoProviderProps {
  children: ReactNode;
}

export const FlamesInfoProvider: React.FC<FlamesInfoProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState(defaultPersonInfo);
  const [partner, setPartner] = useState(defaultPersonInfo);
  const [displayFrame, setDisplayFrame] = useState(0);

  return (
    <FlamesContext.Provider
      value={{
        user,
        setUser,
        partner,
        setPartner,
        displayFrame,
        setDisplayFrame,
      }}
    >
      {children}
    </FlamesContext.Provider>
  );
};
