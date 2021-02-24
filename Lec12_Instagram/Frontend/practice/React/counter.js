// class based component // stateful component
class Counter extends React.Component{
    // 1. Initially constructor method call
    constructor(){
        super(); // React.Component ka constructor fire
        this.state = {
            count:0
        } // initialize this.state as an empty object
    }

    increment = ()=>{
        console.log("Increment called ");
        // setState => render method is called again
        this.setState({
            count:this.state.count+1
        })
    }

    decrement = ()=>{
        console.log("decrement called ");
        this.setState({
            count:this.state.count-1
        })
    }

    reset = ()=>{
        console.log("reset called ");
        this.setState({
            count:0
        })
    }


    // 2. render method call
    render(){
        return <React.Fragment>
            <div className="container">
            <p>{this.state.count}</p>
            <button className="btn btn-danger" onClick={this.decrement}>-</button>
            <button className="btn btn-primary" onClick={this.increment}>+</button>
            <button className="btn btn-warning" onClick={this.reset}>RESET</button>
            </div>
        </React.Fragment>
    }
}


ReactDOM.render( <Counter />     ,  document.getElementById("root") )