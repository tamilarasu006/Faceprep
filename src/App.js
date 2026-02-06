import Welcome from "./components/Welcome";
import './App.css';
import Message from "./components/Message";
import Likes from "./components/Likes";

function App (){
  return(
    <div className="App">
      <Welcome companyName="FACE Prep"/>
      <Message/>
      <Likes/>
    </div>
  )
}

export default App;