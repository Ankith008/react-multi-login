import React, { useRef, useContext, useState } from "react";
import arcade from "../assests/images/icon-arcade.svg";
import advanced from "../assests/images/icon-advanced.svg";
import pro from "../assests/images/icon-pro.svg";
import { CounterContext } from "../Context";

export default function Steptwo() {
  const {
    setplan,
    setplanprice,
    setyear,
    onetwoinitial,
    setonetwoinitial,
    twotwoinitial,
    settwotwoinitial,
    threetwoinitial,
    setthreetwoinitial,
    boxinitial,
    setboxinitial,
  } = useContext(CounterContext);
  const hloo = useRef();
  const go = useRef();
  const ho = useRef();

  const handleclick1 = () => {
    hloo.current.style.border = "3px solid blue";
    go.current.style.border = "3px solid black";
    ho.current.style.border = "3px solid black";
    setplan("Arcade");
    setplanprice(9);
    setonetwoinitial(!onetwoinitial);
  };
  const handleclick2 = () => {
    go.current.style.border = "3px solid blue";
    hloo.current.style.border = "3px solid black";
    ho.current.style.border = "3px solid black";
    setplan("Advanced");
    setplanprice(12);
    settwotwoinitial(!twotwoinitial);
  };
  const handleclick3 = () => {
    ho.current.style.border = "3px solid blue";
    hloo.current.style.border = "3px solid black";
    go.current.style.border = "3px solid black";
    setplan("Pro");
    setplanprice(15);
    setthreetwoinitial(!threetwoinitial);
  };

  const handleCheckboxChange = () => {
    setyear((prevValue) => !prevValue);
    setboxinitial(!boxinitial);
  };
  return (
    <div className="right lg:h-[80%] lg:w-[90%]  lg:flex lg:flex-col  lg:justify-top p-6 lg:relative ">
      <div className="title">
        <h2 className="font-bold text-xl mb-3 lg:text-xl">Select your plan</h2>
        <p className="para lg:mb-6 text-base text-gray-500 lg:text-xl">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <div className="content mt-4  flex flex-col lg:flex-row lg:justify-between lg:mt-8 ">
        <div
          className={`content1 p-3 flex justify-between lg:flex-col items-center w-[100%] mb-3 h-16 border-[3px] rounded-[5px] ${
            onetwoinitial ? "border-blue-800" : "border-black"
          }  lg:w-[120px] lg:h-[150px] lg:p-4`}
          onClick={() => {
            handleclick1();
          }}
          ref={hloo}
        >
          <img src={arcade} alt="arcade" className="lg:mb-7 w-11" />
          <div className="flex flex-col  text-base">
            <p className="font-bold font-Rodoto from-neutral-500 ">Arcade</p>
            <p className="inpri">$9/mo</p>
          </div>
        </div>
        <div
          className={`content2 p-3 lg:flex-col flex justify-between w-[100%] mb-3 h-16 items-center border-[3px] rounded-[5px] ${
            twotwoinitial ? "border-blue-800" : "border-black"
          } lg:w-[120px] lg:h-[150px] lg:p-4`}
          onClick={() => {
            handleclick2();
          }}
          ref={go}
        >
          <img src={advanced} alt="advanced" className="lg:mb-7 w-11" />
          <div className="flex flex-col  text-base text-center">
            <p className="inner font-bold text-base font-Rodoto from-neutral-400 ">
              Advanced
            </p>
            <p className="inpri">$12/mo</p>
          </div>
        </div>
        <div
          className={`content3 p-3 lg:flex-col flex justify-between w-[100%] mb-3 h-16 items-center border-[3px] rounded-[5px] ${
            threetwoinitial ? "border-blue-800" : "border-black"
          } lg:w-[120px] lg:h-[150px] lg:p-4`}
          onClick={() => {
            handleclick3();
          }}
          ref={ho}
        >
          <img src={pro} alt="pro" className="lg:mb-7 w-11" />
          <div className="flex flex-col text-center text-base">
            <p className="inner font-bold text-xl">Pro</p>
            <p className="inpri">$15/mo</p>
          </div>
        </div>
      </div>
      <div className="selecting w-full justify-between item-center  flex mt-6">
        <span className="montly text-base lg:text-base font-bold">Monthly</span>
        <input
          type="checkbox"
          className="checking w-5"
          onChange={handleCheckboxChange}
          checked={boxinitial}
        />
        <span className="yearly text-base lg:text-base font-bold">Yearly</span>
      </div>
    </div>
  );
}
