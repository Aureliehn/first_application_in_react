import { Component } from "react"

function countHits(WrappedComponent){

    class CountHits extends Component {
        state = {
            hits : 0
        }
        addOne = ()=>{
            this.setState(prevState =>{
                    return{
                        hits: prevState.hits +1
                    }
            })
        }

        componentDidUpdate(prevPros, prevState){
            if(this.state !== prevState){
                const CompName = WrappedComponent.name;
                this.props.reduce(CompName)
            }
        }

        render(){
            return <WrappedComponent addOneHit={this.addOne} hocState={this.state} {...this.props}/>
        }
    }
    return CountHits;
}

export default countHits