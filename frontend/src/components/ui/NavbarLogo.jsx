const NavbarLogo = ({ isScrolled }) => {
  return (
    <div
      className={`
        hidden md:block
        absolute left-6 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 text-2xl font-semibold 
        transition-all duration-300
        ${isScrolled ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"}
      `}
    >
      Bukari Máté
    </div>
  )
}

export default NavbarLogo;