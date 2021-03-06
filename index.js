// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
  }

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length-2,drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int){
  return function (num){return num*int}
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare)
}

function fetchSpecifiedDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers)
}
