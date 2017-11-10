import axios from 'axios';

export function checkStatus(responseData) {
  if(responseData.status >= 200 && responseData.status < 300)
    return responseData.data;

  const error = new Error((responseData.data.response && responseData.data.response.message) || '');
  error.response = responseData.data;
  throw error;
}

//http://www.mocky.io/v2/5a03254e310000ef04916982

export function processRequest(url = '', method = 'GET', data = {}) {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  return axios({
    method,
    data: JSON.stringify(data),
    headers,
    crossDomain: true,
    url: 'http://www.mocky.io/v2/' + url,
  }).then(res => checkStatus(res)
  ).catch(err => {
    throw err;
  });
}
