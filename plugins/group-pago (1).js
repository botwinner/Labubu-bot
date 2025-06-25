let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
        if (chat.sPago) {
            let pago = chat.sPago;
            m.reply(pago);
        } else {
            m.reply('❄️𝙉𝙤 𝙝𝙖𝙮 𝙪𝙣 𝙢𝙚𝙩𝙤𝙙𝙤 𝙙𝙚 𝙥𝙖𝙜𝙤');
        }
}
handler.help = ['pago']
handler.tags = ['group']
handler.command = ['pago']
handler.group = true
export default handler
