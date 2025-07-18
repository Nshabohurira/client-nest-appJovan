
import { useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaPinterest,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", icon: "🏠", active: true },
  { label: "Accounts", icon: "👤" },
  { label: "Analytics", icon: "📊" },
  { label: "Schedule Calendar", icon: "🗓️" },
  { label: "Reports", icon: "📄" },
  { label: "Team Collaboration", icon: "👥" },
  { label: "Settings", icon: "⚙️" },
];

const socialAccounts = [
  { name: "LinkedIn", icon: <FaLinkedin className="text-blue-700" /> },
  { name: "Facebook", icon: <FaFacebook className="text-blue-600" /> },
  { name: "X (Twitter)", icon: <FaTwitter className="text-black" /> }, // Use FaTwitter here
  { name: "YouTube", icon: <FaYoutube className="text-red-600" /> },
  { name: "TikTok", icon: <FaTiktok className="text-black" /> },
  { name: "Pinterest", icon: <FaPinterest className="text-red-500" /> },
  { name: "Instagram", icon: <FaInstagram className="text-pink-500" /> },
  { name: "Telegram", icon: <FaTelegram className="text-blue-400" /> },
  // { name: "Google Business", icon: <SiGooglemybusiness className="text-blue-500" /> },
];

export default function Sidebar() {
  const [accountsOpen, setAccountsOpen] = useState(false);
  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 bg-[#f4f6fa] p-6 flex-col z-20 overflow-y-auto max-h-screen">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">CN</div>
        <span className="font-bold text-xl">Client<span className="text-indigo-600">Nest</span></span>
      </div>
      {/* User Info */}
      <div className="flex items-center gap-3 mb-8">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-semibold text-sm">Miriam Birungi</div>
          <div className="text-xs text-gray-500">miriam@yahoo.com</div>
        </div>
      </div>
      {/* Menu */}
      <nav className="flex flex-col gap-2 flex-1">
        {menuItems.map((item) => {
          if (item.label === "Accounts") {
            return (
              <div key={item.label} className="relative">
                <a
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm cursor-pointer transition ${
                    item.active
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-700 hover:bg-indigo-50"
                  }`}
                  onClick={() => setAccountsOpen((open) => !open)}
                >
                  <span>{item.icon}</span>
                  {item.label}
                  <span className="ml-auto">▾</span>
                </a>
                {accountsOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-10 border border-gray-100">
                    {socialAccounts.map((acc) => (
                      <div
                        key={acc.name}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-50 cursor-pointer text-gray-700 text-sm"
                      >
                        <span>{acc.icon}</span>
                        <span>{acc.name}</span>
                        <button className="ml-auto text-indigo-600 hover:underline text-xs">Connect</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <a
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm cursor-pointer transition ${
                item.active
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-700 hover:bg-indigo-50"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          );
        })}
      </nav>
      {/* Upgrade Card */}
      <div className="mt-8 bg-white rounded-xl p-4 shadow text-center">
        <div className="flex justify-center mb-2">
          <span className="text-indigo-600 text-2xl">★</span>
        </div>
        <div className="font-semibold mb-1">Upgrade Your Plan</div>
        <div className="text-xs text-gray-500 mb-3">Enjoy more advanced features by upgrading to an enterprise plan.</div>
        <button className="w-full bg-indigo-600 text-white rounded-lg py-1.5 font-semibold mb-2">Upgrade Plan</button>
        <button className="w-full border border-indigo-600 text-indigo-600 rounded-lg py-1.5 font-semibold">View Pricing</button>
      </div>
    </aside>
  );
}

