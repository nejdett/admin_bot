const Discord = require('discord.js');

const cevaplar = [
    "Eşek gitmez yolların var, yap yap bitmez işlerin var, uçan kuşta gelecek haberin var.",
    "Balık çıktı kısmetinde canlı canlı vereyim mi bir kilo?",
    "Karanlık bir gece geçireceksin ve ondan sonra güzel bir haber alacaksın.",
    "Bir uzak bir kısa yolun var. Kısa yoldan gidersen ite dalanırsın, uzak yoldan gidersen çalıya dolanırsın en güzeli sen evde otur.",
    "Böyle melek gibi kanatları olup şeytan yüzlü biri var burada. Bak bak burda ama yüzünü göstermiyor. Of offf bu çok tehlikeli senin yüzüne gülüyor da arkandan neler çeviriyor",
    "Sarışın mı desem, esmer mi desem, kumrala da benziyor, yok yok demeyim en iyisi."
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fal',
  description: 'komut bakımda',
  usage: 'fal'
};
