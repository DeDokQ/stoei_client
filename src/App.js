import './App.css';
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./pages/Navbar";

const App = observer(() => {
      return (
          <BrowserRouter>
            <Navbar/>
            <AppRouter/>
          </BrowserRouter>
      );
    }
)
export default App;
