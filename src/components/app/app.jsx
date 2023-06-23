import { Navbar, Regular,  } from "..";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Section5 from "../section5/Section5";
import Footer from "../Footer/Footer";
import Renovation from "../renovation/regular";
import Window from "../window/regular";


const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/regular" element={<Regular />} />
        <Route path="/renovation" element={<Renovation />} />
        <Route path="/window" element={<Window />} />
      </Routes>
      <Section5 />
      <Footer/>
    </Box>
  );
};

export default App;
