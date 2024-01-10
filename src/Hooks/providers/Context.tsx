'use client'
import { Dispatch, PropsWithChildren, ReactComponentElement, SetStateAction, createContext, useState } from "react";
import {IUser} from "@/Interfaces/Auth/LogIn/IUser"

export type GlobalContext = {
    user: IUser
    setUser:Dispatch<SetStateAction<IUser>>;
  }

export const GlobalContext = createContext<GlobalContext>({
    user : {id: 0, name: '', email :''},
    setUser: () => {},
});


export default function Context({ children } : PropsWithChildren) {
    const [user, setUser] = useState({id: 0, name: '', email :''});

    return (
      <GlobalContext.Provider value={{ user, setUser}}>
        {children}
      </GlobalContext.Provider>
    );
  }
