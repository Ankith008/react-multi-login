import React, { useRef, useState, useContext } from "react";
import { CounterContext } from "../Context";

export default function Stepones() {
  const { name, email, phone, setname, setemail, setphone } =
    useContext(CounterContext);
  const handleinputname = (e) => {
    setname(e.target.value);
  };
  const handleinputemail = (e) => {
    setemail(e.target.value);
  };
  const handleinputphone = (e) => {
    setphone(e.target.value);
  };

  return (
    <div className="right  p-4 lg:h-[80%] lg:w-full   lg:flex lg:flex-col  lg:justify-top lg:p-6 lg:relative ">
      <div className="title mb-4 ">
        <h2 className="font-bold text-2xl lg:text-2xl">Personal info</h2>
        <p className="para mt-3 text-base lg:mb-6 text-gray-500 lg:text-xl">
          Please provide your name, email address, and phone number
        </p>
      </div>
      <div className="content  lg:h-full lg:flex lg:flex-col   relative">
        <h4 className="text-base font-bold mb-2">Name</h4>
        <input
          type="text"
          name="text"
          id="inputname"
          placeholder="Ankith Patel"
          className=" lg:h-50 w-[100%] h-[30px] text-base pl-3 relative lg:text-base font-medium lg:pl-3 focus:border-blue-800 focus:outline-none lg:w-[100%] lg:h-10 border-2 border-slate-600 mb-3"
          onChange={handleinputname}
          value={name}
        />

        <h4 className="font-bold text-base mb-2 lg:text-xl text-slate-800">
          Email Address
        </h4>
        <input
          type="email"
          id="inputemail"
          placeholder="ankith234@gmail.com"
          className=" lg:h-50 relative lg:text-base lg:pl-3 font-medium focus:border-blue-800 w-[100%] h-[30px] pl-3 text-base mb-4 focus:outline-none lg:w-[100%] border-slate-600 lg:h-10 border-2  lg:mb-6"
          onChange={handleinputemail}
          value={email}
        />

        <h4 className="font-bold text-base">Phone Number</h4>
        <input
          type="tel"
          id="inputphone"
          placeholder="1234567890"
          className="lg:w-full w-[100%] h-[30px] text-base pl-2 lg:h-50 lg:relative font-medium focus:border-blue-800 focus:outline-none lg:text-base lg:pl-3  lg:h-10 border-slate-600 border-2 mb-3 lg:mb-6"
          onChange={handleinputphone}
          value={phone}
        />
      </div>
      <span
        id="error"
        className="lg:absolute bottom-3 text-xl   lg:text-base lg:text-bold text-red-500 opacity-0"
      >
        All field is required
      </span>
    </div>
  );
}
