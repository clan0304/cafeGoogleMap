import CafePhoto from '../public/cafephoto.jpg';
const Hero = () => {
  return (
    <div className="text-center">
      <div className="mt-[70px] z-10">
        <h2 className="text-[55px] text-black tracking-widest font-semibold">
          DISCOVER
        </h2>
        <h2>your amazing city</h2>
        <div className="mt-5 flex gap-2 items-center justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="z-20 bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-sm"
          />
          <button className="bg-red-600 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
