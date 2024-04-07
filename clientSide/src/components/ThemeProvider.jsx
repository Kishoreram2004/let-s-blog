import React from 'react'
import {  useSelector } from 'react-redux'
export const ThemeProvider = ({children}) => {
    const {theme} = useSelector(state=>state.theme)
  return (
    <div className={theme}>
        <div className='bg-white text-gray-950 dark:text-white dark:bg-gray-950 min-h-screen'> 
                    {children}
        </div>
    </div>
  )
}
