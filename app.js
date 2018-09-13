var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');

var userData = JSON.parse(fs.readFileSync('Stroge/userData.json' , 'utf8'));




bot.on('message' , message => {


  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = 'a!'

  if (sender.id === '472081940233584641'){
    return;
  }

  if (msg === prefix + 'ping') {
    message.channel.send('pong')
  }

  if (message.channel.id === '478618558096474114') {
      if (isNaN(message.content)) {
         message.delete()
         message.author.send('Lütfen Bu Kanala Mesaj Atma Teşekkür Ederim')
      }
  }

  if (msg === prefix + 'USERSTATS') {
    message.channel.send('gönderdin **' + userData[sender.id].messagesSent + '** mesajlar!')
  }



 if (!userData[sender.id]) userData[sender.id] = {
   messagesSent: 0
 }

 userData[sender.id].messagesSent++;

 fs.writeFile('Stroge/userData.json', JSON.stringify(userData), (err) => {
   if (err) console.error(errr);
 });


});

  bot.on('ready' , () => {
    console.log('emrindeyim yapımcım')


      bot.user.setStatus('Online')

      bot.user.setGame('Admin Bot!')

  });

  bot.on('guildMemberAdd' , member => {

     console.log('Kullanıcı' + member.username + 'Servere Katıldı')

       var role = member.guild.roles.find('name' , 'User');


       member.addRole(role)

  member.guild.channels.find(c => c.name === "mod-log").send(`**${member.user.username}**, sunucuya katıldı!`);
  
  });

  bot.on('guildMemberRemove' , member => {

   member.guild.channels.get('478618558096474114').send('**' + member.user.username + '** , Sunucudan Ayrıldı!')

  });
bot.login('NDcyMDgxOTQwMjMzNTg0NjQx.Dnm5KA.CF5FmCKXxDCY-pssiwxcMqzYPpU')
