'use strict';

//Random destination generator for the users day trip

let destinations = ["beach", "national park", "amusment park", "mueseum"];

function randoDest (destArray){
    return destArray[Math.floor((Math.random()*destArray.length))];
}



//Random resturaunt generator for the users day trip

let resturaunts = ["TGI Fridays", "Chick-Fil-A", "Olive Garden", "Chipotle"];

function randoResturaunt (restArray){
    return restArray[Math.floor((Math.random()*restArray.length))];
}


//Random transportation generator for the users day trip

let transportation = ["Porsche", "Honda Civic", "F-150", "Smart Car"];

function randoTrans (transArray){
    return transArray[Math.floor((Math.random()*transArray.length))];
}



//Random entertainment generator for the users day trip

let entertainment = ["Concert", "Movie", "Boxing Match", "Play"];

function randoEnt (entArray){
    return entArray[Math.floor((Math.random()*entArray.length))]
}



//If user doesn't like their choices, they can re-generate another set of
//random destinations, resturaunts, transportation, and entertainment.
let yourTrip = console.log("Your current day trip consists of:", randoDest(destinations), randoResturaunt(resturaunts), randoTrans(transportation), randoEnt(entertainment))
let dayTrip = [randoDest(destinations), randoResturaunt(resturaunts), randoTrans(transportation), randoEnt(entertainment)];
let usersChoice = prompt("Are you happy with your choices?").toLowerCase();

function reGen (trip){
    if(usersChoice !== "yes"){
        console.log("Your day trip will now consist of:" +  " " + randoDest(destinations), randoResturaunt(resturaunts), randoTrans(transportation), randoEnt(entertainment));
    } 
    return yourTrip;    
}

reGen(dayTrip);

//Is the user complete with their day trip?

let endTrip = prompt("Are you complete with your day trip?");

function userEndTrip (tripComplete){
    if(endTrip === "yes"){
        console.log("My Trip is complete!");
    }
    
}
userEndTrip(endTrip);