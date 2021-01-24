let users = ["penny" , "howard" , "leonard" , "rajesh"];

let toBeDeleted = "howard";

let filteredUser = users.filter(filterFunction)



function filterFunction(name){
    return name != toBeDeleted;
}
console.log(filteredUser);



let values = [2 , 5 , 10 , 23 , 42];


let squaredValues  = values.map(  function(value){
    return value*value;
})

console.log(squaredValues);