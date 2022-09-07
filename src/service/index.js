import Auth from '../configuration/configuration-aws'
import axios from 'axios';

const baseUrl = 'https://niafewy1vj.execute-api.ap-southeast-1.amazonaws.com/dev'
let response
let token
let userId

export const getUser = async () => {
  await Auth.currentSession()
  .then(res => {
    token = res.getAccessToken();
  })
  .catch(err => console.log(err));
  await Auth.currentAuthenticatedUser()
  .then((response) => {
      userId = response.username
  })
  .catch(() => {
  })
  await axios({
      method: 'get',
      url: `${baseUrl}/user`,
      params: {
        "userId" : userId
      },
      headers: { 
          'Authorization': token.getJwtToken(), 
          'Content-Type': 'text/plain'
      },
      }).then((res) => {
        response = res
      }).catch((err)=>{
        response = err
      })
  return response
}

export const updateUser = async (params , bodydata) => {
    await Auth.currentSession()
    .then(res => {
      token = res.getAccessToken();
    })
    .catch(err => console.log(err));
    await axios({
        method: 'patch',
        url: `${baseUrl}/user`,
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

export const uploadPhoto = async (file) => {
    await axios.post(`${baseUrl}/file-upload`, file).then((res) => {
      response = res.data.Location
    })
    return response
}
