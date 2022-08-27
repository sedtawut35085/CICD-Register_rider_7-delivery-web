import { updateUser, uploadPhoto } from '../../service/index'

let response
let convertedFile

const convertToBase64 = (file) => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          resolve(reader.result);
          }
    })
  }

export const SavepersonalInformation = async (data , userId) => {
    convertedFile = await convertToBase64(data['personalpicture']);
    convertedFile = data['personalpicture'].type + ' ' + convertedFile;
    data['personalpicture'] = await uploadPhoto(convertedFile)
    convertedFile = await convertToBase64(data['idcard']);
    convertedFile = data['idcard'].type + ' ' + convertedFile;
    data['idcard'] = await uploadPhoto(convertedFile)
    var bodydata = {
      "updateKey"     : "personalInformation",
      "updateValue"   : {
        "name"             : data['name'],
        "surname"          : data['surname'],
        "birthday"         : data['birthday'],
        "gender"           : data['gender'],
        "age"              : data['age'],
        "cardNumber"       : data['cardNumber'],
        "cardIssueDate"    : data['cardIssueDate'],
        "cardExpireDate"   : data['cardExpireDate'],
        "cardPhoto"        : data['idcard'],
        "userPhoto"        : data['personalpicture']
      }
    }
    var params = {
      "userId" : userId
    }
    response = await updateUser(params, bodydata)
    return response
    
  }

  export const SaverelevantInformation = async (data , userId) => {
    var bodydata = {
      "updateKey"     : "relevantPersonInformation",
      "updateValue"   : {
        "name"         : data["namerelevant"],
        "surname"      : data["surnamerelevant"],
        "phone"        : data["relationship"],
        "relationship" : data["phonerelevant"]
      }
    }
    var params = {
      "userId" : userId
    }
    response = await updateUser(params, bodydata)
    return response
  }

  export const SavebookbankInformation = async (data , userId) => {
    convertedFile = await convertToBase64(data['bookbankphoto']);
    convertedFile = data['bookbankphoto'].type + ' ' + convertedFile;
    data['bookbankphoto'] = await uploadPhoto(convertedFile)
    var bodydata = {
      "updateKey"     : "bookBankInformation",
      "updateValue"   : {
        "name"         : data["namebookbank"],
        "surname"      : data["surnamebookbank"],
        "numberbookbank" : data["idbookbank"],
        "namebank" : data["namebank"],
        "bookbankPhoto" : data["bookbankphoto"]
      }
    }
    var params = {
      "userId" : userId
    }
    response = await updateUser(params, bodydata)
    return response
  }

  export const SavecriminalhistoryInformation = async (data , userId) => {
    convertedFile = await convertToBase64(data['criminalhistoryphoto']);
    convertedFile = data['criminalhistoryphoto'].type + ' ' + convertedFile;
    data['criminalhistoryphoto'] = await uploadPhoto(convertedFile)
    var bodydata = {
      "updateKey"     : "criminalHistoryInformation",
      "updateValue"   : {
        "criminalhistoryPhoto"   : data["criminalhistoryphoto"],
      }
    }
    var params = {
      "userId" : userId
    }
    response = await updateUser(params, bodydata)
    return response
  }

  export const SavedriverlicenseInformation = async (data , userId) => {
    var bodydata
    if(data['typedriverlicense'] === 'normal'){
      convertedFile = await convertToBase64(data['driverlicensephoto']);
      convertedFile = data['driverlicensephoto'].type + ' ' + convertedFile;
      data['driverlicensephoto'] = await uploadPhoto(convertedFile)
      bodydata = {
        "updateKey"     : "driverLicenseInformation",
        "updateValue"   : {
          "numberdriverLicense"   : data["numberdriverlicense"],
          "typedriverLicense"     : data["typedriverlicense"],
          "issuedatedriverLicense"    : data["driverlicenseIssueDate"],
          "expiredatedriverLicense"   : data["driverlicenseExpireDate"],
          "driverLicensePhoto"  : data['driverlicensephoto']
        }
      }
    }else{
      convertedFile = await convertToBase64(data['driverlicensephoto']);
      convertedFile = data['driverlicensephoto'].type + ' ' + convertedFile;
      data['driverlicensephoto'] = await uploadPhoto(convertedFile)
      convertedFile = await convertToBase64(data['documentdriverlicensephoto']);
      convertedFile = data['documentdriverlicensephoto'].type + ' ' + convertedFile;
      data['documentdriverlicensephoto'] = await uploadPhoto(convertedFile)
      bodydata = {
        "updateKey"     : "driverLicenseInformation",
        "updateValue"   : {
          "numberdriverLicense"   : data["numberdriverlicense"],
          "typedriverLicense"     : data["typedriverlicense"],
          "issuedatedriverLicense"    : data["driverlicenseIssueDate"],
          "expiredatedriverLicense"   : data["driverlicenseExpireDate"],
          "driverLicensePhoto"        : data['driverlicensephoto'],
          "documentdriverLicensePhoto" : data['documentdriverlicensephoto'],
          "issmartcarddriverlicense" : data['issmartcarddriverlicense']
        }
      }
    }
   
    var params = {
      "userId" : userId
    }
    response = await updateUser(params, bodydata)
    return response
  }