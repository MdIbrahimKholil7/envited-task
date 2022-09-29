import { Route, Routes } from "react-router-dom";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import Home from "./components/Home/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateEvent />} />
            </Routes>
        </>
    );
}

export default App;