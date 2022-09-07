import * as routeconstant from '../../constant/routeconstant'


export const checkstate = async (data) => {
    let route
    if(data.userEmail === undefined){
        route = routeconstant.RouteContent.preliminary
    }else if(data.userPhone === undefined){
        route = routeconstant.RouteContent.verifyphone
    }else {
        route = routeconstant.RouteContent.information
    }
    return route

}

export const checkinformationstate = async (data) => {
    let currentstep
    if(data.personalInformation === undefined){
        currentstep = 1
    }else if(data.bookBankInformation === undefined){
        currentstep = 2
    }else if(data.driverLicenseInformation === undefined){
        currentstep = 3
    }else if(data.carInformation === undefined){
        currentstep = 4
    }else{
        currentstep = 5
    }
    return currentstep

}