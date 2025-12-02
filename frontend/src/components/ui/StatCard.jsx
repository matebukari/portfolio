// Component for the individual stat cards
const StatCard = ({ icon: Icon, title, count, description }) => (
  <div className="bg-black-100/50 backdrop-blur-[3px] p-6 rounded-xl border border-purple-800/50 shadow-2xl transition duration-300 hover:scale-[1.02] hover:bg-gray-800/50 cursor-pointer w-full md:w-[30%]">
    <div className="flex items-start justify-between">
      <Icon className="text-purple-400 w-8 h-8" />
      <span className="text-5xl font-extrabold text-white">{count}</span>
    </div>
    
    <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>

    {/* Small arrow icon at the bottom right */}
    <span className="absolute bottom-4 right-4 text-purple-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
    </span>
  </div>
);

export default StatCard;