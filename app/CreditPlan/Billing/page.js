"use client";
import { useState } from "react";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import Header from "@/app/Header";

export default function Billing() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const billingData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    reseller: "abc",
    email: `abc${i}@gmail.com`, // Unique emails for search functionality
    plan: "PRO",
    amount: "$10",
    points: 432,
    status: ["Active", "Pause", "Inactive"][i % 3],
    transactionId: `ID:234935${i}`,
    date: "11/03/25",
  }));

  const filteredData = billingData.filter((item) =>
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
      <div className="flex-1 p-6">
        <Header />
        {/* Billing Table */}
        <div className="bg-[#14081E] p-6 px-8 mt-6 rounded-lg">
          <h3 className="text-3xl mb-10">Billing Record</h3>
          {/* Search Bar */}
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
          {/* Table */}
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-800">
                <th className="py-2">Order ID</th>
                <th>Reseller Name</th>
                <th>Reseller Email</th>
                <th>Plan Title</th>
                <th>Amount</th>
                <th>Credit Points</th>
                <th>Status</th>
                <th>Transaction ID</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredData
                .slice(
                  (currentPage - 1) * recordsPerPage,
                  currentPage * recordsPerPage
                )
                .map((item) => (
                  <tr key={item.id} className="border-b border-gray-800">
                    <td className="py-2">{item.id}</td>
                    <td className="px-10">{item.reseller}</td>
                    <td>{item.email}</td>
                    <td className="px-5">{item.plan}</td>
                    <td className="px-5">{item.amount}</td>
                    <td className="px-8">{item.points}</td>
                    <td>{item.status}</td>
                    <td className="px-4">{item.transactionId}</td>
                    <td>{item.date}</td>
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
                <button
                  className="p-2 px-2 bg-[#3D2253] rounded w-10"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="p-2 px-2 bg-[#3D2253] rounded w-10"
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
