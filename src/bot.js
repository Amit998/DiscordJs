require('dotenv').config();

const { Client } = require('discord.js') 
const client = new Client();
const PREFIX = "$";



client.on('ready',()=>{
    console.log( `${ client.user.tag } Has Login` )
})

client.on('message',(message)=>{
    if( message.author.bot ) return ;
    console.log( ` [${message.author.tag}] : ${message.content}`)
    if ( message.content == 'hello' ){
        // message.reply(' hello');
        message.channel.send('hello');
    }
})

client.on('message',(message)=>{
    if( message.author.bot ) return ;
    if (message.content.startsWith(PREFIX)){
        const [CMD_NAME,...args]= message.content.trim()
        .substring(PREFIX.length)
        .split("/\s+/");


        console.log(CMD_NAME);
        console.log(...args)

        if(CMD_NAME == 'kick'){
            if (message.membe.hasPermission('Lick_Members ')) 
            return message.reply('You Do Not Have Permission')
            if( args.length === 0 )return message.reply("Please Provide Id")
            message.channel.send('Kicked The User')
            const member = message.guild.member.cache.get(args[0])
            console.log(member)
            if (member){
                member
                .kick()
                .then((member) =>{
                    message.channel.send(`${member} is kicked.`)
                }).catche( (err) =>{
                    message.channel.send(` I Do Not Have Permisson`)
                })
            }else{
                console.log('That Memeber is not Found')
            }
        }

        if(CMD_NAME == 'ban'){
            message.channel.send('Ban The User')
        }
    }
    
})





client.login(process.env.DISCORDJS_BOT_TOKEN)


