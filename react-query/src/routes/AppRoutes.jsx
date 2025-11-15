import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import FetchOld from "../pages/FetchOld/index.jsx";
import FetchRQ from "../pages/FetchRQ/index.jsx";
import FetchIndv from "../UI/FetchIndv/index.jsx";
import InfiniteScroll from "../pages/InfiniteScroll/index.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/old" element={<FetchOld />}/>
      <Route path="/rq" element={<FetchRQ />}/>
      <Route path="/rq/:id" element={<FetchIndv />}/>
       <Route path="/infinite" element={<InfiniteScroll />}/>
    </Routes>
  );
}
