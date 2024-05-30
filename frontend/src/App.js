import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from './pages/PageHome';
import PageApis from './pages/PageApis';
import Layout from './pages/Layout';
import Page404 from './pages/Page404';
import PageChart from "./pages/PageChart";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path="apis" element={<PageApis />} />
          <Route path="graphics" element={<PageChart />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
}