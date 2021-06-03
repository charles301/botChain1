const Discord = require("discord.js");
const SHA256 = require('crypto-js/sha256')

const config = require("./config.json");
const Blockchain = require("./blockchain");
const client = new Discord.Client();


let disc0in = new Blockchain();
incrementor = 1

class Block{
  constructor(index, timestamp, data, previousHash = ""){
      this.index = index
      this.timestamp = timestamp
      this.data = data
      this.previousHash = previousHash
      this.hash = this.calculateHash()

  }
  calculateHash(){
      return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
  }
}

const prefix = "#";
client.on("message", function(message) {


  if (message.author.bot) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  let user = message.author.id;
  let content = message.content;
  
  
  
  disc0in.addBlock(new Block(incrementor, Date, {amount: 1, "user" : user,"content": content}))

  incrementor++
  if (command === "dc") {
   let valid = disc0in.isChainValid();
   let latest = disc0in.getLatestBlock();
   let chain = disc0in;
   let previousContent = disc0in
   message.reply(valid);
   console.log(disc0in)
   console.log(previousContent)
  }

//   if (!message.content.startsWith(prefix)) return;

//   const commandBody = message.content.slice(prefix.length);
//   const args = commandBody.split(' ');
//   const command = args.shift().toLowerCase();



//   else if (command === "sum") {
//     const numArgs = args.map(x => parseFloat(x));
//     const sum = numArgs.reduce((counter, x) => counter += x);
//     message.reply(`The sum of all the arguments you provided is ${sum}!`);
//   }
//   else if (command === "shaun") {
//       for(i=0; i < 100; i++){
//         message.s
//       }
//   }
// meesin: 90779765207736320
// const steve = ["So how does that relate to code?","Oh yeah, interesting, have you been coding today?","Have you made hangman yet?","So thats your excuse for not coding then?", "Go and have a coffee and start coding","Open youtube and watch a tutorial on how to makea discord bot"]
//   if (message.author.id == '258631353518653440'){
//      let rand = Math.floor(Math.random() * 6)
//     message.channel.send(`${steve[rand]}`)
//   .then(message => console.log(`Sent message: ${message.content}`))
//   .catch(console.error);
//   }

//   if (message.author.id == '90779765207736320'){
//     //let rand = Math.floor(Math.random() * 6)
//    message.reply("uWu")
//    message.reply(message.content)
//  .then(message => console.log(`Sent message: ${message.content}`))
//  .catch(console.error);
//  }
    //if (message.author.id == '141963410467323904')
    //message.channel.send('no.')
//   console.log(message.author.id)
//   console.log(message.author)
//   const commandBody = message.content
//   console.log(commandBody)

//     //if (message.author.id == '90779765207736320')
//  // message.channel.send('no.')
// //console.log(message.author.id)
// let numb = Math.random(Math.floor()*10)
//     if (message.author.id == '831611386525515817'){

//     if (numb == 1){
//     message.channel.send('Daddy senpai uWu <3')
//     }
//   }
});

client.login(config.BOT_TOKEN);