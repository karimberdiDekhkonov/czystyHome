import { Navbar, Regular } from "..";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Section5 from "../section5/Section5";


const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/regular" element={<Regular />} />
      </Routes>
      <Section5 />
    </Box>
  );
};

export default App;
