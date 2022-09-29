import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import Event from './components/Event/Event';
import Home from "./components/Home/Home";

export const UseContext = React.createContext()
function App() {
    const [eventDetails, setEventDetails] = useState({})
    console.log(eventDetails)
    const state={
        setEventDetails,
        eventDetails
    }
    return (
      <UseContext.Provider value={state}>
          <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateEvent />} />
                <Route path="/event" element={<Event />} />
            </Routes>
        </>
      </UseContext.Provider>
    );
}

export default App;