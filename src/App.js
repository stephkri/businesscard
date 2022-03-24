import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

import Application from "./components/Application";
import CardShow from "./components/pages/CardShow";
import Layout from "./components/pages/Layout";

import './App.css'

function App() {
  // const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Application />} />
            <Route
              path={`showcard/:id`}
              element={<CardShow />}

              // element={<QRCode value={`showcard/${props.card.id}`} size={128} />}
              // element={<QRCode value={`showcard/104`} size={328} />}
              // element={<QR />}
            />
            {/* <Route path={`showQR/:id`} 
              element={<QR />}>
            </Route> */}

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
