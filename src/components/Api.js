import {BASE_URL, API_KEY, URL_QUOTE} from '../utils/config';

class Api {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res){
    if(res.ok || res.status === 200){
      return res.json();
    }else{
      Promise.reject(`Ошибка ${res.message}`);
    }
  }

  getTimeZone(){
    return fetch(`${this._baseUrl}/timezone?apiKey=${API_KEY}`, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkResponse)
  }

  getAstronomy(){
    return fetch(`${this._baseUrl}/astronomy?apiKey=${API_KEY}`, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkResponse)
  }

}

export const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
