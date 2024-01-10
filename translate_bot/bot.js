const { translate } = require('@vitalets/google-translate-api')
const { Telegraf } = require('telegraf')

const bot = new Telegraf('6786499549:AAFTOq15eP6fMQwwSv-MIt2c2X6OJJBT6eo')

bot.start(ctx => ctx.reply("Tarjimon botga ho'sh kelibsz"))

bot.on('text', async ctx => {
	try {
		const textMessage = ctx.message.text
		const { text } = await translate(textMessage, { from: 'uz', to: 'en' })
		await ctx.reply(text)
	} catch (error) {
		await ctx.reply(JSON.stringify(error))
	}
})

bot.launch()
