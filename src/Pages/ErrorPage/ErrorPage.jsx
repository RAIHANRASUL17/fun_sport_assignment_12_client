import React from 'react'
import img1 from "../../assets/logo/404.gif"
import { Helmet } from 'react-helmet-async'

const ErrorPage = () => {
  return (
    <>
    <Helmet><title>Fun Sport | Error Page</title></Helmet>
    <section 
    className='flex items-center justify-center h-screen'>
      <img src={img1} alt="" />
    </section>
    </>
  )
}

export default ErrorPage
