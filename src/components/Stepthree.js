import React, { useContext, useRef, useState } from "react";
import { CounterContext } from "../Context";

export default function Stepthree() {
  const {
    additem,
    removeitem,
    onethreeinitial,
    setonethreeinitial,
    twothreeinitial,
    settwothreeinitial,
    threethreeinitial,
    setthreethreeinitial,
  } = useContext(CounterContext);
  const [blue, setblue] = useState(false);
  const [blue1, setblue1] = useState(false);
  const [blue2, setblue2] = useState(false);

  const handlecheckclick = (ischecked, itemname, itemdata) => {
    if (ischecked) {
      additem({ name: itemname, data: itemdata });
    } else {
      removeitem({ name: itemname, data: itemdata });
    }
  };

  return (
    <div className="right  w-full h-[80%] flex flex-col   p-6 relative ">
      <div className="title">
        <h2 className="font-bold text-xl">Pick add-ons</h2>
        <p className="para mb-6  text-gray-500 text-base mt-3">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <div className="content lg:w-[70%] text-center text-sm ">
        <div
          className={`content1 border-[3px] rounded-[5px] mb-3 ${
            !onethreeinitial ? "border-black" : "border-blue-700"
          } flex justify-between p-3 items-center `}
          // ref={hloo}
        >
          <input
            type="checkbox"
            className="checking h-5 w-5"
            checked={onethreeinitial}
            onChange={(e) => {
              handlecheckclick(e.target.checked, "Online service", 1);
              setonethreeinitial(!onethreeinitial);
            }}
          />
          {/* content1 */}
          <div className="texts">
            <h3 className="text-blue-950 font-bold">Online service</h3>
            <p className="text-slate-500">Access to multiplayer games</p>
          </div>
          <span className="text-blue-700 font-bold">+$1/mo</span>
        </div>

        {/* constent2 */}
        <div
          className={`content2 border-[3px] rounded-[5px] mb-3 ${
            !twothreeinitial ? "border-black" : "border-blue-700"
          } flex justify-between p-3 items-center`}
        >
          <input
            type="checkbox"
            className="checking h-5 w-5"
            checked={twothreeinitial}
            onChange={(e) => {
              handlecheckclick(e.target.checked, "Larger storage", 2);
              settwothreeinitial(!twothreeinitial);
            }}
          />
          <div className="texts">
            <h3 className="text-blue-950 font-bold">Larger storage</h3>
            <p className="text-slate-500">Extra 1TB of cloud save</p>
          </div>
          <span className="text-blue-700 font-bold">+$2/mo</span>
        </div>
        <div
          className={`content3 border-[3px] rounded-[5px] mb-3 ${
            !threethreeinitial ? "border-black" : "border-blue-700"
          } flex justify-between p-3 items-center`}
          // ref={hloo2}
        >
          <input
            type="checkbox"
            className="checking h-5 w-5"
            checked={threethreeinitial}
            onChange={(e) => {
              handlecheckclick(e.target.checked, "Customizable Profile", 2);
              setthreethreeinitial(!threethreeinitial);
            }}
          />
          <div className="texts">
            <h3 className="text-blue-950 font-bold">Customizable Profile</h3>
            <p className="text-slate-500">Customer theme on your profile</p>
          </div>
          <span className="text-blue-700 font-bold">+$2/mo</span>
        </div>
      </div>
    </div>
  );
}
