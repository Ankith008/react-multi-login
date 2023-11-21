import React, { useContext, useState } from "react";
import { CounterContext } from "../Context";

export default function Stepfour() {
  const { plan, planprice, year, arry } = useContext(CounterContext);
  const result = arry.reduce((ank, item) => ank + item.data, 0);
  const newresult = planprice + result;

  return (
    <div className="right lg:pl-12 h-[80%]  flex flex-col w-[100%] justify-top p-6 relative ">
      <div className="title ">
        <h2 className="font-bold text-xl lg:text-2xl">Finishing up</h2>
        <p className="para mb-6 text-base mt-2  text-gray-500 lg:text-xl">
          Double-check everything looks Ok before comfirming
        </p>
      </div>
      <div className="content w-full lg:w-[90%] m-auto">
        <div className="content1 w-full h-13 items-center mb-3 bg-slate-200 flex justify-between p-4">
          <div className="texts">
            <h3>
              {plan}({year ? "Yearly" : "Monthly"})
            </h3>
            <a href="/">change</a>
          </div>
          <span>+${planprice}/mo</span>
        </div>
        <div className="content2 w-full  bg-slate-200 flex flex-col items-center justify-between mb-3 p-4">
          {arry.map((item, index) => (
            <div
              className="texts flex w-full  items-center justify-between mb-2 "
              key={index}
            >
              <h3 className="text-slate-500">{item.name}</h3>
              <span>+${item.data}/mo</span>
            </div>
          ))}
        </div>
        <div className="content3 w-full h-13 items-center mb-3  flex justify-between p-4 ">
          <h3 className="text-slate-500">
            Total (per {year ? "Year" : "Month"})
          </h3>
          <span className="text-blue-800 font-bold text-base">
            +${newresult}/mo
          </span>
        </div>
      </div>
    </div>
  );
}
