import React, { useState, useContext, useEffect } from "react";
import Stepone from "./components/Stepones";
import Steptwo from "./components/Steptwo";
import Stepthree from "./components/Stepthree";
import Stepfour from "./components/Stepfour";
import Stepfive from "./components/Stepfive";
import bgImage from "./assests/images/bg-sidebar-desktop.svg";
import { CounterContext } from "./Context";
import "./App.css";
import mbgImage from "./assests/images/bg-sidebar-mobile.svg";

function App() {
  const { name, email, phone } = useContext(CounterContext);
  const [windowsize, setwindowsize] = useState(window.innerWidth);
  const ankith = [
    <Stepone />,
    <Steptwo />,
    <Stepthree />,
    <Stepfour />,
    <Stepfive />,
  ];

  useEffect(() => {
    const handleResize = () => {
      setwindowsize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  });

  const handleback = () => {
    seti((x) => x - 1);
  };
  const handlenext = () => {
    if (i == 0) {
      if (
        name &&
        name.length !== 0 &&
        email &&
        email.length !== 0 &&
        phone &&
        phone.length !== 0
      ) {
        seti((x) => x + 1);
      } else {
        document.querySelector("#error").style.opacity = "1";
      }
    } else {
      seti((x) => x + 1);
    }
  };
  const x = 0;
  const [i, seti] = useState(x);

  return (
    <div className=" flex   lg:items-center lg:justify-center h-[100vh] bg-slate-400">
      <div className="lg:flex relative  items-center container rounded-[5px] bg-slate-400 lg:bg-white   lg:w-3/5 lg:h-[600px] font-sans lg:p-3">
        <div
          className="left   flex-row  lg:w-[30%] lg:flex min-h-[160px]  lg:h-full  text-white bg-cover lg:items-start items-center lg:justify-start justify-center flex lg:flex-col lg:rounded-[10px] rounded-none p-3"
          style={{
            backgroundImage: `url("${windowsize > 786 ? bgImage : mbgImage}")`,
          }}
        >
          <div
            className="box lg:flex lg:items-center lg:text-base lg:font-bold"
            onClick={() => {
              seti(0);
            }}
          >
            <div
              className={`circle circle1 w-10 h-10 mr-3 ${
                i == 0 ? "bg-black" : "bg-transparent"
              }  rounded-[50%]  border-2  flex items-center justify-center lg:mr-3`}
            >
              1
            </div>
            <div className="data hidden lg:block">
              <div className="step">STEP 1</div>
              <div className="info">YOUR INFO</div>
            </div>
          </div>
          <div
            className="box lg:mt-6 lg:flex lg:items-center lg:text-base lg:font-bold "
            onClick={() => {
              seti(1);
            }}
          >
            <div
              className={`circle circle2 w-10 h-10 ${
                i == 1 ? "bg-black" : "bg-transparent"
              } rounded-[50%]  border-2  flex items-center justify-center mr-3`}
            >
              2
            </div>
            <div className="data hidden lg:block">
              <div className="step">STEP 2</div>
              <div className="info">SELECT PLAN</div>
            </div>
          </div>
          <div
            className="box lg:mt-6 lg:flex lg:items-center lg:text-base lg:font-bold "
            onClick={() => {
              seti(2);
            }}
          >
            <div
              className={`circle circle3  w-10 h-10 ${
                i == 2 ? "bg-black" : "bg-transparent"
              } rounded-[50%]  border-2  flex items-center justify-center mr-3`}
            >
              3
            </div>
            <div className="data hidden lg:block">
              <div className="step">STEP 3</div>
              <div className="info">ADD-ONS</div>
            </div>
          </div>
          <div
            className="box  lg:mt-6 lg:flex lg:items-center lg:text-base font-bold"
            onClick={() => {
              seti(3);
            }}
          >
            <div
              className={`circle circle4 w-10 h-10 ${
                i == 3 ? "bg-black" : "bg-transparent"
              }   rounded-[50%]  border-2  flex items-center justify-center mr-3`}
            >
              4
            </div>
            <div className="data hidden lg:block">
              <div className="step">STEP 4</div>
              <div className="info">SUMMARY</div>
            </div>
          </div>
        </div>
        <div className="right rounded-[10px] bg-white absolute w-[90%] top-32 left-6  lg:w-[80%] lg:relative lg:top-0 lg:left-0 lg:h-full lg:flex lg:flex-col ">
          {ankith[i]}
          <div className="buttons mt-10 absolute top-[60vh]   lg:bottom-6 lg:h-[50px] lg:p-6 lg:absolute  flex w-full justify-between items-center ">
            <button
              className={`back w-24 h-12 lg:w-24 lg:h-10 text-xl rounded-[7px] bg-black  text-white opacity-${
                i == 0 || i == 4 ? 0 : 100
              }`}
              disabled={i == 0 || i == 4}
              onClick={handleback}
            >
              back
            </button>
            <button
              className={`next w-30 h-12  lg: w-24 lg:h-10 text-xl rounded-[7px] bg-blue-900 text-white opacity-${
                i > 3 ? 0 : 100
              } ${i == 3 ? "bg-pink-600" : "bg-blue-700"}`}
              disabled={i > 3}
              onClick={handlenext}
            >
              {i == 3 ? "Confirm" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
