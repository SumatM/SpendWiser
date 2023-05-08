import './App.css';

// import { IncomeForm } from './Income/IncomeForm';
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


{/* <IncomeForm/> */}

   <Navbar/>
   <Home/>
   <Wave/>
   <Features/>
   <Wave1/>
   <How_Work/>
  
   <Screen_Shoots/>
   <Wave1/>
   <Testimomials/>
   <Wave/>
   
   <Wave1/>
   <Pricing/>
   <Contact/>
   <Support/>
   <Footer/>
   <AllRoutes/>
    <Landingpage/>
    </div>
  );
}

export default App;
