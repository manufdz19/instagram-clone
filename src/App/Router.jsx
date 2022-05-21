import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Views/Login/Login'
import ResetPassword from '../Views/ResetPassword/ResetPassword'

const Router = () => {
  return (
    <Routes>
      { /* Public routes */ }
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password/reset" element={<ResetPassword />} />

    </Routes>
  )
}

export default Router