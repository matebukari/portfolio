const NavbarLinks = ({ isScrolled }) => {
  return (
    <ul
      className={`
        flex space-x-8 text-white
        transition-all duration-500 ease-out
        absolute top-1/2 -translate-y-1/2
        ${isScrolled 
          ? "left-1/2 -translate-x-1/2"
          : "right-6 translate-x-0"}
      `}
    >
      <li className="hover:text-purple-400 transition">Home</li>
      <li className="hover:text-purple-400 transition">Projects</li>
      <li className="hover:text-purple-400 transition">About</li>
      <li className="hover:text-purple-400 transition">Contact</li>
    </ul>
  )
}

export default NavbarLinks;