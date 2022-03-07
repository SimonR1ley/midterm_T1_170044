import Navigation from './components/Navigation';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Routes>
       <Route path='/' element = {<ComponentOne/>}/>
       <Route path='/ComponentTwo' element = {<ComponentTwo/>}/>
       <Route path='/ComponentThree' element = {<ComponentThree/>}/>
     <ComponentTwo/>
     <ComponentThree/>
     </Routes>
    
    </div>
  );
}

export default App;
