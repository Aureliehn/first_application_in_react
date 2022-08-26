import { Component } from "react";
import sasuke from'../assets/sasuke.png';
import countHits from "./countHits";

class Sasuke extends Component{
    render(){
    
        const {name, life, hocState, addOneHit} = this.props
        const hits = hocState.hits < 11 ? (hocState.hits) : ('Coup max atteint') 
        const button = life > 0 ? (<button className="btn btn-dark mt-3" onClick={addOneHit}>{name}</button>) : (<button className="mt-3 diasbled btn btn-danger">{name} est mort</button>)
        const lifeValue = life > 0 ? (<td>{life}</td>) : (<td className="text-danger">Mort</td>)
        return(

                <div className="col-6">
                    <img src={sasuke}/><br/>
                    {button}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                            <th scope="col">Vie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            {hits}   
                            </td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }

}

export default countHits(Sasuke);