var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var result;
var followers = [];

// for BrotmanBaty
var params = {
                screen_name: 'BrotmanBaty',
                count: '200', 
                cursor:  -1
            };

client.get('friends/list', params, function getlist(error, list, response)     
{
    if (!error){
        result = JSON.parse(response.body);
        console.log(result)
    } else {
        console.log(error);
        // fs.writeFile('BrotmanBaty'+ Date.now() + '.json', JSON.stringify(result.users), (err) => {
        //     if (err) throw err;
        //     console.log('The file has been saved!');
        //   });
    }
});
