import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'



const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading]  = useState(false)
  const navigate=useNavigate();
  const handleChange=(e)=>{ 
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("please fill out all fields!!")
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if (res.ok){
        navigate("/sign-in")
      }
    }catch(error){
      setErrorMessage(error.message);
      setLoading(false)
    }
  }
  
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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
                <Label value="Your username"></Label>
                <TextInput type="text" placeholder='Username'  id='username' onChange={handleChange}/>
            </div>
            <div>
                <Label value="Your email"></Label>
                <TextInput type="email" placeholder='abc@gmail.com' id='email' onChange={handleChange}/>
            </div>
            <div>
                <Label value="Your password"></Label>
                <TextInput type="password" placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            <Button className='bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800' type="submit" disabled={loading} >
              {
                loading?(
                  <>
                  <Spinner size="sm"/>
                  <span className='pl-3'>Loading...</span>
                  </>

                ):"Sign Up"
              }
            </Button>
            
          </form>
          <div className='flex gap-2 text-sm mt-5 '>
            <span>Have an account?</span>
            <Link to="/sign-in" className='text-gray-800' >Sign In</Link> 
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color="red" >{errorMessage}</Alert>
            )
          }
      </div>
      </div>
    </div>
  )
}

export default SignUp