export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-white font-roboto">
          Welcome Back, Ali 👋
        </h1>
        <p className=" mt-2 text-white">
          Here's what's happening with your store today.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] px-4 py-2 rounded-md">
          Credit Points: 0
        </span>
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold">Ali Riaz</p>
            <p className="text-sm text-gray-400">Web Designer</p>
          </div>
        </div>
      </div>
    </header>
  );
}
