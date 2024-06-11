import { Outlet } from 'react-router-dom'
import Header from "../components/Header"
import Footer from '../components/Footer'

export default function Layout () {
  const siteName = "N4W - Web Solutions"
  const menuItems = [
    {
      title: "Notícias",
      url: "/noticias"
    },
    {
      title: "Sobre",
      url: "/sobre"
    }
  ];

  return (
    <>
      <Header title={siteName} menuItems={menuItems} />
      <Outlet />
      <Footer />
    </>
  )
};