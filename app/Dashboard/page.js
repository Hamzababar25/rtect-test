import { Calendar } from "lucide-react";

import React from "react";
import Header from "../../components/Header";
import Image from "next/image";
const Dashboard = () => {
  return (
    <main className="flex-1  px-5 pt-2">
      {/* <Header /> */}

      <section className="grid grid-cols-3 lg:grid-cols-[1fr_1fr_1.5fr] xl:grid-cols-3 gap-2 mt-6 2xl:w-11/12 mx-auto">
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
              <Calendar className="text-gray-400" size={18} />
              <span className="ml-3">07-05-2025</span>
            </div>
          </div>

          <div className="mt-3">
            <label className="text-sm text-gray-400">End Date</label>
            <div className="flex items-center bg-[#3A2D56] p-3 rounded-lg mt-1">
              <Calendar className="text-gray-400" size={18} />
              <span className="ml-3">12-05-2025</span>
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
