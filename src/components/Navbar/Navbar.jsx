import { NavLink } from "react-router-dom";

const Navbar = () => {

  const li = (
    <>
    <li><NavLink className='text-lg font-medium' to='/'>Home</NavLink></li>
    <li><NavLink className='text-lg font-medium' to='/'>All Movies</NavLink></li>
    <li><NavLink className=' text-lg font-medium' to='/addmovie'>Add Movie</NavLink></li>
    <li><NavLink className=' text-lg font-medium' to='/myfavourites'>My Favourites</NavLink></li>
    <li><NavLink className='text-lg font-medium' to='/auth/myprofile'>My Profile</NavLink></li>
    </>
  );

  return (
    <header className="navbar sticky top-0 backdrop-blur-sm bg-opacity-80 z-50 bg-gray-300/60">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {
            li
          }
        </ul>
      </div>
      <div className="flex gap-2 items-center"><img src="/public/favicon.svg" className="w-7 md:w-8 inline-block"alt="" /><NavLink to="/" className="text-default-violet text-md lg:text-xl font-extrabold">EcoAdventures</NavLink></div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {
          li
        }
      </ul>
    </div>
    <div className="navbar-end">
      {/* {
        user?.email ? <div className="flex gap-1"><img className="rounded-3xl w-10 h-10 object-cover" src={user.photoURL} alt="" /><button className="text-white btn border-0 bg-default-blue" onClick={handleLogOut}>Log Out</button></div> : <NavLink className="btn bg-default-violet text-white" to='/auth/login'>User Profile</NavLink>
      } */}
    </div>
  </header>
  );
};

export default Navbar;