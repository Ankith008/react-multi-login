import { createContext, useState } from "react";
export const CounterContext = createContext({});
export default function CreateContextProvider({ children }) {
  const [plan, setplan] = useState("");
  const [planprice, setplanprice] = useState("");
  const [year, setyear] = useState(false);
  const [arry, setarry] = useState([]);
  const [onetwoinitial, setonetwoinitial] = useState(false);
  const [twotwoinitial, settwotwoinitial] = useState(false);
  const [threetwoinitial, setthreetwoinitial] = useState(false);
  const [boxinitial, setboxinitial] = useState(false);
  const [onethreeinitial, setonethreeinitial] = useState(false);
  const [twothreeinitial, settwothreeinitial] = useState(false);
  const [threethreeinitial, setthreethreeinitial] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const additem = (item) => {
    const checking = arry.some((element) => element.name == item.name);
    if (!checking) {
      setarry([...arry, item]);
    }
  };
  const removeitem = (item) => {
    const newarray = arry.filter((arry) => arry != item);
    setarry(newarray);
  };

  return (
    <CounterContext.Provider
      value={{
        name,
        setname,
        email,
        setemail,
        phone,
        setphone,
        onethreeinitial,
        setonethreeinitial,
        twothreeinitial,
        settwothreeinitial,
        threethreeinitial,
        setthreethreeinitial,
        boxinitial,
        setboxinitial,
        plan,
        setplan,
        onetwoinitial,
        setonetwoinitial,
        twotwoinitial,
        settwotwoinitial,
        threetwoinitial,
        setthreetwoinitial,
        planprice,
        setplanprice,
        year,
        setyear,
        arry,
        setarry,
        additem,
        removeitem,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
