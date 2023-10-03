import { Navbar } from "..";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Section1 from "../section1/Section1";
import Renovation from "../renovation/regular";
import Window from "../window/regular";
import Dry from "../dry/regular";
import Handyman from "../handyman/regular";
import Office from "../office/regular";
import Success from "../success/Success";
import Regulation from '../regulations/Regulation'
import Privacy from '../privacy/Privacy'


const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/regular" element={<Section1 />} />
        <Route path="/renovation" element={<Renovation />} />
        <Route path="/windows" element={<Window />} />
        {/* <Route path="/dry-cleaning" element={<Dry />} />
        <Route path="/handyman" element={<Handyman />} /> */}
        <Route path="/office" element={<Office />} />
        <Route path="/success" element={<Success />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/regulation" element={<Regulation />} />
      </Routes>
    </Box>
  );
};

export default App;
