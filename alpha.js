const _0x582cb9=_0x2eb6;function _0x2eb6(_0x53675b,_0x13e1aa){const _0x15c336=_0x15c3();return _0x2eb6=function(_0x2eb61a,_0xe3f570){_0x2eb61a=_0x2eb61a-0x7a;let _0x3d0c74=_0x15c336[_0x2eb61a];return _0x3d0c74;},_0x2eb6(_0x53675b,_0x13e1aa);}function _0x15c3(){const _0xf9922e=['end',',\x20Welcome\x20To\x20','invalid','messages','Restart\x20Required,\x20Restarting...','5739174lwxOuk','3848315JXDTTu','\x0aFN:','packname','Silahkan\x20scan\x20qr\x20di\x20bagian\x20webview','image','buttonsMessage','serializeM','getNumber','logout','@adiwajshing/baileys','Multi\x20device\x20mismatch,\x20please\x20scan\x20again','buffer','\x20Kontak','5210104OGrbEN','downloadAndSaveMediaMessage','qrcode','creds.update','Sayonara\x20@','message','./database/left.json','./database/sewa.json','./database/opengc.json','existsSync','image/png','0@s.whatsapp.net','PORT','templateMessage','withoutContact','ephemeralMessage','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20reconnecting...','split','\x20bukan\x20admin\x20grup\x20','use','\x20sekaran\x20menjadi\x20admin\x20grup\x20','stringify','output','setHeader','time','awesome-phonenumber','sendContact','badSession','public','60872FyywXO','Connection\x20TimedOut,\x20Reconnecting...','statusCode','https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg','msg','sendImageAsSticker','decodeJid','error','chats','name','alloc','http','not_announcement','subject','international','mtype','receivedPendingNotifications','./database/antilink2.json','./database/antiwame2.json','messages.upsert','open','values','BAE5','\x20lagi','connection.update','./database/set_welcome.json','isBuffer','timedOut','Connection\x20closed,\x20reconnecting....','action','parse','static','./database/set_close.json','./database/set_proses.json','env','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','node-fetch','catch','axios','@s.whatsapp.net','express','startsWith','WhatsApp','readFileSync','matchAll','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','participants','from','connectionLost','./database/set_open.json','listMessage','views','ext','groupMetadata','./lib/simple','replace','add','length','contacts','./database/antiwame.json','notify','content-type','sendVideoAsSticker','Sukses,\x20group\x20telah\x20dibuka','groupSettingUpdate','includes','./database/set_left.json','connectionReplaced','log','remoteJid','writeFileSync','mimetype','70txrpLH','sendTextWithMentions','Error','./database/set_done.json','3383907vMghNA','join','sendText','key','base64','user','77502omrVIu','loggedOut','keys','Safari','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','fromMe','connectionClosed','34NiRdGF','1.0.0','true','./database/antilink.json','sendMessage','pino','4VWhckj','server','downloadMediaMessage','endsWith','./lib/exif','type','contacts.update','profilePictureUrl','test','28724910euvPAE','promote','silent','restartRequired','listen','group-participants.update','push','@g.us','bind','./lib/store','remove','./database/welcome.json','desc','getName','BOT\x20STORE','map','path','Connected\x20to\x20=\x20'];_0x15c3=function(){return _0xf9922e;};return _0x15c3();}(function(_0x4efbde,_0x11bd52){const _0x47f70d=_0x2eb6,_0x2c3257=_0x4efbde();while(!![]){try{const _0x2c47e9=-parseInt(_0x47f70d(0xf5))/0x1*(-parseInt(_0x47f70d(0x9c))/0x2)+parseInt(_0x47f70d(0xe8))/0x3*(-parseInt(_0x47f70d(0xfb))/0x4)+-parseInt(_0x47f70d(0x11c))/0x5+-parseInt(_0x47f70d(0xee))/0x6*(parseInt(_0x47f70d(0xe4))/0x7)+-parseInt(_0x47f70d(0x7f))/0x8+-parseInt(_0x47f70d(0x11b))/0x9+parseInt(_0x47f70d(0x104))/0xa;if(_0x2c47e9===_0x11bd52)break;else _0x2c3257['push'](_0x2c3257['shift']());}catch(_0xb6bf2f){_0x2c3257['push'](_0x2c3257['shift']());}}}(_0x15c3,0x906cc),require('./owner-dan-menu'));const {default:WADefault,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x582cb9(0x7b)),pino=require(_0x582cb9(0xfa)),{Boom}=require('@hapi/boom'),fs=require('fs'),axios=require(_0x582cb9(0xc2)),FileType=require('file-type'),PhoneNumber=require(_0x582cb9(0x98)),{smsg,getBuffer,fetchJson}=require(_0x582cb9(0xd2)),fetch=require(_0x582cb9(0xc0)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid,writeExif}=require(_0x582cb9(0xff)),{isSetClose,addSetClose,removeSetClose,changeSetClose,getTextSetClose,isSetDone,addSetDone,removeSetDone,changeSetDone,getTextSetDone,isSetLeft,addSetLeft,removeSetLeft,changeSetLeft,getTextSetLeft,isSetOpen,addSetOpen,removeSetOpen,changeSetOpen,getTextSetOpen,isSetProses,addSetProses,removeSetProses,changeSetProses,getTextSetProses,isSetWelcome,addSetWelcome,removeSetWelcome,changeSetWelcome,getTextSetWelcome,addSewaGroup,getSewaExpired,getSewaPosition,expiredCheck,checkSewaGroup}=require(_0x582cb9(0x10d));let set_welcome_db=JSON['parse'](fs['readFileSync'](_0x582cb9(0xb5))),set_left_db=JSON[_0x582cb9(0xba)](fs[_0x582cb9(0xc7)](_0x582cb9(0xde))),_welcome=JSON[_0x582cb9(0xba)](fs['readFileSync'](_0x582cb9(0x10f))),_left=JSON[_0x582cb9(0xba)](fs[_0x582cb9(0xc7)](_0x582cb9(0x85))),set_proses=JSON['parse'](fs[_0x582cb9(0xc7)](_0x582cb9(0xbd))),set_done=JSON[_0x582cb9(0xba)](fs[_0x582cb9(0xc7)](_0x582cb9(0xe7))),set_open=JSON[_0x582cb9(0xba)](fs['readFileSync'](_0x582cb9(0xcd))),set_close=JSON[_0x582cb9(0xba)](fs['readFileSync'](_0x582cb9(0xbc))),sewa=JSON['parse'](fs['readFileSync'](_0x582cb9(0x86))),setpay=JSON['parse'](fs[_0x582cb9(0xc7)]('./database/pay.json')),opengc=JSON[_0x582cb9(0xba)](fs[_0x582cb9(0xc7)](_0x582cb9(0x87))),antilink=JSON[_0x582cb9(0xba)](fs[_0x582cb9(0xc7)](_0x582cb9(0xf8))),antiwame=JSON['parse'](fs[_0x582cb9(0xc7)](_0x582cb9(0xd7))),antilink2=JSON[_0x582cb9(0xba)](fs[_0x582cb9(0xc7)](_0x582cb9(0xad))),antiwame2=JSON['parse'](fs[_0x582cb9(0xc7)](_0x582cb9(0xae))),db_respon_list=JSON['parse'](fs[_0x582cb9(0xc7)]('./database/list.json'));const {toBuffer,toDataURL}=require(_0x582cb9(0x81)),express=require(_0x582cb9(0xc4));let app=express();const {createServer}=require(_0x582cb9(0xa7));let server=createServer(app),_qr=_0x582cb9(0x118),PORT=process[_0x582cb9(0xbe)][_0x582cb9(0x8b)];const path=require(_0x582cb9(0x114)),store=makeInMemoryStore({'logger':pino()['child']({'level':_0x582cb9(0x106),'stream':'store'})});async function Botstarted(){const _0x20d389=_0x582cb9,{state:_0x3fc081,saveCreds:_0x53bf66}=await useMultiFileAuthState('./'+sessionName),_0x10dc76=WADefault({'logger':pino({'level':_0x20d389(0x106)}),'printQRInTerminal':!![],'browser':[_0x20d389(0x112),_0x20d389(0xf1),_0x20d389(0xf6)],'patchMessageBeforeSending':_0x3dd468=>{const _0xc934ca=_0x20d389,_0x578a68=!!(_0x3dd468[_0xc934ca(0x121)]||_0x3dd468[_0xc934ca(0x8c)]||_0x3dd468[_0xc934ca(0xce)]);return _0x578a68&&(_0x3dd468={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x3dd468}}}),_0x3dd468;},'auth':_0x3fc081});return store[_0x20d389(0x10c)](_0x10dc76['ev']),_0x10dc76['ev']['on'](_0x20d389(0xaf),async _0x40f14a=>{const _0x1e10f8=_0x20d389;try{mek=_0x40f14a[_0x1e10f8(0x119)][0x0];if(!mek[_0x1e10f8(0x84)])return;mek[_0x1e10f8(0x84)]=Object[_0x1e10f8(0xf0)](mek[_0x1e10f8(0x84)])[0x0]===_0x1e10f8(0x8e)?mek[_0x1e10f8(0x84)]['ephemeralMessage'][_0x1e10f8(0x84)]:mek[_0x1e10f8(0x84)];if(mek[_0x1e10f8(0xeb)]&&mek[_0x1e10f8(0xeb)][_0x1e10f8(0xe1)]==='status@broadcast')return;if(!_0x10dc76[_0x1e10f8(0x9b)]&&!mek[_0x1e10f8(0xeb)][_0x1e10f8(0xf3)]&&_0x40f14a[_0x1e10f8(0x100)]===_0x1e10f8(0xd8))return;if(mek[_0x1e10f8(0xeb)]['id'][_0x1e10f8(0xc5)](_0x1e10f8(0xb2))&&mek['key']['id']['length']===0x10)return;m=smsg(_0x10dc76,mek,store),require('./store')(_0x10dc76,m,_0x40f14a,store,opengc,setpay,antilink,antiwame,antilink2,antiwame2,set_welcome_db,set_left_db,set_proses,set_done,set_open,set_close,sewa,_welcome,_left,db_respon_list);}catch(_0x2775f0){console[_0x1e10f8(0xe0)](_0x2775f0);}}),setInterval(()=>{const _0x5208e8=_0x20d389;for(let _0x50933f of Object[_0x5208e8(0xb1)](opengc)){Date['now']()>=_0x50933f[_0x5208e8(0x97)]&&(_0x10dc76[_0x5208e8(0xdc)](_0x50933f['id'],_0x5208e8(0xa8))['then'](_0x4c0464=>_0x10dc76['sendMessage'](_0x50933f['id'],{'text':_0x5208e8(0xdb)}))[_0x5208e8(0xc1)](_0x507866=>_0x10dc76[_0x5208e8(0xf9)](_0x50933f['id'],{'text':_0x5208e8(0xe6)})),delete opengc[_0x50933f['id']],fs['writeFileSync'](_0x5208e8(0x87),JSON[_0x5208e8(0x94)](opengc)));}},0x3e8),_0x10dc76['ev']['on'](_0x20d389(0x109),async _0x51b2be=>{const _0x4d1695=_0x20d389,_0x3a3f84=_welcome[_0x4d1695(0xdd)](_0x51b2be['id']),_0x45228b=_left['includes'](_0x51b2be['id']);try{let _0x2f4791=await _0x10dc76[_0x4d1695(0xd1)](_0x51b2be['id']),_0x867f3d=_0x51b2be[_0x4d1695(0xca)];const _0x3e97ce=_0x2f4791[_0x4d1695(0xa9)],_0x479612=_0x2f4791[_0x4d1695(0x110)];for(let _0x33ecc7 of _0x867f3d){try{ppuser=await _0x10dc76[_0x4d1695(0x102)](_0x33ecc7,_0x4d1695(0x120));}catch{ppuser='https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';}try{ppgroup=await _0x10dc76['profilePictureUrl'](_0x51b2be['id'],_0x4d1695(0x120));}catch{ppgroup=_0x4d1695(0x9f);}if(_0x51b2be[_0x4d1695(0xb9)]==_0x4d1695(0xd4)&&_0x3a3f84){console['log'](_0x51b2be);if(isSetWelcome(_0x51b2be['id'],set_welcome_db)){var _0x395889=await getTextSetWelcome(_0x51b2be['id'],set_welcome_db),_0x1b9675=_0x395889[_0x4d1695(0xd3)](/@user/gi,'@'+_0x33ecc7[_0x4d1695(0x90)]('@')[0x0]),_0x19689e=_0x1b9675[_0x4d1695(0xd3)](/@group/gi,_0x3e97ce)['replace'](/@desc/gi,_0x479612);_0x10dc76[_0x4d1695(0xf9)](_0x51b2be['id'],{'image':{'url':ppuser},'mentions':[_0x33ecc7],'caption':''+_0x19689e});}else _0x10dc76[_0x4d1695(0xf9)](_0x51b2be['id'],{'image':{'url':ppuser},'mentions':[_0x33ecc7],'caption':'Halo\x20@'+_0x33ecc7['split']('@')[0x0]+_0x4d1695(0x117)+_0x2f4791[_0x4d1695(0xa9)]});}else{if(_0x51b2be[_0x4d1695(0xb9)]==_0x4d1695(0x10e)&&_0x45228b){console[_0x4d1695(0xe0)](_0x51b2be);if(isSetLeft(_0x51b2be['id'],set_left_db)){var _0x327f6a=await getTextSetLeft(_0x51b2be['id'],set_left_db),_0x1b9675=_0x327f6a[_0x4d1695(0xd3)](/@user/gi,'@'+_0x33ecc7['split']('@')[0x0]),_0x19689e=_0x1b9675[_0x4d1695(0xd3)](/@group/gi,_0x3e97ce)[_0x4d1695(0xd3)](/@desc/gi,_0x479612);_0x10dc76[_0x4d1695(0xf9)](_0x51b2be['id'],{'image':{'url':ppuser},'mentions':[_0x33ecc7],'caption':''+_0x19689e});}else _0x10dc76[_0x4d1695(0xf9)](_0x51b2be['id'],{'image':{'url':ppuser},'mentions':[_0x33ecc7],'caption':_0x4d1695(0x83)+_0x33ecc7[_0x4d1695(0x90)]('@')[0x0]});}else{if(_0x51b2be[_0x4d1695(0xb9)]==_0x4d1695(0x105))_0x10dc76['sendMessage'](_0x51b2be['id'],{'image':{'url':ppuser},'mentions':[_0x33ecc7],'caption':'@'+_0x33ecc7[_0x4d1695(0x90)]('@')[0x0]+_0x4d1695(0x93)+_0x2f4791[_0x4d1695(0xa9)]});else _0x51b2be[_0x4d1695(0xb9)]=='demote'&&_0x10dc76[_0x4d1695(0xf9)](_0x51b2be['id'],{'image':{'url':ppuser},'mentions':[_0x33ecc7],'caption':'@'+_0x33ecc7[_0x4d1695(0x90)]('@')[0x0]+_0x4d1695(0x91)+_0x2f4791[_0x4d1695(0xa9)]+_0x4d1695(0xb3)});}}}}catch(_0x10b376){console['log'](_0x10b376);}}),_0x10dc76[_0x20d389(0xa2)]=_0x4b5457=>{const _0x3f80f7=_0x20d389;if(!_0x4b5457)return _0x4b5457;if(/:\d+@/gi[_0x3f80f7(0x103)](_0x4b5457)){let _0x478c1c=jidDecode(_0x4b5457)||{};return _0x478c1c[_0x3f80f7(0xed)]&&_0x478c1c[_0x3f80f7(0xfc)]&&_0x478c1c[_0x3f80f7(0xed)]+'@'+_0x478c1c['server']||_0x4b5457;}else return _0x4b5457;},_0x10dc76['ev']['on'](_0x20d389(0x101),_0x2e604b=>{const _0xcbc0a=_0x20d389;for(let _0x4ca6f2 of _0x2e604b){let _0x2c57af=_0x10dc76[_0xcbc0a(0xa2)](_0x4ca6f2['id']);if(store&&store['contacts'])store[_0xcbc0a(0xd6)][_0x2c57af]={'id':_0x2c57af,'name':_0x4ca6f2[_0xcbc0a(0xd8)]};}}),_0x10dc76['getName']=(_0x3d9b20,_0x4dcff3=![])=>{const _0x3696cc=_0x20d389;id=_0x10dc76[_0x3696cc(0xa2)](_0x3d9b20),_0x4dcff3=_0x10dc76[_0x3696cc(0x8d)]||_0x4dcff3;let _0x1c13a6;if(id[_0x3696cc(0xfe)](_0x3696cc(0x10b)))return new Promise(async _0x1c6433=>{const _0x3468cc=_0x3696cc;_0x1c13a6=store[_0x3468cc(0xd6)][id]||{};if(!(_0x1c13a6[_0x3468cc(0xa5)]||_0x1c13a6[_0x3468cc(0xa9)]))_0x1c13a6=_0x10dc76[_0x3468cc(0xd1)](id)||{};_0x1c6433(_0x1c13a6[_0x3468cc(0xa5)]||_0x1c13a6[_0x3468cc(0xa9)]||PhoneNumber('+'+id[_0x3468cc(0xd3)](_0x3468cc(0xc3),''))[_0x3468cc(0x123)](_0x3468cc(0xaa)));});else _0x1c13a6=id===_0x3696cc(0x8a)?{'id':id,'name':_0x3696cc(0xc6)}:id===_0x10dc76['decodeJid'](_0x10dc76['user']['id'])?_0x10dc76['user']:store[_0x3696cc(0xd6)][id]||{};return(_0x4dcff3?'':_0x1c13a6[_0x3696cc(0xa5)])||_0x1c13a6['subject']||_0x1c13a6['verifiedName']||PhoneNumber('+'+_0x3d9b20[_0x3696cc(0xd3)](_0x3696cc(0xc3),''))[_0x3696cc(0x123)](_0x3696cc(0xaa));},_0x10dc76[_0x20d389(0x99)]=async(_0xb7a911,_0xa343d9,_0x1de238='',_0x4e97f4={})=>{const _0x4c0c2d=_0x20d389;let _0x3c66c3=[];for(let _0xdf621e of _0xa343d9){_0x3c66c3[_0x4c0c2d(0x10a)]({'displayName':await _0x10dc76['getName'](_0xdf621e+_0x4c0c2d(0xc3)),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:'+await _0x10dc76[_0x4c0c2d(0x111)](_0xdf621e+_0x4c0c2d(0xc3))+_0x4c0c2d(0x11d)+await _0x10dc76[_0x4c0c2d(0x111)](_0xdf621e+_0x4c0c2d(0xc3))+'\x0aitem1.TEL;waid='+_0xdf621e+':'+_0xdf621e+_0x4c0c2d(0xc9)});}_0x10dc76[_0x4c0c2d(0xf9)](_0xb7a911,{'contacts':{'displayName':_0x3c66c3[_0x4c0c2d(0xd5)]+_0x4c0c2d(0x7e),'contacts':_0x3c66c3},..._0x4e97f4},{'quoted':_0x1de238});},_0x10dc76[_0x20d389(0x9b)]=!![],_0x10dc76[_0x20d389(0x122)]=_0x338065=>smsg(_0x10dc76,_0x338065,store),_0x10dc76['ev']['on'](_0x20d389(0xb4),async _0x29adcf=>{const _0x3d8694=_0x20d389,{connection:_0xe4bf0,lastDisconnect:_0x118587,qr:_0x5b7ade}=_0x29adcf;_0x5b7ade&&(app[_0x3d8694(0x92)](async(_0x510726,_0x2501aa)=>{const _0x4ce8b0=_0x3d8694;_0x2501aa[_0x4ce8b0(0x96)](_0x4ce8b0(0xd9),_0x4ce8b0(0x89)),_0x2501aa[_0x4ce8b0(0x116)](await toBuffer(_0x5b7ade));}),app[_0x3d8694(0x92)](express[_0x3d8694(0xbb)](path[_0x3d8694(0xe9)](__dirname,_0x3d8694(0xcf)))),app[_0x3d8694(0x108)](PORT,()=>{const _0x168e64=_0x3d8694;console['log'](_0x168e64(0x11f));}));if(_0xe4bf0==='close'){let _0x19a82e=new Boom(_0x118587?.[_0x3d8694(0xa3)])?.[_0x3d8694(0x95)][_0x3d8694(0x9e)];if(_0x19a82e===DisconnectReason[_0x3d8694(0x9a)])console[_0x3d8694(0xe0)](_0x3d8694(0xbf)),_0x10dc76['logout']();else{if(_0x19a82e===DisconnectReason[_0x3d8694(0xf4)])console['log'](_0x3d8694(0xb8)),Botstarted();else{if(_0x19a82e===DisconnectReason[_0x3d8694(0xcc)])console[_0x3d8694(0xe0)](_0x3d8694(0xf2)),Botstarted();else{if(_0x19a82e===DisconnectReason[_0x3d8694(0xdf)])console[_0x3d8694(0xe0)](_0x3d8694(0x8f)),Botstarted();else{if(_0x19a82e===DisconnectReason[_0x3d8694(0xef)])console[_0x3d8694(0xe0)]('Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.'),_0x10dc76[_0x3d8694(0x7a)]();else{if(_0x19a82e===DisconnectReason[_0x3d8694(0x107)])console[_0x3d8694(0xe0)](_0x3d8694(0x11a)),Botstarted();else{if(_0x19a82e===DisconnectReason[_0x3d8694(0xb7)])console[_0x3d8694(0xe0)](_0x3d8694(0x9d)),Botstarted();else{if(_0x19a82e===DisconnectReason['Multidevicemismatch'])console[_0x3d8694(0xe0)](_0x3d8694(0x7c)),_0x10dc76['logout']();else _0x10dc76['end']('Unknown\x20DisconnectReason:\x20'+_0x19a82e+'|'+_0xe4bf0);}}}}}}}}(_0x29adcf['connection']==_0x3d8694(0xb0)||_0x29adcf[_0x3d8694(0xac)]==_0x3d8694(0xf7))&&(await store[_0x3d8694(0xa4)]['all'](),console[_0x3d8694(0xe0)](_0x3d8694(0x115)+JSON[_0x3d8694(0x94)](_0x10dc76[_0x3d8694(0xed)],null,0x2)));}),_0x10dc76['ev']['on'](_0x20d389(0x82),_0x53bf66),_0x10dc76[_0x20d389(0xea)]=(_0xb9c393,_0x51204a,_0x442dd3='',_0x40c0ba)=>_0x10dc76[_0x20d389(0xf9)](_0xb9c393,{'text':_0x51204a,..._0x40c0ba},{'quoted':_0x442dd3,..._0x40c0ba}),_0x10dc76[_0x20d389(0xfd)]=async _0x21fde5=>{const _0x17c943=_0x20d389;let _0x3aec7c=(_0x21fde5[_0x17c943(0xa0)]||_0x21fde5)['mimetype']||'',_0x24bae9=_0x21fde5[_0x17c943(0xab)]?_0x21fde5['mtype']['replace'](/Message/gi,''):_0x3aec7c[_0x17c943(0x90)]('/')[0x0];const _0x5aba9f=await downloadContentFromMessage(_0x21fde5,_0x24bae9);let _0x3d5254=Buffer[_0x17c943(0xcb)]([]);for await(const _0xd5fc72 of _0x5aba9f){_0x3d5254=Buffer['concat']([_0x3d5254,_0xd5fc72]);}return _0x3d5254;},_0x10dc76[_0x20d389(0x80)]=async(_0x54508b,_0x53577c,_0x441e21=!![])=>{const _0x2f8292=_0x20d389;let _0x289e2f=_0x54508b[_0x2f8292(0xa0)]?_0x54508b[_0x2f8292(0xa0)]:_0x54508b,_0xa497bc=(_0x54508b['msg']||_0x54508b)[_0x2f8292(0xe3)]||'',_0x23154c=_0x54508b['mtype']?_0x54508b[_0x2f8292(0xab)][_0x2f8292(0xd3)](/Message/gi,''):_0xa497bc['split']('/')[0x0];const _0x394dea=await downloadContentFromMessage(_0x289e2f,_0x23154c);let _0x3fea77=Buffer['from']([]);for await(const _0x37bc67 of _0x394dea){_0x3fea77=Buffer['concat']([_0x3fea77,_0x37bc67]);}let _0x333f53=await FileType['fromBuffer'](_0x3fea77);return trueFileName=_0x441e21?_0x53577c+'.'+_0x333f53[_0x2f8292(0xd0)]:_0x53577c,await fs[_0x2f8292(0xe2)](trueFileName,_0x3fea77),trueFileName;},_0x10dc76[_0x20d389(0xe5)]=async(_0x2b4afe,_0x5e6dd1,_0x1f47e4,_0x564c59={})=>_0x10dc76[_0x20d389(0xf9)](_0x2b4afe,{'text':_0x5e6dd1,'mentions':[..._0x5e6dd1[_0x20d389(0xc8)](/@(\d{0,16})/g)][_0x20d389(0x113)](_0x482532=>_0x482532[0x1]+_0x20d389(0xc3)),..._0x564c59},{'quoted':_0x1f47e4}),_0x10dc76[_0x20d389(0xa1)]=async(_0x5df33d,_0x55ac22,_0x4182b0,_0x518989={})=>{const _0x554a29=_0x20d389;let _0x10e015=Buffer[_0x554a29(0xb6)](_0x55ac22)?_0x55ac22:/^data:.*?\/.*?;base64,/i[_0x554a29(0x103)](_0x55ac22)?Buffer[_0x554a29(0xcb)](_0x55ac22[_0x554a29(0x90)]`,`[0x1],_0x554a29(0xec)):/^https?:\/\//[_0x554a29(0x103)](_0x55ac22)?await(await fetch(_0x55ac22))[_0x554a29(0x7d)]():fs[_0x554a29(0x88)](_0x55ac22)?fs[_0x554a29(0xc7)](_0x55ac22):Buffer[_0x554a29(0xa6)](0x0),_0x37fb41;return _0x518989&&(_0x518989[_0x554a29(0x11e)]||_0x518989['author'])?_0x37fb41=await writeExifImg(_0x10e015,_0x518989):_0x37fb41=await imageToWebp(_0x10e015),await _0x10dc76[_0x554a29(0xf9)](_0x5df33d,{'sticker':{'url':_0x37fb41},..._0x518989},{'quoted':_0x4182b0}),_0x37fb41;},_0x10dc76[_0x20d389(0xda)]=async(_0x111406,_0x2afd3e,_0x45f150,_0xb22094={})=>{const _0xf1a333=_0x20d389;let _0x5b8837=Buffer[_0xf1a333(0xb6)](_0x2afd3e)?_0x2afd3e:/^data:.*?\/.*?;base64,/i['test'](_0x2afd3e)?Buffer[_0xf1a333(0xcb)](_0x2afd3e[_0xf1a333(0x90)]`,`[0x1],_0xf1a333(0xec)):/^https?:\/\//[_0xf1a333(0x103)](_0x2afd3e)?await getBuffer(_0x2afd3e):fs['existsSync'](_0x2afd3e)?fs['readFileSync'](_0x2afd3e):Buffer['alloc'](0x0),_0x20565e;return _0xb22094&&(_0xb22094[_0xf1a333(0x11e)]||_0xb22094['author'])?_0x20565e=await writeExifVid(_0x5b8837,_0xb22094):_0x20565e=await videoToWebp(_0x5b8837),await _0x10dc76['sendMessage'](_0x111406,{'sticker':{'url':_0x20565e},..._0xb22094},{'quoted':_0x45f150}),_0x20565e;},_0x10dc76;}Botstarted();