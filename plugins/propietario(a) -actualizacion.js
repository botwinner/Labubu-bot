import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'Stmanía';
const repo = 'Manía';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoIIG']()} 𝙀𝙇 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝘿𝙊!!\n𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊: ${html_url}\n*• 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘾𝙊𝙈𝙈𝙄𝙏:* ${message}` }, { quoted: m })
   } 
  } catch (error) {
    await m.reply(`${fg} 𝙀𝙍𝙍𝙊𝙍 𝘼𝙇 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍 𝙀𝙇 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊:'`, error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(actualizar|actualizacion)/i
handler.rowner = true
export default handler
