import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Loader from "./components/loader/Loader";

// lazy loading
const Home = React.lazy(() => import("../src/pages/home/Home"));
const Detail = React.lazy(() => import("../src/pages/detail/Detail"));
const Error = React.lazy(() => import("../src/pages/error/Error"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:beerId" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
