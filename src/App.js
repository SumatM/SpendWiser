import './App.css';

import { IncomeMain } from './Income/IncomeMain';
import { Contact } from './Pages/Contact';
import Dashboard from './Pages/DashBoard/Dashboard';
import { Features } from './Pages/Features';
import { Home } from './Pages/Home';
import { How_Work } from './Pages/How_Work';
import Navbar from './Pages/Navbar';
import { Pricing } from './Pages/Pricing';
import { Screen_Shoots } from './Pages/Screen_Shoots';
import { Support } from './Pages/Support';
import { Testimomials } from './Pages/Testimomials';
import Footer from './Pages/Footer';
import { Wave } from './Pages/wave';
import { Wave1 } from './Pages/wave1';
import AllRoutes from './Components/AllRoutes';
import { Landingpage } from './Pages/Landingpage';



function App() {
  return (
    <div className="App">
<IncomeMain/>
   <AllRoutes/>
    <Landingpage/>
    </div>
  );
}

export default App;
