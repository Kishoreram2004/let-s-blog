import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col sm:flex-row gap-5'>
        <div className='flex-1'>
            <Link to="/" className='text-4xl font-bold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 text-white rounded-lg ' >Let's</span>
                Blog
            </Link>
            <p className='text-sm mt-5 '>
              To Explore more please signup.
            </p>
        </div>
      <div className='flex-1'>
          <form className='flex flex-col gap-4' >
            <div>
                <Label value="Your username"></Label>
                <TextInput type="text" placeholder='Username' id='username'/>
            </div>
            <div>
                <Label value="Your email"></Label>
                <TextInput type="text" placeholder='Email' id='email'/>
            </div>
            <div>
                <Label value="Your password"></Label>
                <TextInput type="password" placeholder='Password' id='password'/>
            </div>
            <Button className='bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800' type="submit">Sign Up </Button>
            
          </form>
          <div className='flex gap-2 text-sm mt-5 '>
            <spam>Have an account?</spam>
            <Link to="/sign-in" className='text-gray-800'>Sign In</Link> 
          </div>
      </div>
      </div>
    </div>
  )
}

export default SignUp