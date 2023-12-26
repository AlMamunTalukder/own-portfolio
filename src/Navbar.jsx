const Navbar = () => {
  const navSection = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>About Me</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white bg-opacity-10 shadow-lg rounded-full transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navSection}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            src="https://i.ibb.co/gJBg7bk/Black-White-Minimalist-SImple-Monogram-Typography-Logo.png"
            className="w-10"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navSection}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/AlMamunTalukder"
          className="btn-sm bg-yellow-400 rounded-full pt-1 lg:btn lg:bg-yellow-400 lg:rounded-full font-black text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Profile
        </a>
      </div>
    </div>
  );
};

export default Navbar;
