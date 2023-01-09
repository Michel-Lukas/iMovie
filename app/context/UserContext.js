'use client';

import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [state, setState] = useState();

   return (
      <UserContext.Provider value={[state, setState]}>
         {children}
      </UserContext.Provider>
   );
};

export default UserProvider;
