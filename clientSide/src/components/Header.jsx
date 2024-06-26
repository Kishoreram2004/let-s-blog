import React from 'react'
import {Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, TextInput} from 'flowbite-react';
import {Link, useLocation,useNavigate} from 'react-router-dom';
import { AiOutlineSearch} from "react-icons/ai";
import {FaMoon, FaSun} from "react-icons/fa";
import {useSelector , useDispatch} from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice"
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';



const Header = () => {
  const dispatch =useDispatch();
  const path=useLocation.pathname;
  const {currentUser} = useSelector((state)=>state.user)
  const { theme } = useSelector((state) => state.theme);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async()=>{
    try {
      const res= await fetch("/api/user/signout",{
        method:'POST',
      })
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);
      }else{
          dispatch(signoutSuccess())
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <Navbar className='border-b-2 '>
        <Link to="/" className=' self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 text-white rounded-lg ' >Let's</span>
          Blog
        </Link>
        <form onSubmit={handleSubmit}>     
          <TextInput
            placeholder='Search' 
            type='text'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button className='w-12 h-10 lg:hidden sm:inline' color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10  sm:inline' color="gray" pill onClick={()=> dispatch(toggleTheme())}>
          {theme==="light"? <FaMoon />:<FaSun />}
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
            <DropdownItem onClick={handleSignout}>Sign Out</DropdownItem>
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
        <Navbar.Collapse className='text-lg text-center'>
            <Navbar.Link active={path==="/"} as={"div"}>
              <Link to="/">Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/search"} as={"div"}>
              <Link to="/search">Posts</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/create-post"} as={"div"}>
              <Link to="/create-post">Create Post</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/dashboard?tab=posts"} as={"div"}>
              <Link to="/dashboard?tab=posts">My Posts</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/about"} as={"div"}>
              <Link to="/about" >About</Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header