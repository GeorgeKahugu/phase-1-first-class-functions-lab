// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice (0,2);
}
const returnLastTwoDrivers=function(drivers){
    return drivers.slice (-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare){
         const quadruple= function(){
            return fare ** 2;    
         };
         return quadruple   
}

function fareDoubler(fare){
    return fare*2
}

function fareTripler(fare){
    return fare*3
}

function selectDifferentDrivers(arrayOfDrivers,selectingFunction){
    return selectingFunction(arrayOfDrivers);
}
