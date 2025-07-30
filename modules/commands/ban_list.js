Users.getNameUser(singleUser);
          listBanned.push(`👤 ${i++} - Name : ${name}\n🆔 USER ID : ${singleUser}\n`);
        }
        return api.sendMessage(listBanned.length != 0 ? api.sendMessage(`🎃 - User Banned List - 🎃\n\n» Total Banned : ${listBanned.length} User - ☠️\n━━━━━━━━━━━━━━━━━━━━━━\n${listBanned.join("\n")}` +
          "━━━━━━━━━━━━━━━━━━━━━━\n✨ Reply Number To Unban - ✅",
          threadID, (error, info) => {
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              type: 'unbanuser',
              listBanned
            });
          },
          messageID
        ) : "No User Was Banned - ⚠️", threadID, messageID);
      }

    default:
      {
        return global.utils.throwError(this.config.name, threadID, messageID);
      }
  }
}

