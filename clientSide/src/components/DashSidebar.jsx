import { Sidebar, SidebarItem, SidebarItems } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {HiArrowSmRight, HiUser ,HiDocumentText} from "react-icons/hi"
import {Link, useLocation} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { signoutSuccess } from '../redux/user/userSlice'
import { useSelector } from 'react-redux';


export const DashSidebar = () => {
  const dispatch= useDispatch()
  const { currentUser } = useSelector((state) => state.user);
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
    const location = useLocation();
    const [tab, setTab]=useState("")
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl =urlParams.get("tab");
        if (tabFromUrl){
        setTab(tabFromUrl);
        }
  },[location.search])
  return (
    <Sidebar className='w-full md:w-56'>
        <SidebarItems>
          <Sidebar.ItemGroup className='flex flex-col gap-1'>
                <Link to="/dashboard?tab=profile">
                    <SidebarItem active={ tab==="profile" } icon={HiUser}  label={currentUser.isAdmin ? 'Admin' : 'User'} labelColor="dark" as="div">
                            Profile
                    </SidebarItem>
                  </Link>
                  {currentUser.isAdmin && (
                      <Link to='/dashboard?tab=posts'>
                        <Sidebar.Item
                          active={tab === 'posts'}
                          icon={HiDocumentText}
                          as='div'
                        >
                          Posts
                        </Sidebar.Item>
                      </Link>
                    )}  
                  <SidebarItem  icon={HiArrowSmRight} className="cursor-pointer" onClick={handleSignout}>
                        Sign Out
                  </SidebarItem> 
            </Sidebar.ItemGroup>
        </SidebarItems>
    </Sidebar>
  ) 
}
