export default function Header() {
  return (
    <header className="flex items-center justify-between  p-6">
      <div>
        <h1 className="text-3xl font-bold text-white font-roboto">
          Welcome Back, Ali 👋
        </h1>
        <p className=" mt-2 text-[#5A466A] font-normal font-roboto">
          Here's what's happening with your store today.
        </p>
      </div>
      <div className="flex items-center xl:gap-10  xl:pr-16 sm:gap-2 sm:pr-2">
        <span className="bg-[#14081E] text-white px-4 py-2 rounded-md">
          Credit Points: 0
        </span>
        <div className="flex items-center gap-2">
          <img
            src="/man.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-bold text-white font-roboto">Ali Riaz</p>
            <p className="text-sm font-normal text-white font-roboto">
              Web Designer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
