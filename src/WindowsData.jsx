import  { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [windows, setWindow] = useState([]);
    const [onTop,setOnTop] = useState('');
  
    return (
      <MyContext.Provider value={{ windows, setWindow ,onTop,setOnTop}}>
        {children}
      </MyContext.Provider>
    );
  };