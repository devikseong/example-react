
import './App.css'

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Page1 from './page/advance/page1';
import Index from './page';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/page1" element={<Page1 />} />
  </Routes>
</BrowserRouter>
}

export default App
