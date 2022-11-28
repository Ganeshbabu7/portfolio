import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Component/Nav'
import Name from './Component/Name'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Contactus from './Component/Contactus'
import Introduction from './Component/Introduction'

function App() {
  return <div className="App">
      <BrowserRouter>
        <Nav/>
        <Name/>
        <Routes>
          <Route path='/' element={<Introduction/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
        </Routes>
      </BrowserRouter>
    </div>
}

export default App;
