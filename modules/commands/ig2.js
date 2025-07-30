module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAHEEM",
  description: "Prefix Event",
  commandCategory: "Prefix",
  usages: "ig",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["BOT IS alive (✷‿✷)" 
 ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/9fFpcqps/received-1530688927440051.jpg"
];
   var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };