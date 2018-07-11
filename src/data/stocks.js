import axios from 'axios';


const crypto = [];

export const loadData =  axios.get('https://api.coinmarketcap.com/v2/ticker/')
                        .then(response => {
                          if (response.data.data) {
                            var data = response.data.data;

                            for(var key in data){
                              crypto.push(data[key]);
                            }
                          }
                        });


console.log(loadData);
console.log(crypto);

export default crypto;

