import Canvas from "./canvas";
import {Routes, Route} from "react-router-dom";
import Customizer from "./pages/Customizer";
import { LegalNotice } from './components/LegalNotice';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Terms } from "./components/Terms";


function App() {
  return (
    <>
    <Terms />
    <Routes>
          <Route path="legal-notice" element={ <LegalNotice/>}/>
          <Route path="privacy-policy" element={ <PrivacyPolicy/>}/>
          <Route path="/" element=
          {
          <main className="app transition-all ease-in">
            <Canvas/>
            <Customizer/>
          </main>
          }/>
    </Routes>
    </>
  )
}


export default App
