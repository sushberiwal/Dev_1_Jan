function getFirstName(fullName){
    // "STEVE  ROGERS akjsdn aksnfajk alksnfkja alksnfkla"
    fullName = fullName.split(" ");
    // [ "STEVE" , "ROGERS"  ];
    return fullName[0];
}


function getLastName(fullName){
    // "TONY STARK"
    fullName = fullName.split(" ");
    return fullName[1];
}

function fun(fullName , fn){
    let name = fn(fullName);
    console.log(name);
    return 20;
}



fun("Steve ROgers" , getFirstName);
fun("Tony Stark" , getLastName);