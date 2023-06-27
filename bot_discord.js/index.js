const { Client, Intents } = require('discord.js');

const intents = new Intents();
intents.add(Intents.FLAGS.GUILDS);
intents.add(Intents.FLAGS.GUILD_MEMBERS);

const client = new Client({ intents });

(async()=>{
    // default imports
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const { 
        MessageEmbed, 
        MessageButton, 
        MessageActionRow, 
        Intents, 
        Permissions, 
        MessageSelectMenu 
    }= require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const os = require("os-utils");
    let https = require("https")
    
    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire:null,
        joiningMember:null,
        reply:null,
        player:null,
        manager:null,
        Inviter:null,
        message:null,
        notifer:null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord.js'] = '^13.15.1'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.12.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord-logs'] = '^2.0.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION", 
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function (err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    

    // blockly code
    await s4d.client.login('Votre token').catch((e) => {
            const tokenInvalid = true;
            const tokenError = e;
            if (e.toString().toLowerCase().includes("token")) {
                throw new Error("An invalid bot token was provided!")
            } else {
                throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
            }
        });
    
    s4d.client.on('ready', async () => {
      s4d.client.user.setPresence({status: "offline",activities:[{name:'La 2éme description',type:"PLAYING"}]});
    
    });
    
s4d.client.on('messageCreate', async (s4dmessage) => {
  if (s4dmessage.content === 'Commande (Sans slash)') {
    const embed = new MessageEmbed()
      .setColor('#FF0000')
      .setTitle('titre')
      .setDescription('Description');

    const button = new MessageButton()
      .setStyle('LINK')
      .setLabel('titre')
      .setURL('url');

    const actionRow = new MessageActionRow().addComponents(button);

    s4dmessage.channel.send({ embeds: [embed], components: [actionRow] });
  }
});



      
      s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.content === 'non de la Commande (Sans slash)') {
          const embed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('titre')
            .setDescription('Description');
    
          s4dmessage.channel.send({ embeds: [embed] });
        }
      });
        

  s4d.client.on('ready', async () => {
  const guildId = ''; // Remplacez par l'ID de votre serveur/guilde Discord

  await s4d.client.api.applications(s4d.client.user.id).guilds(guildId).commands.post({
    data: {
      name: 'help',
      description: 'Informations sur les commandes',
    },
  });

  console.log('non de la Commande (avec slash)');
});


    
    s4d.client.on('interactionCreate', async (interaction) => {
  if (interaction.isCommand() && interaction.commandName === 'help') {
    const embed = new MessageEmbed()
      .setColor('#FF0000')
      .setTitle('titre')
      .setDescription('Description')
      .addField('titre', 'Description')
      .addField('titre', 'Description');

    await interaction.reply({ embeds: [embed] });
  }
});
    

 // blockly code
    s4d.client.on('guildMemberAdd', async (param1) => {
    s4d.joiningMember = param1;
      (s4d.joiningMember).roles.add((s4d.joiningMember).guild.roles.cache.find((role) => role.id === 'role.id' || role.name === '1112452016984313907' || '@'+role.name === '1112452016984313907'));
    s4d.joiningMember = null
    });
    
const logChannelId = 'YOUR_LOG_CHANNEL_ID'; // Remplacez par l'ID du salon de logs

client.on('ready', () => {
  console.log('Bot is ready.');

  // Vérification si l'ID du salon de logs est valide
  const logChannel = client.channels.cache.get(logChannelId);
  if (!logChannel) {
    console.log(`Invalid log channel ID: ${logChannelId}`);
    return;
  }

  // Envoyer un message d'initialisation dans le salon de logs
  logChannel.send('Bot is online and ready to log events.');
});    

    return s4d
})();

