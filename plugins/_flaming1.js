var fetch = require('node-fetch')
var handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming1 SAXIA'
  m.reply('_Proses..._')
  var res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${response[0]}`
  conn.sendFile(m.chat, res, 'Saxia.jpg', `「 http://ẉ˘Saꭙࣼia.id 」`, m, false)
}
handler.help = ['flaming1'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming1)$/i

module.exports = handler
