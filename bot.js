const Discord = require("discord.js");
const axios = require("axios")
const dotenv = require("dotenv")


const config = require("./config.json");
const client = new Discord.Client();

const result = dotenv.config()
console.log(result)
const token = process.env.BEARER_TOKEN
console.log(token)

const url = "http://api.coincap.io/v2/assets/amp"



const prefix = "#";
client.on("message", function(message) {


  if (message.author.bot) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  const coinName = args.split(' ');

  let user = message.author.id;
  let content = message.content;
  
  if (command === "price") {

    

    let AMP 

function urlBuilder(coinName){
  return `http://api.coincap.io/v2/assets${coinName}`;
}

function getRequest(coinToGet) {
  axios.get(urlBuilder(coin), {
      headers: { Authorization: 'Bearer ' + token }
  }
  )
      .then( function (response) {
          console.log(response.data.data.priceUsd)
          AMP = response.data.data.priceUsd 
          message.reply(`${coinToGet} USD price is :${AMP}`)
      })
      .catch(function (error) {
          console.log(error)
          currentPrices.push("error");
      })
}
    getRequest()
    console.log(AMP)
     
    
  }

});

client.login(config.BOT_TOKEN);