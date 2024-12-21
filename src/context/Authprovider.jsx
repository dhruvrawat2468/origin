import  { createContext, useEffect,useState } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/LocalStorage';

export const Authcontext=createContext()
const Authprovider = ({children}) => {
  // localStorage.clear();
  
  const[data,setData]=useState(null);
  useEffect(()=>{
    // localStorage.clear();
      setLocalstorage();

        const {employees}=getLocalstorage()
        setData(employees);
    },[]);
    // getLocalstorage();
  return (
    <div>
        <Authcontext.Provider value={[data,setData]}>
      {children}
        </Authcontext.Provider>
    </div>
  )
}

export default Authprovider
