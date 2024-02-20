/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  ReactElement,
} from 'react';

interface IGeneralProviderProps {
  children: ReactNode;
}

interface IGeneralContextData {
  isModalSoliciteOpen: boolean;
  setIsModalSoliciteOpen: any;
}

const GeneralContext = createContext<IGeneralContextData>({} as IGeneralContextData);

export const GeneralProvider = ({ children }: IGeneralProviderProps): ReactElement => {

  const [isModalSoliciteOpen, setIsModalSoliciteOpen] = useState(false);

  return (
    <GeneralContext.Provider
      value={{
        isModalSoliciteOpen,
        setIsModalSoliciteOpen
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export function useGeneral(): IGeneralContextData {
  const context = useContext(GeneralContext);

  if (!context) {
    throw new Error('useGeneral must be used within a GeneralProvider');
  }

  return context;
}

export default GeneralContext;