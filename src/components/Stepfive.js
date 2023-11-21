import React from "react";
import thank from "../assests/images/icon-thank-you.svg";

export default function Stepfive() {
  return (
    <div className="right lg:pl-12 h-full  flex flex-col justify-center items-center ">
      <div className="content flex-col bg-white rounded-[10px]  p-6 lg:p-16 text-center flex items-center justify-center">
        <img src={thank} className="" />
        <h1 className="text-2xl font-bold m-4">Thank you!</h1>
        <h3 className="text-slate-600">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </h3>
      </div>
    </div>
  );
}
