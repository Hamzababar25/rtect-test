"use client";
import { useState } from "react";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";

export default function CreditTrasaction() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const CreditData = Array.from({ length: 50 }, (_, i) => ({
    Type: "AXONLAYER",
    credit: i + 1000,
    received: "abc@gmail.com",
    added: "ab@gmail.com",
    created: "bdc@gmail.com",

    date: "11/03/25, 12:00:00 AM ",
  }));
  const filteredData = CreditData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const handleRecordsChange = (e) => {
    setRecordsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex h-fit bg-black text-white">
      <div className="flex-1  p-6">
        {/* <Header /> */}

        <div className="bg-[#14081E] p-6 px-8  rounded-lg">
          <h3 className="text-3xl mb-10">
            Credit Point Sharing Transaction Logs:
          </h3>
          <div className="relative mb-8 w-1/4 h-12">
            <input
              type="text"
              className="w-full p-2 bg-[#231231] rounded-lg pl-4 pr-10 h-12"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-800">
                <th className="px-2 py-2">Type</th>
                <th>Credit Point</th>
                <th>Received By</th>
                <th>Added By</th>
                <th>Created By</th>

                <th className="px-3">Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredData
                .slice(
                  (currentPage - 1) * recordsPerPage,
                  currentPage * recordsPerPage
                )
                .map((item) => (
                  <tr key={item.credit} className="border-b border-gray-800">
                    <td className="py-2 ">{item.Type}</td>
                    <td className="px-6">{item.credit}</td>

                    <td className="">{item.received}</td>
                    <td className="">{item.added}</td>
                    <td className="">{item.created}</td>

                    <td className="">{item.date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* Pagination and Show Dropdown */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-4">
              <span>Show</span>
              <select
                className="bg-[#14081E] p-1 px-4 rounded border"
                value={recordsPerPage}
                onChange={handleRecordsChange}
              >
                <option value={10}>10</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="space-y-3">
              <span className="pl-1">
                {currentPage} out of {totalPages}
              </span>
              <div className="flex gap-1">
                {/* Previous Button */}
                <button
                  className={`p-2 px-2 rounded w-10 transition-all ${
                    currentPage === 1
                      ? "bg-gray-600 cursor-not-allowed opacity-50"
                      : "bg-[#3D2253] hover:bg-[#502E6D] cursor-pointer"
                  }`}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Next Button */}
                <button
                  className={`p-2 px-2 rounded w-10 transition-all ${
                    currentPage === totalPages
                      ? "bg-gray-600 cursor-not-allowed opacity-50"
                      : "bg-[#3D2253] hover:bg-[#502E6D] cursor-pointer"
                  }`}
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
