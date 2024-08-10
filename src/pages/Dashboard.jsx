import React, { useEffect, useState } from 'react'
import { AppBar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users } from '../components/User'
import axios from 'axios'
import { API_BASE_URL } from '../components/BackLink'

const Dashboard = () => {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(API_BASE_URL+"/account/balance", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setBalance(response.data.balance);
      })
  }, [])

  return (
    <div>
      <AppBar />
      <div className='m-8'>
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  )
}

export default Dashboard