import { Route, Routes, BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import { Home, About, Contact, Projects } from "./pages"

const App = () => {
    return (
        <main className="bg-slate-300/20 min-h-[100vh]">
            <BrowserRouter>      
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>   
            </BrowserRouter>
        </main>
    )
}

export default App