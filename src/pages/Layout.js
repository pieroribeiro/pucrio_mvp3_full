import { Outlet, useLocation } from 'react-router-dom'
import Header from "../components/Header"
import Footer from '../components/Footer'
import fetchData from '../services/fetchData'
import { useEffect, useState } from 'react'

export default function Layout () {
  const [dataConfig, setConfig] = useState({})
  const [dataNewsList, setDataNewsList] = useState([])
  const [dataAbout, setAbout] = useState({})
  const location = useLocation()
  
  useEffect(() => {
    async function fetchAllData () {      
      let response = await fetchData(`/data/config.json`)
      setConfig(response)
        
      response = await fetchData(`/data/news.json`)
      setDataNewsList(response.slice(0, 35))
        
      response = await fetchData(`/data/about.json`)
      setAbout(response)
    }

    fetchAllData();
  }, [])

  return (
    <>
      <Header title={dataConfig?.information?.title} menuItems={dataConfig?.menuItems} location={location} />
      <Outlet context={[dataConfig, dataNewsList, dataAbout]} />
      <Footer />
    </>
  )
};