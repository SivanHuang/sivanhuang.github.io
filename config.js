module.exports = {
	VERIFY_TOKEN: 'sivansivansivan',
	PAGE_TOKEN: 'EAAOPue2B4z4BAMzZA9isR1IXsh6dbZBtSKm4wJIJqBNPgl5a5VsZA6EfrmZAQcxTVJuqwUlH0JtsxvzsG9sEwvzcHH3eHTV1Eom1ZAcZBuyi6S8ZAeiigPrErAdVffxNtYLS5db8DNZC3uVff9TqiTdSrl0pMSCxE7Qda9QbSCvbvYh83QAucpdr'
}
npm run build
node bin/fb-bot
curl -ik -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<token>"
