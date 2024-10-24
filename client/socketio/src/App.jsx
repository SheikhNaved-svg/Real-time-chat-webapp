import Chat from "./Chat";
import Join from "./Join";
import History from "./History";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from "./Navbar";
import {BrowserRouter ,Routes,Route} from 'react-router-dom'

function App() {
 return(
    
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route exact path="/" element={<Join />} />
  <Route path="/chat" element={<Chat />} />
  <Route path="/history" element={<History />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login /> } />
  </Routes>
  
  </BrowserRouter>
 )
}

export default App;
