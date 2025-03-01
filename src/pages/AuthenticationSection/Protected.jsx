import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const token = localStorage.getItem('token');

  return (
    token ? <Navigate to="/home" /> : <Navigate to="/home" />
  )
}

export default Protected