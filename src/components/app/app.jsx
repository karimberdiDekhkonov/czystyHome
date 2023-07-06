import { Navbar, Regular,  } from "..";
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
import Admin from "../admin/admin";
import ContactDetails from "../contacts/conyactDetails";
import Address from '../address/Address'
import CalendarComponent from '../daySelection/Calendar'
import Payment from "../payment/Payment";


const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/regular" element={<Regular />} />
        <Route path="/renovation" element={<Renovation />} />
        <Route path="/windows" element={<Window />} />
        <Route path="/dry-cleaning" element={<Dry />} />
        <Route path="/handyman" element={<Handyman />} />
        <Route path="/office" element={<Office />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Section1/>
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
