// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { RxDashboard } from "react-icons/rx";
// import { BsChevronDown, BsChevronUp } from "react-icons/bs";
// import { FaRegCreditCard, FaUserFriends, FaTicketAlt } from "react-icons/fa";
// import { FiSettings, FiLogOut } from "react-icons/fi";
// import { IoWallet } from "react-icons/io5";
// import { LiaWalletSolid } from "react-icons/lia";
// import { HiOutlineUsers } from "react-icons/hi2";
// import { SlPlus } from "react-icons/sl";
// import { CgNotes } from "react-icons/cg";
// import { IoMailOutline } from "react-icons/io5";

// export default function Sidebar() {
//   const pathname = usePathname();
//   const [isCreditPlansOpen, setIsCreditPlansOpen] = useState(false);
//   const [isAppOpen, setIsAppOpen] = useState(false);
//   const [isResellerOpen, setIsResellerOpen] = useState(false);
//   const [isLogsOpen, setIsLogsOpen] = useState(false);
//   const [isTicketsOpen, setIsTicketsOpen] = useState(false);
//   const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
//   const [isSettingOpen, setIsSettingOpen] = useState(false);
//   useEffect(() => {
//     setIsCreditPlansOpen(pathname.startsWith("/CreditPlan"));
//     setIsResellerOpen(pathname.startsWith("/reseller"));
//     setIsLogsOpen(pathname.startsWith("/Logs"));
//     setIsTicketsOpen(pathname.startsWith("/Tickets"));
//     setIsPlaylistOpen(pathname.startsWith("/Play"));
//     setIsSettingOpen(pathname.startsWith("/Settings"));
//   }, [pathname]);

//   const linkClass = (path) =>
//     `flex items-center py-4 px-3 rounded-lg  transition-all ${
//       pathname.startsWith(path)
//         ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white "
//         : "bg-transparent text-gray-300"
//     } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white`;

//   const dropdownLinkClass = (path) =>
//     `flex items-center p-2 rounded-lg transition-all font-medium ${
//       pathname === path
//         ? "text-transparent bg-clip-text bg-gradient-to-r from-[#3CCACC] to-[#8E37D7]"
//         : "text-white"
//     } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7]`;

//   return (
//     <aside className="w-64 bg-[#14081E] h-screen  fixed text-white overflow-y-auto scrollbar-hide">
//       {/* Logo */}
//       <div className=" text-center">
//         <Image
//           src="/logo.png"
//           alt="Logo"
//           width={120}
//           height={100}
//           className=""
//         />
//       </div>

//       <nav className=" px-4">
//         <ul className="space-y-1">
//           {/* Dashboard */}
//           <li className=" ">
//             <Link href="/Dashboard" className={linkClass("/Dashboard")}>
//               <RxDashboard className="mr-3 text-lg" />
//               Dashboard
//             </Link>
//           </li>

//           {/* Credit Plans Dropdown */}
//           <li>
//             <div
//               onClick={() => setIsCreditPlansOpen(!isCreditPlansOpen)}
//               className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
//                 pathname.startsWith("/CreditPlan")
//                   ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
//                   : ""
//               } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
//             >
//               <div className="flex items-center">
//                 <LiaWalletSolid className="mr-2 text-lg " />
//                 Credit Plans
//               </div>
//               {isCreditPlansOpen ? <BsChevronUp /> : <BsChevronDown />}
//             </div>
//             {isCreditPlansOpen && (
//               <ul className="ml-8 mt-2 space-y-2">
//                 <li>
//                   <Link
//                     href="/CreditPlan/PaymentPlan"
//                     className={dropdownLinkClass("/CreditPlan/PaymentPlan")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg hover: text-[#3CCACC] " />
//                       Payment Plans
//                     </span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/CreditPlan/Billing"
//                     className={dropdownLinkClass("/CreditPlan/Billing")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg  hover: text-[#3CCACC]" />
//                       Billing
//                     </span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* App Activation */}
//           <li>
//             <div
//               onClick={() => setIsAppOpen(!isAppOpen)}
//               className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
//                 pathname.startsWith("/credit-plans")
//                   ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
//                   : ""
//               } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
//             >
//               <div className="flex items-center">
//                 <HiOutlineUsers className="mr-2 text-lg " />
//                 App Activation
//               </div>
//               {isAppOpen ? <BsChevronUp /> : <BsChevronDown />}
//             </div>
//             {isAppOpen && (
//               <ul className="ml-8 mt-2 space-y-2">
//                 <li>
//                   <Link
//                     href="/credit-plans/view"
//                     className={dropdownLinkClass("/credit-plans/view")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg hover: text-[#3CCACC] " />
//                       Payment Plans
//                     </span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/credit-plans/add"
//                     className={dropdownLinkClass("/credit-plans/add")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg hover: text-[#3CCACC] " />
//                       Payment Plans
//                     </span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Reseller Dropdown */}

//           <li>
//             <div
//               onClick={() => setIsResellerOpen(!isResellerOpen)}
//               className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
//                 pathname.startsWith("/reseller")
//                   ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
//                   : ""
//               } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
//             >
//               <div className="flex items-center">
//                 <SlPlus className="mr-2 text-lg " />
//                 Reseller
//               </div>
//               {isResellerOpen ? <BsChevronUp /> : <BsChevronDown />}
//             </div>
//             {isResellerOpen && (
//               <ul className="ml-8 mt-2 space-y-2">
//                 <li>
//                   <Link
//                     href="/credit-plans/view"
//                     className={dropdownLinkClass("/reseller/view")}
//                   >
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className="mr-2 text-lg hover: text-[#3CCACC] " />
//                       Payment Plans
//                     </span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/credit-plans/add"
//                     className={dropdownLinkClass("/reseller/add")}
//                   >
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className="mr-2 text-lg hover: text-[#3CCACC] " />
//                       Payment Plans
//                     </span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           {/* Logs */}
//           <li>
//             <div
//               onClick={() => setIsLogsOpen(!isLogsOpen)}
//               className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
//                 pathname.startsWith("/Logs")
//                   ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
//                   : ""
//               } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
//             >
//               <div className="flex items-center">
//                 <CgNotes className="mr-2 text-lg " />
//                 Logs
//               </div>
//               {isLogsOpen ? <BsChevronUp /> : <BsChevronDown />}
//             </div>
//             {isLogsOpen && (
//               <ul className="ml-8 mt-2 space-y-2">
//                 <li>
//                   <Link
//                     href="/Logs/WithdrawTransaction"
//                     className={dropdownLinkClass("/Logs/WithdrawTransaction")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg hover: text-[#3CCACC] " />
//                       Withdraw Transactions{" "}
//                     </span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/Logs/CreditTransaction"
//                     className={dropdownLinkClass("/Logs/CreditTransaction")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg hover: text-[#3CCACC] " />
//                       Credit Transactions
//                     </span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//         <div className=" mt-6 border-t-2 border-gray-300 opacity-20"></div>
//         <ul className="pt-4  space-y-3   ">
//           <li>
//             <div
//               onClick={() => setIsTicketsOpen(!isTicketsOpen)}
//               className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
//                 pathname.startsWith("/Tickets")
//                   ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
//                   : ""
//               } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
//             >
//               <div className="flex items-center">
//                 <LiaWalletSolid className="mr-2 text-lg " />
//                 Tickets
//               </div>
//               {isTicketsOpen ? <BsChevronUp /> : <BsChevronDown />}
//             </div>
//             {isTicketsOpen && (
//               <ul className="ml-8 mt-2 space-y-2">
//                 <li>
//                   <Link
//                     href="/Tickets/TicketsList"
//                     className={dropdownLinkClass("/Tickets/TicketsList")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg hover: text-[#3CCACC] " />
//                       Tickets List
//                     </span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/Tickets"
//                     className={dropdownLinkClass("/Tickets")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg hover: text-[#3CCACC] " />
//                       Add Tickets
//                     </span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link href="/dashboardd" className={linkClass("/dashboardd")}>
//               <RxDashboard className="mr-3 text-lg" />
//               Offer & Notification
//             </Link>
//           </li>
//           <li>
//             <div
//               onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
//               className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
//                 pathname.startsWith("/Check")
//                   ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
//                   : ""
//               } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
//             >
//               <div className="flex items-center">
//                 <LiaWalletSolid className="mr-2 text-lg " />
//                 Check Playlist
//               </div>
//               {isPlaylistOpen ? <BsChevronUp /> : <BsChevronDown />}
//             </div>
//             {isPlaylistOpen && (
//               <ul className="ml-8 mt-2 space-y-2">
//                 <li>
//                   <Link href="/Credit" className={dropdownLinkClass("/Credit")}>
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg " />
//                       Payment Plans
//                     </span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/CreditPlan/Billing"
//                     className={dropdownLinkClass("/Credit")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg " />
//                       Billing
//                     </span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//         <div className=" mt-1 border-t-2 border-gray-300 opacity-20"></div>
//         <ul className="  space-y-1   ">
//           <li>
//             <div
//               onClick={() => setIsSettingOpen(!isSettingOpen)}
//               className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all ${
//                 pathname.startsWith("/Setting")
//                   ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
//                   : ""
//               } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
//             >
//               <div className="flex items-center">
//                 <FiSettings className="mr-2 text-lg " />
//                 Settings
//               </div>
//               {isSettingOpen ? <BsChevronUp /> : <BsChevronDown />}
//             </div>
//             {isSettingOpen && (
//               <ul className="ml-8 mt-2 space-y-2">
//                 <li>
//                   <Link href="/Credit" className={dropdownLinkClass("/Credit")}>
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg hover: text-[#3CCACC] " />
//                       Payment Plans
//                     </span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/CreditPlan/Billing"
//                     className={dropdownLinkClass("/Credit")}
//                   >
//                     {" "}
//                     <span className="flex items-center gap-3">
//                       <LiaWalletSolid className=" text-lg text:white hover: text-[#3CCACC] " />
//                       Billing
//                     </span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link
//               href="/dashboard/public"
//               className={linkClass("/dashboard/public")}
//             >
//               <RxDashboard className="mr-3 text-lg" />
//               Profile Settings
//             </Link>
//           </li>
//           {/* <li>
//             <Link href="/dashboard" className={linkClass("/dashboard")}>
//               <RxDashboard className="mr-3 text-lg" />
//               Update Credit Passcode
//             </Link>
//           </li> */}
//         </ul>
//       </nav>
//     </aside>
//   );
// }
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
        icon: <RxDashboard className="mr-3 text-lg" />,
      },
      {
        name: "creditPlans",
        title: "Credit Plans",
        href: "/CreditPlan",
        icon: <LiaWalletSolid className="mr-2 text-lg" />,
        subItems: [
          {
            title: "Payment Plans",
            href: "/CreditPlan/PaymentPlan",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
          {
            title: "Billing",
            href: "/CreditPlan/Billing",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
        ],
      },
      {
        name: "appActivation",
        title: "App Activation",
        href: "/credit-plans",
        icon: <HiOutlineUsers className="mr-2 text-lg" />,
        subItems: [
          {
            title: "View",
            href: "/credit-plans/view",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
          {
            title: "Add",
            href: "/credit-plans/add",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
        ],
      },
      {
        name: "reseller",
        title: "Reseller",
        href: "/reseller",
        icon: <SlPlus className="mr-2 text-lg" />,
        subItems: [
          {
            title: "View",
            href: "/reseller/view",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
          {
            title: "Add",
            href: "/reseller/add",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
        ],
      },
      {
        name: "logs",
        title: "Logs",
        href: "/Logs",
        icon: <CgNotes className="mr-2 text-lg" />,
        subItems: [
          {
            title: "Withdraw Transactions",
            href: "/Logs/WithdrawTransaction",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
          {
            title: "Credit Transactions",
            href: "/Logs/CreditTransaction",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
        ],
      },
      {
        name: "tickets",
        title: "Tickets",
        href: "/Tickets",
        icon: <LiaWalletSolid className="mr-2 text-lg" />,
        subItems: [
          {
            title: "Tickets List",
            href: "/Tickets/TicketsList",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
          {
            title: "Add Tickets",
            href: "/Tickets",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
        ],
      },
      {
        name: "offerNotification",
        title: "Offer & Notification",
        href: "/dashboardd",
        icon: <RxDashboard className="mr-3 text-lg" />,
      },
      {
        name: "checkPlaylist",
        title: "Check Playlist",
        href: "/Check",
        icon: <LiaWalletSolid className="mr-2 text-lg" />,
        subItems: [
          {
            title: "Payment Plans",
            href: "/Credit",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
          {
            title: "Billing",
            href: "/CreditPlan/Billing",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
        ],
      },
      {
        name: "settings",
        title: "Settings",
        href: "/Setting",
        icon: <FiSettings className="mr-2 text-lg" />,
        subItems: [
          {
            title: "Payment Plans",
            href: "/Credit",
            icon: (
              <LiaWalletSolid className=" text-lg text-white hover:text-[#3CCACC]" />
            ),
          },
          {
            title: "Billing",
            href: "/CreditPlan/Billing",
            icon: <LiaWalletSolid className=" text-lg" />,
          },
        ],
      },
      {
        name: "profileSettings",
        title: "Profile Settings",
        href: "/dashboard/public",
        icon: <RxDashboard className="mr-3 text-lg" />,
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

      <nav className="px-4">
        <ul className="space-y-1">
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
                            ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-4 px-3"
                            : ""
                        } hover:bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] py-4 px-3`}
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
