import { Outlet } from 'react-router-dom'
import Header from "../components/Header"
import Footer from '../components/Footer'
import fetchData from '../services/fetchData'
import { useEffect, useState } from 'react'

export default function Layout () {
  const [dataConfig, setConfig] = useState({})
  
  useEffect(() => {
    fetchData(`/data/config.json`)
    .then(res => {
      setConfig(res)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Header title={dataConfig?.information?.title} menuItems={dataConfig?.menuItems} />
      <Outlet />
      <Footer />
    </>
  )
};