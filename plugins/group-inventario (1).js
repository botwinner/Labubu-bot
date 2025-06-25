let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
        if (chat.sInventario) {
            let stock = chat.sInventario;
            m.reply(stock);
        } else {
            m.reply('❄️𝐈𝐧𝐯𝐞𝐧𝐭𝐚𝐫𝐢𝐨 𝐯𝐚𝐜𝐢𝐨');
        }
}
handler.help = ['stock']
handler.tags = ['group']
handler.command = ['stock']
handler.group = true
export default handler
