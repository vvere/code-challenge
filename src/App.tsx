import { HomePage, PathPage } from "components";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/path/:info" element={<PathPage />} />
  </Routes>
);

export default App;
