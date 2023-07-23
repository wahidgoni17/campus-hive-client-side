import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../../assets/college.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar className="py-5 rounded-xl bg-gradient-to-r from-slate-50 to-green-100">
        <Navbar.Toggle />
        <Link to="/">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap cursor-pointer text-3xl font-bold dark:text-white flex gap-3">
              <img className="w-10 h-10" src={logo} />
              CampusHive
            </span>
          </Navbar.Brand>
        </Link>
        <div className="flex gap-3 md:order-2">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[16px] px-5 py-2.5 text-center"
          >
            Login
          </button>
          {/* <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown> */}
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
          <Link to="/myCollege">
            <p className="text-[16px]">My College</p>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
