import config from '../config'
import TokenService from './token-service'


const DashboardService = {
  getLanguageAndWords(){
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res => res.json())
    .then(data => {
      return data;
    });
  },
  getHead(){
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res => res.json())
    .then(data => {
      return data;
    });
  },
  postGuess( answer = {} ){
   return fetch(`${config.API_ENDPOINT}/language/guess`, {
     method: 'POST',
     headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ answer }),
  })
    .then(res =>
      (!res.ok)
        ? res.json().then(err => Promise.reject(err))
        : res.json()
    )
 }
}
export default DashboardService;
