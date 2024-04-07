import React from 'react'
import {Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, TextInput} from 'flowbite-react';
import {Link, useLocation} from 'react-router-dom';
import { AiOutlineSearch} from "react-icons/ai";
import {FaMoon} from "react-icons/fa";
import {useSelector} from "react-redux";


const Header = () => {
  const path=useLocation.pathname;
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 text-white rounded-lg ' >Let's</span>
          Blog
        </Link>
        <form>     
          <TextInput
            placeholder='Search' 
            type='text'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
          <FaMoon />
        </Button>
        
          { currentUser ? 
              <Dropdown arrowIcon={false} inline label={<Avatar alt="user" img={ currentUser.profilePicture } rounded/>}>
                  <DropdownHeader>
                        <span className='block text-sm'>@{currentUser.username}</span>
                        <span className='block text-sm font-medium truncate'>
                          {currentUser.email}
                        </span>
                  </DropdownHeader>
            <Link to={'/dashboard?tab=profile'}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider />
            <DropdownItem>Sign Out</DropdownItem>
              </Dropdown>
          :(
            <Link to="/sign-in">
          <Button color="gray" className='px-2 py-1 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 text-white rounded-lg h-10 w-13 ' >
              Sign In
          </Button>
          </Link>
          )}
        
        <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path==="/"} as={"div"}>
              <Link to="/">Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/projects"} as={"div"}>
              <Link to="/projects">Projects</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/about"} as={"div"}>
              <Link to="/about" >About</Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header