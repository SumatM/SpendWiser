import './App.css';
// import { IncomeForm } from './Income/IncomeForm';
import { Contact } from './Pages/Contact';
import { Features } from './Pages/Features';
import { Home } from './Pages/Home';
import { How_Work } from './Pages/How_Work';
import Navbar from './Pages/Navbar';
import { Pricing } from './Pages/Pricing';
import { Screen_Shoots } from './Pages/Screen_Shoots';
import { Support } from './Pages/Support';
import { Testimomials } from './Pages/Testimomials';


function App() {
  return (
    <div className="App">

{/* <IncomeForm/> */}

   <Navbar/>
   <Home/>
   <Features/>
   <How_Work/>
   <Screen_Shoots/>
   <Testimomials/>
   <Pricing/>
   <Contact/>
   <Support/>
    </div>
  );
}

export default App;
