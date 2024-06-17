import { Outlet } from 'react-router-dom'
import Header from "../components/Header"
import Footer from '../components/Footer'
import fetchData from '../services/fetchData'
import { useEffect, useState } from 'react'

export default function Layout () {
  const [dataConfig, setConfig] = useState({})
  const [dataNewsList, setDataNewsList] = useState({})
  const [dataAbout, setAbout] = useState({})
  
  useEffect(() => {
    fetchData(`/data/config.json`)
    .then(res => {setConfig(res)})
    .catch(error => console.log(error))

    fetchData(`/data/news.json`)
    .then(res => setDataNewsList(res.slice(0, 35)))
    .catch(error => console.log(error))

    fetchData(`/data/about.json`)
    .then(res => setAbout(res || []))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Header title={dataConfig?.information?.title} menuItems={dataConfig?.menuItems} />
      <Outlet context={[dataConfig, dataNewsList, dataAbout]} />
      <Footer />
    </>
  )
};