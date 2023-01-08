import * as discord from "discord.js";
export class _Event {
    public static event_name: string = "ready";
    public static run = async (client: discord.Client) => {
        console.log(`iniciada correctamente como ${client.user?.username} UwU`)
        return 0;
    }
}