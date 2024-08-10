import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { API_BASE_URL } from '../components/BackLink'

const Signup = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex justify-center flex-col'>
            <div className='bg-white rounded-lg w-80 text-center p-2 h-max px-4'>
                <Heading lable={"Sign up"} />
                <SubHeading lable={"Enter your infromation to create an account"}/>
                <InputBox onChange={e => {
                  setFirstName(e.target.value);
                }} lable={"First Name"} placeholder={"Jhon"}/>
                <InputBox onChange={e => {
                  setLastName(e.target.value);
                }} lable={"Last Name"} placeholder={"Doe"}/>
                <InputBox onChange={e => {
                  setUsername(e.target.value);
                }} lable={"Email"} placeholder={"jhon_doe@gmail.com"}/>
                <InputBox onChange={e => {
                  setPassword(e.target.value);
                }} lable={"Password"} placeholder={"Password"}/>
                <div onClick={async() => {
                  const response = await axios.post(API_BASE_URL+"/user/signup",{
                    firstName,
                    lastName,
                    username,
                    password
                  });
                  localStorage.setItem("token",response.data.token);
                  navigate("/dashboard");
                }} className='pt-4'>
                    <Button lable={"Sign up"} />
                </div>
                <BottomWarning lable={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
  )
}

export default Signup