"use client";
import { Calendar } from "lucide-react";

import React, { useState, useRef } from "react";
import Header from "../../components/Header";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  return (
    <main className="flex-1 h-fit px-5 pt-2">
      <section className="grid sm:grid-cols-1 lg:grid-cols-[1fr_1fr_1.5fr] xl:grid-cols-3 gap-2 mt-6 2xl:w-11/12 mx-auto">
        {/* Stat Cards */}
        <div className="bg-[#14081E]  flex items-center h-32 p-4 pl-8 rounded-2xl shadow-md">
          <div className="w-16 h-16 bg-[#2d1541] flex items-center justify-center rounded-lg">
            <Image
              src="/d1.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="ml-4 text-white flex flex-col space-y-2 ">
            <h2 className="text-3xl font-bold">578</h2>
            <p className="text-sm ">Total Resellers</p>
          </div>
        </div>
        <div className="bg-[#14081E]  flex items-center p-4 pl-8 rounded-2xl shadow-md">
          <div className="w-16 h-16 bg-[#2d1541] flex items-center justify-center rounded-lg">
            <Image
              src="/Mask1.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="ml-4 text-white flex flex-col space-y-2 ">
            <h2 className="text-3xl font-bold">163</h2>
            <p className="text-sm ">Credit Points</p>
          </div>
        </div>
        <div className="bg-[#14081E]  flex items-center p-4 pl-8 rounded-2xl shadow-md">
          <div className="w-16 h-16 bg-[#2d1541] flex items-center justify-center rounded-lg">
            <Image
              src="/Mask2.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="ml-4 text-white flex flex-col space-y-2 ">
            <h2 className="text-3xl font-bold">5329</h2>
            <p className="text-sm ">Total Credit Share</p>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-[#14081E] p-6 rounded-lg shadow-lg text-white w-full md:col-span-2 lg:col-span-2 xl:col-span-1">
          <h2 className="text-lg font-bold">Download Reseller Credit Share</h2>
          <p className="mt-3 font-semibold">Report</p>

          <div className="mt-3">
            <label className="text-sm text-gray-400">Start Date</label>
            <div className="flex items-center bg-[#3A2D56] p-3 rounded-lg mt-1">
              <Calendar
                className="text-gray-400 cursor-pointer"
                size={18}
                onClick={() => startDateRef.current.setFocus()}
              />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd-MM-yyyy"
                className="ml-3 bg-transparent text-white outline-none w-full"
                ref={startDateRef}
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="text-sm text-gray-400">End Date</label>
            <div className="flex items-center bg-[#3A2D56] p-3 rounded-lg mt-1">
              <Calendar
                className="text-gray-400 cursor-pointer"
                size={18}
                onClick={() => endDateRef.current.setFocus()}
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd-MM-yyyy"
                className="ml-3 bg-transparent text-white outline-none w-full"
                ref={endDateRef}
              />
            </div>
          </div>
          <button className="w-full mt-10 h-14 bg-gradient-to-r from-blue-400 to-purple-500 py-2 rounded-lg font-bold">
            Download
          </button>
        </div>

        {/* Monthly Activation Trends */}
        <div className="col-span-1 p-6 bg-[#14081E] rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-white">
            App Wise - Total Activation
          </h2>
          <div className=" h-3/4 flex justify-center items-center">
            {" "}
            <Image
              src="/Frame.png"
              alt="Logo"
              width={250}
              height={250}
              className=""
            />
          </div>
        </div>

        {/* Illustration Section */}
        <div className="lg:col-span-2 xl:col-span-1 p-6 bg-[#14081E] rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4">
            Monthly Activation Trends
          </h2>
          <div className=" h-3/4 flex justify-center items-center">
            {" "}
            <Image
              src="/Group.png"
              alt="Logo"
              width={250}
              height={250}
              className=""
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
