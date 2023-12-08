import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import { UserC, UserR } from "./components/users";
import { BoardC, BoardR } from "./components/boards";
import { Layout } from "./components/atomics/moles";

function App() {
    return (
        <div className="App">
            <Layout />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/boards" element={<BoardC />} />
                <Route path="/boards/:id" element={<BoardR />} />
                <Route path="/users" element={<UserC />} />
                <Route path="/users/:id" element={<UserR />} />
            </Routes>
        </div>
    );
}

export default App;
