import { createRoot } from 'react-dom/client'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';


createRoot(document.getElementById('root')).render(
    <>
    <div className="container">
    <NavBar brandname="The Rocket Shop"/>
    <div className="items">
    <ItemListContainer greeting="Misiles Teledirijidos" texto="niidea" />
    </div>
    </div>
    </>
)

