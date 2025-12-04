export default function Navbar() {
  return (
    <nav
      className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[calc(100%-10rem)] max-w-full z-20 rounded-xl overflow-hidden bg-black/10 backdrop-blur-[3px] border border-neutral-400/20"
    >
      <div className="w-full px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          MateBukari
        </div>

        {/* Links */}
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-purple-400 transition">Home</li>
          <li className="hover:text-purple-400 transition">Projects</li>
          <li className="hover:text-purple-400 transition">About</li>
          <li className="hover:text-purple-400 transition">Contact</li>
        </ul>

      </div>
    </nav>
  );
}
