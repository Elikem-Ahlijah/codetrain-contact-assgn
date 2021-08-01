import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import display from "./pages/display";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="container-flex">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/" component={display} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state =[{name: 'Kojo',
//     number: 24247,
//     location: 'Accra'},
//     {name: 'Ama',
//     number: 22457,
//     location: 'Alajo'},
//     {name: 'Johnson',
//     number: 23447,
//     location: 'Abeka'}]

//     // this.state={contacts}
//   }
//   render() {
//     return (
//       <div>
//         {this.state.map((contact, index)=>(<p>{contact.name}</p>))}
//       </div>
//     )
//   }
// }

export default App;
