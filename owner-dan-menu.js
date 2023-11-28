const fs = require('fs')

global.namabot = "Assistant Louise"
global.namaowner = "Bagas x Louise"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6281315379437']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

Aku Assitant Louise di grup ini, Berikut list menu yang tersedia di grup ini :)
Semoga aku bisa bantu kalian yaa.

\`\`\`
╭✄┈┈┈⟬ *Menu Admin Grup* ⟭
┆❐ .owner (Cek kontak owner)
┆❐ .ceksewa (Cek sewa)
┆❐ .jeda (Jeda grup close)
┆❐ .setpay
┆❐ .kick
┆❐ .add
┆❐ .hidetag
┆❐ .setopen
┆❐ .setclose
┆❐ .changeopen
┆❐ .changeclose
┆❐ .open
┆❐ .close
╰──────────◇

╭✄┈┈┈⟬ *Menu Member* ⟭
┆❐ .list
┆❐ .sticker
┆❐ .pay
┆❐ .menu
┆❐ .bot
╰──────────◇

╭✄┈┈┈⟬ *Menu Admin Group Chat* ⟭
┆❐ .linkgc
┆❐ .setppgc
┆❐ .setnamegc
┆❐ .setdesgc
┆❐ .resetlinkgc
╰──────────◇

╭✄┈┈┈⟬ *Menu Setting Bot* ⟭
┆❐ .setbot
┆❐ .updatesetbot
┆❐ .delsetbot
╰──────────◇

╭✄┈┈┈⟬ *Menu Admin Antilink* ⟭
┆❐ .antiwame
┆❐ .antiwame2
┆❐ .antilink
┆❐ .antilink2
╰──────────◇

╭✄┈┈┈⟬ *Menu Admin List* ⟭
┆❐ .addlist
┆❐ .updatelist
┆❐ .renamelist
┆❐ .dellist
╰──────────◇

╭✄┈┈┈⟬ *Menu Admin Proses-Done* ⟭
┆❐ .proses
┆❐ .done
┆❐ .setproses
┆❐ .changeproses
┆❐ .delsetproses
┆❐ .setdone
┆❐ .changedone
┆❐ .delsetdone
╰──────────◇

╭✄┈┈┈⟬ *Menu Admin Welcome-Left* ⟭
┆❐ .welcome on-off
┆❐ .goodbye on-off
┆❐ .setwelcone
┆❐ .changewelcome
┆❐ .delsetwelcome
┆❐ .setleft
┆❐ .changeleft
┆❐ .delsetleft
╰──────────◇

╭✄┈┈┈⟬ *Menu Kalkulator* ⟭
┆❐ .tambah
┆❐ .kurang
┆❐ .kali
┆❐ .bagi
╰──────────◇
\`\`\`
📝 *NOTE*: 
Kalian juga bisa ketik tanpa "."
Example : owner
Maka Assistant Louise langsung kasih kamu nomer owner :)
`
}