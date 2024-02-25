
import Login from './components/Login';
import Home from './components/Home';
import {  useState } from 'react';
import './style/App.css';
import Route from './components/Route';
import useNavigation from './hooks/use-navigation';


function App (){
    const [inputPassword,setInputPassword] = useState('');
    const [inputEmail,setInputEmail] = useState('');
   const {navigate}=useNavigation();
    
   

    const handleSubmit = (e) => {
        e.preventDefault()
       navigate('/home')
    }
    

    
    return(

        <div className="App">
        
          
            <Route path="/">
          <Login  inputEmail={inputEmail} inputPassword={inputPassword}  setInputEmail={setInputEmail} setInputPassword={setInputPassword} onClick={handleSubmit}/>
        </Route>
        <Route path="/home">
          <Home inputEmail={inputEmail} />
        </Route>
         
      </div>
    )

}
export default App;