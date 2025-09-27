const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const port = 3000;


const botToken = '8388224476:AAFwkgFME2paQbMIQ-1sD16qkx003RL89BM';
const chatId = '7705380171';


const bot = new TelegramBot(botToken, { polling: false });


app.use(express.json());


app.post('/log-visitor', async (req, res) => {
    const { ip, browserInfo } = req.body;

    
    const message = `New Visitor:\nIP: ${ip}\nBrowser: ${browserInfo}`;

    try {
        
        await bot.sendMessage(chatId, message);
        res.status(200).send('Data sent to Telegram');
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        res.status(500).send('Error sending data');
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});