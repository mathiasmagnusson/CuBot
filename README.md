# CuBot - a Discord Bot!

## Dependencies
 - NodeJS <= v13.14
 - DiscordJS <= v12.2.0
 - [Lavalink](https://github.com/Frederikam/Lavalink) <= v3.3.1

## Features
 - [ ] YouTube, SoundCloud, audio file playback.
 - [ ] Equalizers
 - [ ] Weather information
 - [ ] Custom logger
 - [ ] Playlist support 
 - [ ] Server customizable prefix
 - [ ] Monitoring via web server

## Example `.env` file
```.properties
DISCORD_TOKEN=<your Discord bot token>
OW_TOKEN=<your OpenWeather key>
WEBSERVER_PORT=<port>
```

## Usage
1. Install the required dependencies.  
2. Create your `.env` file
3. Start the bot by either using `npm run prod` or `npm run dev`.  

To disable the custom logger, start the bot with `no-logger` as an argument.
