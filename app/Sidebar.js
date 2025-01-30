"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaRegCreditCard, FaUserFriends, FaTicketAlt } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { IoWallet } from "react-icons/io5";
import { LiaWalletSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi2";
import { SlPlus } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCreditPlansOpen, setIsCreditPlansOpen] = useState(false);
  const [isResellerOpen, setIsResellerOpen] = useState(false);
  const [isLogsOpen, setIsLogsOpen] = useState(false);

  useEffect(() => {
    setIsCreditPlansOpen(pathname.startsWith("/credit-plans"));
    setIsResellerOpen(pathname.startsWith("/reseller"));
    setIsResellerOpen(pathname.startsWith("/logs"));
  }, [pathname]);

  const linkClass = (path) =>
    `flex items-center py-4 px-3 rounded-lg  transition-all ${
      pathname.startsWith(path)
        ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white "
        : "bg-transparent text-gray-300"
    } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white`;

  const dropdownLinkClass = (path) =>
    `flex items-center p-2 rounded-lg transition-all font-medium ${
      pathname === path
        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#3CCACC] to-[#8E37D7]"
        : "text-white"
    } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7]`;

  return (
    <aside className="w-64 bg-[#14081E] h-screen  fixed text-white">
      {/* Logo */}
      <div className=" text-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={100}
          className=""
        />
      </div>

      <nav className="p-4">
        <ul className="space-y-3">
          {/* Dashboard */}
          <li className=" ">
            <Link href="/dashboard" className={linkClass("/dashboard")}>
              <RxDashboard className="mr-3 text-xl" />
              Dashboard
            </Link>
          </li>

          {/* Credit Plans Dropdown */}
          <li>
            <div
              onClick={() => setIsCreditPlansOpen(!isCreditPlansOpen)}
              className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
                pathname.startsWith("/credit-plans")
                  ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
                  : ""
              } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
            >
              <div className="flex items-center">
                <LiaWalletSolid className="mr-2 text-2xl " />
                Credit Plans
              </div>
              {isCreditPlansOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isCreditPlansOpen && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/credit-plans/view"
                    className={dropdownLinkClass("/credit-plans/view")}
                  >
                    {" "}
                    <span className="flex items-center gap-3">
                      <LiaWalletSolid className=" text-2xl " />
                      Payment Plans
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-plans/add"
                    className={dropdownLinkClass("/credit-plans/add")}
                  >
                    {" "}
                    <span className="flex items-center gap-3">
                      <LiaWalletSolid className=" text-2xl " />
                      Payment Plans
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* App Activation */}
          <li>
            <div
              onClick={() => setIsCreditPlansOpen(!isCreditPlansOpen)}
              className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
                pathname.startsWith("/credit-plans")
                  ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
                  : ""
              } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
            >
              <div className="flex items-center">
                <HiOutlineUsers className="mr-2 text-2xl " />
                App Activation
              </div>
              {isCreditPlansOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isCreditPlansOpen && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/credit-plans/view"
                    className={dropdownLinkClass("/credit-plans/view")}
                  >
                    {" "}
                    <span className="flex items-center gap-3">
                      <LiaWalletSolid className=" text-2xl " />
                      Payment Plans
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-plans/add"
                    className={dropdownLinkClass("/credit-plans/add")}
                  >
                    {" "}
                    <span className="flex items-center gap-3">
                      <LiaWalletSolid className=" text-2xl " />
                      Payment Plans
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-plans/payment"
                    className={dropdownLinkClass("/credit-plans/payment-plans")}
                  >
                    <span className="flex items-center gap-3">
                      <LiaWalletSolid className=" text-2xl " />
                      Payment Plans
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Reseller Dropdown */}

          <li>
            <div
              onClick={() => setIsResellerOpen(!isResellerOpen)}
              className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
                pathname.startsWith("/reseller")
                  ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
                  : ""
              } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
            >
              <div className="flex items-center">
                <SlPlus className="mr-2 text-2xl " />
                Reseller
              </div>
              {isResellerOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isResellerOpen && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/credit-plans/view"
                    className={dropdownLinkClass("/reseller/view")}
                  >
                    View Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-plans/add"
                    className={dropdownLinkClass("/reseller/add")}
                  >
                    <span className="flex items-center gap-3">
                      <LiaWalletSolid className="mr-2 text-2xl " />
                      Payment Plans
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Logs */}
          <li>
            <div
              onClick={() => setIsLogsOpen(!isLogsOpen)}
              className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
                pathname.startsWith("/logs")
                  ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
                  : ""
              } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
            >
              <div className="flex items-center">
                <CgNotes className="mr-2 text-2xl " />
                Logs
              </div>
              {isLogsOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isLogsOpen && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/credit-plans/view"
                    className={dropdownLinkClass("/logs/view")}
                  >
                    {" "}
                    <span className="flex items-center gap-3">
                      <LiaWalletSolid className=" text-2xl " />
                      Payment Plans
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-plans/add"
                    className={dropdownLinkClass("/logs/add")}
                  >
                    {" "}
                    <span className="flex items-center gap-3">
                      <LiaWalletSolid className=" text-2xl " />
                      Payment Plans
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className=" mt-6 border-t-2 border-gray-300 opacity-20"></div>
        <ul className="pt-4  space-y-3   ">
          <li>
            <div
              onClick={() => setIsCreditPlansOpen(!isCreditPlansOpen)}
              className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-indigo-600"
            >
              <div className="flex items-center">
                <FaRegCreditCard className="mr-3 text-xl" />
                Credit Plans
              </div>
              {isCreditPlansOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isCreditPlansOpen && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/credit-plans/view"
                    className={linkClass("/credit-plans/view")}
                  >
                    View Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-plans/add"
                    className={linkClass("/credit-plans/add")}
                  >
                    Add Plan
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/dashboard" className={linkClass("/dashboard")}>
              <RxDashboard className="mr-3 text-xl" />
              Dashboard
            </Link>
          </li>
          <li>
            <div
              onClick={() => setIsCreditPlansOpen(!isCreditPlansOpen)}
              className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-indigo-600"
            >
              <div className="flex items-center">
                <FaRegCreditCard className="mr-3 text-xl" />
                Credit Plans
              </div>
              {isCreditPlansOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isCreditPlansOpen && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/credit-plans/view"
                    className={linkClass("/credit-plans/view")}
                  >
                    View Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-plans/add"
                    className={linkClass("/credit-plans/add")}
                  >
                    Add Plan
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className=" mt-6 border-t-2 border-gray-300 opacity-20"></div>
        <ul className="pt-4  space-y-3   ">
          <li>
            <div
              onClick={() => setIsCreditPlansOpen(!isCreditPlansOpen)}
              className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-indigo-600"
            >
              <div className="flex items-center">
                <FiSettings className="mr-3 text-xl" />
                Settings
              </div>
              {isCreditPlansOpen ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {isCreditPlansOpen && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/credit-plans/view"
                    className={linkClass("/credit-plans/view")}
                  >
                    View Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-plans/add"
                    className={linkClass("/credit-plans/add")}
                  >
                    Add Plan
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/dashboard" className={linkClass("/dashboard")}>
              <RxDashboard className="mr-3 text-xl" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className={linkClass("/dashboard")}>
              <RxDashboard className="mr-3 text-xl" />
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
