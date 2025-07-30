const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "photooxy",
  version: "1.0",
  hasPermssion: 0,
  credits: `THE_FAHEEM`,
  usePrefix: true,
  description: "Make your own logo using Photooxy",
  commandCategory: "logo",
  usages: "Photooxy list or Photooxy list (page number) or Photooxy (logo) (text)",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length >= 2 && args[0].toLowerCase() === "list") {
    let page = parseInt(args[1]);
    switch (page) {
      case 1:
        return api.sendMessage(
          `here's the logo list - Page 1:\n1. flaming\n2. shadow\n3. metallic\n4. Naruto\n5. grass\n6. harrypotter\n7. flower\n8. love\n9. coffee\n10. butterfly\n11. nightsky\n12. wood\n13. neon\n14. candy\n15. cup\n16. wolf\n17. glass\n18. chrome\n19. fall\n20. lovemessage\n21. burnpaper\n22. funnycup\n23. heart\n24. wooden\n25. summer\n26. nature\n27. water\n28. goldenrose\n29. summer2\n30. avatar\n\nPAGE 1 - 2`,
          threadID,
          messageID
        );
      case 2:
        return api.sendMessage(
          `Logo list - Page 2:\n31. rainbow\n32. furtext\n33. embo\n34. rainbow2\n35. coffee2\n36. smoke\n37. silk\n38. royal\n39. flower2\n40. neon2\n41. metal\n42. green\n43. metaldark\n44. pokemon\n45. game\n46. warface`,
          threadID,
          messageID
        );
      default:
        return api.sendMessage(`Invalid page number! Please use "list 1" or "list 2" or "list 3 in the total of list there are 100 textpro logo for now.".`, threadID, messageID);
    }
  }

  if (args.length < 2) {
    return api.sendMessage(
      `Invalid command format! Use: textpro list or textpro list (page number) or textpro (logo) (text)`,
      threadID,
      messageID
    );
  }

  let type = args[0].toLowerCase();
  let name = args.slice(1).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "flaming":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/flaming?text=${name}`;
      message = "here's the [ FLAMING ] Logo created:";
      break;
    case "shadow":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/shadow-sky?text=${name}`;
      message = "here's the [ SHADOW ] Logo created:";
      break;
    case "metallic":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/metallic?text=${name}`;
      message = "here's the [ METALLIC ] Logo created:";
      break;
    case "naruto":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/naruto?text=${name}`;
      message = "here's the [ NARUTO ] Logo Created:";
      break;
    case "grass":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/under-grass?text=${name}`;
      message = "here's the [ GRASS ] - Logo Created:";
      break;
    case "harrypotter":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/harry-potter?text=${name}`;
      message = "here's the [ HARRY POTTER ] Logo Created:";
      break;
    case "flower":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/flower-typography?text=${name}`;
      message = "here's the [ FLOWER ] Logo created:";
      break;
    case "love":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/picture-of-love?text=${name}`;
      message = "here's the [ LOVE ] Logo created:";
      break;
    case "coffee":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/coffee-cup?text=${name}`;
      message = "here's the [ COFFEE ] Logo created:";
      break;
    case "butterfly":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/butterfly?text=${name}`;
      message = "here's the [ BUTTERFLY ] Logo created:";
      break;
    case "nightsky":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/night-sky?text=${name}`;
      message = "here's the [ NIGHT SKY ] Logo created:";
      break;
    case "wood":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/carved-wood?text=${name}`;
      message = "here's the [ WOOD ] Logo created:";
      break;
    case "neon":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/illuminated-metallic?text=${name}`;
      message = "here's the [ NEON ] Logo created:";
      break;
    case "candy":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/sweet-candy?text=${name}`;
      message = "here's the [ CANDY ] Logo created:";
      break;
    case "cup":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/cup?text=${name}`;
      message = "here's the [ CUP ] Logo created:";
      break;
    case "wolf":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/wolf-metal?text=${name}`;
      message = "here's the [ WOLF ] Logo created:";
      break;
    case "glass":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/glass?text=${name}`;
      message = "here's the [ GLASS ] Logo created:";
      break;
    case "chrome":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/crisp-chrome?text=${name}`;
      message = "here's the [ CHROME ] Logo created:";
      break;
    case "fall":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/quotes?text=${name}`;
      message = "here's the [ FALL ] Logo created:";
      break;
    case "lovemessage":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/love-message?text=${name}`;
      message = "here's the [ LOVE MESSAGE ] Logo created:";
      break;
    case "burnpaper":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/burn-paper?text=${name}`;
      message = "here's the [ BURN PAPER ] Logo created:";
      break;
    case "funnycup":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/funny-cup?text=${name}`;
      message = "here's the [ FUNNY CUP ] Logo created:";
      break;
    case "heart":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/double-heart?text=${name}`;
      message = "here's the [ HEART ] Logo created:";
      break;
    case "wooden":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/wooden-board?text=${name}`;
      message = "here's the [ WOODEN ] Logo created:";
      break;
    case "summer":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/summer?text=${name}`;
      message = "here's the [ SUMMER ] Logo created:";
      break;
    case "nature":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/nature?text=${name}`;
      message = "here's the [ NATURE ] Logo created:";
      break;
    case "water":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/water?text=${name}`;
      message = "here's the [ WATER ] Logo created:";
      break;
    case "goldenrose":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/golden-rose?text=${name}`;
      message = "here's the [ GOLDEN ROSE ] Logo created:";
      break;
    case "summer2":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/nature-summer?text=${name}`;
      message = "here's the [ SUMMER 2 ] Logo created:";
      break;
    case "avatar":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/gridiant-avatar?text=${name}`;
      message = "here's the [ AVATAR ] Logo created:";
      break;
    case "rainbow":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/rainbow-glow?text=${name}`;
      message = "here's the [ RAINBOW ] Logo created:";
      break;
    case "furtext":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/fur-text?text=${name}`;
      message = "here's the[ FUR TEXT ] Logo created:";
      break;
    case "embo":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/embroidery-text?text=${name}`;
      message = "here's the [ EMBROIDERY ] Logo created:";
      break;
    case "rainbow2":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/3d-rainbow?text=${name}`;
      message = "here's the [ RAINBOW 2 ] Logo created:";
      break;
    case "coffee2":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/coffie-logo?text=${name}`;
      message = "here's the [ COFFEE 2 ] Logo created:";
      break;
    case "smoke":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/smoke?text=${name}`;
      message = "here's the [ SMOKE ] Logo created:";
      break;
    case "silk":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/silk?text=${name}`;
      message = "here's the [ SILK ] Logo created:";
      break;
    case "royal":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/royal-patterns?text=${name}`;
      message = "here's the [ ROYAL ] Logo created:";
      break;
    case "flower2":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/flower-orchid?text=${name}`;
      message = "here's the [ FLOWER 2 ] Logo created:";
      break;
    case "neon2":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/neon?text=${name}`;
      message = "here's the [ NEON ] Logo created:";
      break;
    case "metal":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/modern-metal?text=${name}`;
      message = "here's the [ METAL ] Logo created:";
      break;
    case "green":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/green-text?text=${name}`;
      message = "here's the [ GREEN ] Logo created:";
      break;
    case "metaldark":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/dark-metal?text=${name}`;
      message = "here's the [ METAL DARK ] Logo created:";
      break;
    case "pokemon":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/pokemon?text=${name}`;
      message = "here's the [ POKEMON ] Logo created:";
      break;
    case "game":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/fps-game?text=${name}`;
      message = "here's the [ GAME ] Logo created:";
      break;
    case "warface":
      apiUrl = `https://photooxy-api-by-faheem.replit.app//api/photooxy/war-face?text=${name}`;
      message = "here's the [ WARFACE ] Logo created:";
      break;
      default:
      return api.sendMessage(`Invalid logo type! Use .textpro list 1 to see the list of textpro logos.`, threadID, messageID);
  }

  api.sendMessage("please wait...", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};