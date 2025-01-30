import React from "react";
import Header from "../Header";
import Image from "next/image";
const Dashboard = () => {
  return (
    <main className="flex-1 p-8">
      <Header />

      {/* <section className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">578</h2>
          <p className="text-gray-400">Total Resellers</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">163</h2>
          <p className="text-gray-400">Credit Points</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">5329</h2>
          <p className="text-gray-400">Total Credit Share</p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">
            Download Reseller Credit Share Report
          </h3>
          <div className="flex gap-4 mt-4">
            <input
              type="date"
              className="bg-gray-700 p-2 rounded-md w-full text-white"
            />
            <input
              type="date"
              className="bg-gray-700 p-2 rounded-md w-full text-white"
            />
          </div>
          <button className="bg-indigo-600 mt-4 w-full p-2 rounded-md">
            Download
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">
              App Wise - Total Activation
            </h3>
            <Image
              src="/Frame.png"
              alt="Logo"
              width={120}
              height={100}
              className=""
            />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Monthly Activation Trends</h3>
            <Image
              src="/Group.png"
              alt="Logo"
              width={120}
              height={100}
              className=""
            />
          </div>
        </div>
      </section> */}
      <section className="grid grid-cols-3 gap-6 mt-12">
        {/* Stat Cards */}
        <div className="p-6 bg-gray-800 rounded-2xl shadow-md flex flex-col items-center">
          <div className="text-4xl font-bold">578</div>
          <div className="text-lg text-gray-400">Total Resellers</div>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-md flex flex-col items-center">
          <div className="text-4xl font-bold">163</div>
          <div className="text-lg text-gray-400">Credit Points</div>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-md flex flex-col items-center">
          <div className="text-4xl font-bold">5329</div>
          <div className="text-lg text-gray-400">Total Credit Share</div>
        </div>

        {/* Download Section */}
        <div className="col-span-1 p-6 bg-gray-800 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Download Reseller Credit Share Report
          </h2>
          <label className="block text-gray-400 mb-2">Start Date</label>
          <input
            type="date"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <label className="block text-gray-400 mb-2">End Date</label>
          <input
            type="date"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-500 w-full py-4 mt-6 rounded-lg hover:bg-indigo-600">
            Download
          </button>
        </div>

        {/* Monthly Activation Trends */}
        <div className="col-span-1 p-6 bg-gray-800 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
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
        <div className="col-span-1 p-6 bg-gray-800 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
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
