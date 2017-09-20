var axios = require('axios');
var URL='http://localhost:3001';

export const getPins = function(){
                        return axios.get()
                         .then(res =>res.json())
                        }