import './App.css';
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
import { Wave } from './Pages/wave';
import { Wave1 } from './Pages/wave1';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Home/>
   <Wave/>
   <Features/>
   <Wave1/>
   <How_Work/>
   <Screen_Shoots/>
   <Testimomials/>
   <Pricing/>
   <Contact/>
   <Support/>
   <Dashboard/>
    </div>
  );
}

export default App;
