let names=["penny" , "howard" , "leaonard" , "sheldon" , "rajesh"];

// sfc => stateless functional component
function Hello(props){
    console.log(props);
    // {name:"penny"}
    return <h1>Hello from {props.name} component !!</h1> 
}

// JSX => JS ka code 
// use {}

// i want to render multiple hello components
function BigHello(){
    return <React.Fragment>
        {names.map(function(name){
            return <Hello name={name} key={name}></Hello>
        })}
        </React.Fragment>
}

    // (  What to render , where to render  );
ReactDOM.render( <BigHello />  , document.getElementById("root") );