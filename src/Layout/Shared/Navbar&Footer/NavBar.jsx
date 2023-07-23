import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../../assets/college.png";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const NavBar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then((reuslt) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Navbar className="py-5 rounded-xl bg-gradient-to-r from-slate-50 to-green-100">
        <Navbar.Toggle />
        <Link to="/">
          <h1>
            <span className="self-center whitespace-nowrap cursor-pointer text-3xl font-bold dark:text-white flex gap-3">
              <img className="w-10 h-10" src={logo} />
              CampusHive
            </span>
          </h1>
        </Link>
        <div className="md:order-2">
          {user ? (
            <Dropdown
              inline
              label={
                <FaUserCircle className="w-8 h-8"/>
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Edit Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </Dropdown>
          ) : (
            <>
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[16px] px-5 py-2.5 text-center"
                >
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
        <Navbar.Collapse>
          <Link to="/">
            <p className="text-[16px]">Home</p>
          </Link>
          <Link to="/colleges">
            <p className="text-[16px]">Colleges</p>
          </Link>
          <Link to="/admission">
            <p className="text-[16px]">Admission</p>
          </Link>
          {user && (
            <Link to="/myCollege">
              <p className="text-[16px]">My College</p>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
