import Counter from "./Components/Counter";
import { Route, Routes } from "react-router";
import UserForm from "./Components/UserForm";
import Editor from "./Components/Editor";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route
            path="/form"
            element={
              <ProtectedRoute>
                <UserForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editor"
            element={
              <ProtectedRoute>
                <Editor />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
