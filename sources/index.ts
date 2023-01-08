// importaciones

import * as discord from 'discord.js';
import * as fs from "fs";
import { config } from 'dotenv';

config();

// creacion del cliente de discord

const client: discord.Client = new discord.Client({
    intents: 1,
    allowedMentions: {
        repliedUser: false
    }
})

client.login(process.env.token)

fs.readdirSync('sources/events').filter(file => file.split('.').pop() == "ts").forEach(async file => {
    let { _Event: event } = await import(`./events/${file}`)
    client.on(event.event_name, async (...args) => await event.run(client, args))
})