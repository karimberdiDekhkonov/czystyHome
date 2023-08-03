import { Navbar } from "..";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Section5 from "../section5/Section5";
import Section1 from "../section1/Section1";
import Footer from "../Footer/Footer";
import Renovation from "../renovation/regular";
import Window from "../window/regular";
import Dry from "../dry/regular";
import Handyman from "../handyman/regular";
import Office from "../office/regular";
import ContactDetails from "../contacts/contactDetails";
import Address from '../address/Address'
import CalendarComponent from '../daySelection/Calendar'
import Payment from "../payment/Payment";
import Success from "../success/Success";


const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/regular" element={<Section1 />} />
        <Route path="/renovation" element={<Renovation />} />
        <Route path="/windows" element={<Window />} />
        <Route path="/dry-cleaning" element={<Dry />} />
        <Route path="/handyman" element={<Handyman />} />
        <Route path="/office" element={<Office />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <CalendarComponent/>
      <Address/>
      <ContactDetails/>
      <Payment/>
      <Section5 />
      <Footer/>
    </Box>
  );
};

export default App;
