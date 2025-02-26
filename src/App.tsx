import Counter from "./Components/Counter";
import { Route, Routes } from "react-router";
import UserForm from "./Components/UserForm";
import Editor from "./Components/Editor";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <div className="h-screen">

      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
       </div>
    </>
  );
}

export default App;
