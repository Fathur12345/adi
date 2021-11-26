let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa/Gopay [083822759168]
│ • OVO/DANA [083822759168]
│ • By Andrii Street Moonshine
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
