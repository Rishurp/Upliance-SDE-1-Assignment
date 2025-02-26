import Counter from "./Components/Counter";
import { Route, Routes } from "react-router";
import UserForm from "./Components/UserForm";
import Editor from "./Components/Editor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
