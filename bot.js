//token=MTEwNjA0MjA4MTQyNTc2NDM3Mg.GSgRgB.GXinZg9ogPtVT1bB2SHXUbTPJzXYk0yDqQdBHU
//https://discord.com/api/oauth2/authorize?client_id=1106042081425764372&permissions=2048&scope=bot

const fs = require('node:fs')
const path = require('node:path')
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')

// Client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);