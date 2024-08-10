import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { API_BASE_URL } from '../components/BackLink'


const Signin = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(API_BASE_URL+"/user/signin",{
      username:email,
      password
    });
    localStorage.setItem("token",response.data.token);
    navigate("/dashboard");
  }

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex justify-center flex-col'>
            <div className='bg-white rounded-lg w-80 text-center p-2 h-max px-4'>
                <Heading lable={"Sign in"} />
                <SubHeading lable={"Enter your credentials to access your account"}/>
                <InputBox onChange={e => {setEmail(e.target.value)}} lable={"Email"} placeholder={"jhon_doe@gmail.com"}/>
                <InputBox onChange={e => {setPassword(e.target.value)}} lable={"Password"} placeholder={"Password"}/>
                <div className='pt-4' >
                    <Button onClick={handleSubmit} lable={"Sign in"} />
                </div>
                <BottomWarning lable={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
  )
}

export default Signin