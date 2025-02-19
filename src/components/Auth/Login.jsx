import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const submitHandeler = (e)=>{
        e.preventDefault()
        console.log("from submited" ,email);
        console.log("from submited" ,password);


        setEmail("")
        setPassword("")
    }



  return (
    <div className='flex items-center justify-center min-h-screen bg-[#111]'>
      <div className='flex rounded-2xl overflow-hidden shadow-xl max-w-[800px] w-full'>
        {/* Left Side - Welcome Message */}
        <div 
          className='flex-1 p-8 flex flex-col justify-center items-center text-center'
          style={{
            background: 'linear-gradient(45deg, #1A1A19, #31511E, #859F3D, #F6FCDF)',
            color: '#1A1A19'
          }}
        >
          <h2 className='text-3xl font-bold mb-4'>Welcome Back!</h2>
          <p className='text-lg font-medium'>Enter your details to access your account</p>
        </div>

        {/* Right Side - Login Form */}
        <div className='flex-1 p-12 bg-[#F6FCDF]'>
          <h2 className='text-3xl font-bold mb-8 text-[#1A1A19]'>Sign In</h2>
          <form onSubmit={(e)=>{
            submitHandeler(e)
          }} className='space-y-4'>
            <input
              type="email"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              placeholder="Email"
              className='w-full p-4 my-2 border-b-2 border-[#31511E] outline-none focus:border-[#859F3D] transition-colors bg-transparent'
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e)=>{
               setPassword(e.target.value) 
              }}
              placeholder="Password"
              className='w-full p-4 my-2 border-b-2 border-[#31511E] outline-none focus:border-[#859F3D] transition-colors bg-transparent'
              required
            />
            <button
              type="submit"
              className='w-full p-4 mt-6 bg-[#31511E] text-[#F6FCDF] rounded-full font-bold hover:bg-[#859F3D] transition-colors'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login