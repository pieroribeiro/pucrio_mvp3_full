import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import PageHome from './pages/PageHome';
import PageNewsList from "./pages/PageNewsList";
import PageNews from "./pages/PageNews";
import Page404 from './pages/Page404';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path="noticias" element={<PageNewsList />} />
          <Route path="noticia/:id" element={<PageNews />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
}