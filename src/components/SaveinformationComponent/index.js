import Auth from '../../configuration/configuration-aws'

import axios from 'axios';

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
    console.log('data ', data)
    let response;
    let convertedFile = await convertToBase64(data['personalpicture']);
    convertedFile = data['personalpicture'].type + ' ' + convertedFile;
    await axios.post("https://niafewy1vj.execute-api.ap-southeast-1.amazonaws.com/dev/file-upload", convertedFile).then((res) => {
      data['personalpicture'] = res.data.Location
    })
    convertedFile = await convertToBase64(data['idcard']);
    convertedFile = data['idcard'].type + ' ' + convertedFile;
    await axios.post("https://niafewy1vj.execute-api.ap-southeast-1.amazonaws.com/dev/file-upload", convertedFile).then((res) => {
      data['idcard'] = res.data.Location
    })
    let token;
    await Auth.currentSession()
    .then(res => {
      token = res.getAccessToken();
    })
    .catch(err => console.log(err));
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
    await axios({
      method: 'patch',
      url: 'https://niafewy1vj.execute-api.ap-southeast-1.amazonaws.com/dev/user',
      params: params,
      headers: { 
          'Authorization': token.getJwtToken(), 
          'Content-Type': 'text/plain'
      },
      data: bodydata
      }).then((res) => {
        response = res
      }).catch((err)=>{
        response = err
      })
      return response
  }

  export const SaverelevantInformation = async (data , userId) => {
    let response;
    let token;
    await Auth.currentSession()
    .then(res => {
      token = res.getAccessToken();
    })
    .catch(err => console.log(err));
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
    await axios({
      method: 'patch',
      url: 'https://niafewy1vj.execute-api.ap-southeast-1.amazonaws.com/dev/user',
      params: params,
      headers: { 
          'Authorization': token.getJwtToken(), 
          'Content-Type': 'text/plain'
      },
      data: bodydata
      }).then((res) => {
        response = res
      }).catch((err)=>{
        response = err
      })
      return response
  }