
import './App.css'

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Page1 from './page/advance/page1';
import Page2 from './page/advance/page2';
import Index from './page';
import Page3 from './page/advance/page3';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/page1" element={<Page1 />} />
    <Route path="/page2" element={<Page2 />} />
    <Route path="/page3" element={<Page3 />} />
  </Routes>
</BrowserRouter>
}

export default App
