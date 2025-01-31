"use client";
import React from "react";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { LiaWalletSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi2";
import { SlPlus } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import { IoMailOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LiaCreditCardSolid } from "react-icons/lia";
import { RiBillLine } from "react-icons/ri";

export default function Sidebar() {
  const pathname = usePathname();

  // Single state object to track open/closed status by item name
  const [openStates, setOpenStates] = useState({});

  const toggleOpen = (name) => {
    setOpenStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const menuItems = useMemo(
    () => [
      {
        name: "dashboard",
        title: "Dashboard",
        href: "/Dashboard",
        icon: <RxDashboard className="mr-3 text-2xl" />,
      },
      {
        name: "creditPlans",
        title: "Credit Plans",
        href: "/CreditPlan",
        icon: <LiaWalletSolid className="mr-2 text-2xl" />,
        subItems: [
          {
            title: "Payment Plans",
            href: "/CreditPlan/PaymentPlan",
            icon: <LiaCreditCardSolid className=" text-2xl" />,
          },
          {
            title: "Billing",
            href: "/CreditPlan/Billing",
            icon: <RiBillLine className=" text-2xl" />,
          },
        ],
      },
      {
        name: "appActivation",
        title: "App Activation",
        href: "/credit-plans",
        icon: <HiOutlineUsers className="mr-2 text-2xl" />,
        subItems: [
          {
            title: "View",
            href: "/credit-plans/view",
            icon: <LiaWalletSolid className=" text-2xl" />,
          },
          {
            title: "Add",
            href: "/credit-plans/add",
            icon: <LiaWalletSolid className=" text-2xl" />,
          },
        ],
      },
      {
        name: "reseller",
        title: "Reseller",
        href: "/reseller",
        icon: <SlPlus className="mr-2 text-2xl" />,
        subItems: [
          {
            title: "View",
            href: "/reseller/view",
            icon: <LiaWalletSolid className=" text-2xl" />,
          },
          {
            title: "Add",
            href: "/reseller/add",
            icon: <LiaWalletSolid className=" text-2xl" />,
          },
        ],
      },
      {
        name: "logs",
        title: "Logs",
        href: "/Logs",
        icon: <CgNotes className="mr-2 text-2xl" />,
        subItems: [
          {
            title: "Withdraw Transactions",
            href: "/Logs/WithdrawTransaction",
            icon: <LiaCreditCardSolid className=" text-2xl" />,
          },
          {
            title: "Credit Transactions",
            href: "/Logs/CreditTransaction",
            icon: <LiaCreditCardSolid className=" text-2xl" />,
          },
        ],
      },
      {
        name: "tickets",
        title: "Tickets",
        href: "/Tickets",
        icon: <IoMailOutline className="mr-2 text-2xl" />,
        subItems: [
          {
            title: "Tickets List",
            href: "/Tickets/TicketsList",
            icon: <RiBillLine className=" text-2xl" />,
          },
          {
            title: "Add Tickets",
            href: "/Tickets",
            icon: <SlPlus className=" text-2xl" />,
          },
        ],
      },
      {
        name: "offerNotification",
        title: "Offer & Notification",
        href: "/dashboardd",
        icon: <FaRegBell className="mr-3 text-2xl" />,
      },
      {
        name: "checkPlaylist",
        title: "Check Playlist",
        href: "/Check",
        icon: <SlPlus className="mr-2 text-2xl" />,
        subItems: [
          {
            title: "Payment Plans",
            href: "/Credit",
            icon: <LiaWalletSolid className=" text-2xl" />,
          },
          {
            title: "Billing",
            href: "/CreditPlan/Billing",
            icon: <LiaWalletSolid className=" text-2xl" />,
          },
        ],
      },
      {
        name: "settings",
        title: "Settings",
        href: "/Setting",
        icon: <FiSettings className="mr-2 text-2xl" />,
        subItems: [
          {
            title: "Payment Plans",
            href: "/Credit",
            icon: (
              <LiaWalletSolid className=" text-2xl text-white hover:text-[#3CCACC]" />
            ),
          },
          {
            title: "Billing",
            href: "/CreditPlan/Billing",
            icon: <LiaWalletSolid className=" text-2xl" />,
          },
        ],
      },
      {
        name: "profileSettings",
        title: "Profile Settings",
        href: "/dashboard/public",
        icon: <CgProfile className="mr-3 text-2xl" />,
      },
    ],
    []
  );

  useEffect(() => {
    const updated = {};
    menuItems.forEach((item) => {
      // Set open to true if pathname starts with the item's href
      updated[item.name] = pathname.startsWith(item.href);
    });
    setOpenStates(updated);
  }, [pathname, menuItems]);

  const linkClass = (path) =>
    `flex items-center py-5 px-3 rounded-lg  transition-all ${
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
    <aside className="w-64 bg-[#14081E] h-screen fixed text-white overflow-y-auto scrollbar-hide">
      {/* Logo */}
      <div className="text-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={100}
          className=""
        />
      </div>

      <nav className="px-4 mt-5">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isOpen = openStates[item.name] || false;
            return (
              <React.Fragment key={index}>
                <li>
                  {item.subItems ? (
                    <>
                      <div
                        onClick={() => toggleOpen(item.name)}
                        className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
                          pathname.startsWith(item.href)
                            ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-5 px-3"
                            : ""
                        } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-5 px-3`}
                      >
                        <div className="flex items-center">
                          {item.icon}
                          {item.title}
                        </div>
                        {isOpen ? <BsChevronUp /> : <BsChevronDown />}
                      </div>
                      {isOpen && (
                        <ul className="ml-8 mt-2 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className={dropdownLinkClass(subItem.href)}
                              >
                                <span className="flex items-center gap-3">
                                  <span className="fill-current">
                                    {subItem.icon}
                                  </span>
                                  {subItem.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className={linkClass(item.href)}>
                      {item.icon}
                      {item.title}
                    </Link>
                  )}
                </li>

                {/* Separate Border Below "Tickets" */}
                {item.name === "logs" && (
                  <div className="pt-2 border-t-2 border-gray-300 opacity-20"></div>
                )}
                {item.name === "checkPlaylist" && (
                  <div className=" pt-2 border-t-2 border-gray-300 opacity-20"></div>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
