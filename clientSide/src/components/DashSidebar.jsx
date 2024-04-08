import { Sidebar, SidebarItem, SidebarItems } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {HiArrowSmRight, HiUser} from "react-icons/hi"
import {Link, useLocation} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { signoutSuccess } from '../redux/user/userSlice'


export const DashSidebar = () => {
  const dispatch= useDispatch()
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
            <Sidebar.ItemGroup>
                <Link to="/dashboard?tab=profile">
                    <SidebarItem active={ tab==="profile" } icon={HiUser} label={"User"} labelColor="dark" as="div">
                            Profile
                    </SidebarItem>
                  </Link>  
                  <SidebarItem  icon={HiArrowSmRight} className="cursor-pointer" onClick={handleSignout}>
                        Sign Out
                  </SidebarItem> 
            </Sidebar.ItemGroup>
        </SidebarItems>
    </Sidebar>
  ) 
}
