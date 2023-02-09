//const config = require('config.json');
const card = {
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.0",
  type: "AdaptiveCard",
  body: [
    {
      type: "TextBlock",
      text: `Freezy Preloading`,
      wrap: true,
      horizontalAlignment: "center",
      size: "large",
    },
    {
      type: "Image",
      url: `https://media.discordapp.net/attachments/1008862335533854802/1021429494839529542/unknown.png`,
      width: "900px",
      horizontalAlignment: "center",
    },
    {
      type: "ActionSet",
      actions: [
        {
          type: "Action.OpenUrl",
          title: "Discord",
          url: `https://discord.gg/`,
        },
        {
          type: "Action.Submit",
          title: "Hrát",
          data: { nat2k15: "codes this" },
        },
      ],
    },
  ],
};
AddEventHandler("playerConnecting", function (name, setKickReason, deferrals) {
  deferrals.defer();
  setInterval(() => {
    deferrals.presentCard(card, function (data, rawData) {
      if (rawData) {
        deferrals.done();
      }
    });
  }, 500);
  setTimeout(() => {
    deferrals.done();
  }, 20000);
});
