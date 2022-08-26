import { NavLink } from 'react-router-dom';
import mini from '../assets/mini.png'

function Menu(){

    return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img style={{height:"40px", border:"none", borderRadius: "100%"}} src={mini}></img> </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/naruto">Combat</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/todo">Todo</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Menu;