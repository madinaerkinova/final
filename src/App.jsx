import { Route, Routes } from "react-router-dom";
import { Home } from "./page/home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} index />
      </Routes>
    </>
  );
}

export default App;
