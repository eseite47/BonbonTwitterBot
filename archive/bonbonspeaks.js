var bbquotes = Array();

bbquotes.push("He who lives in harmony with himself lives in harmony with the world. -- Marcus Aurelius");
bbquotes.push("Worry often gives a small thing a big shadow. -- Swedish Proverb");
bbquotes.push("Nothing great was ever achieved without enthusiasm -- Ralph Waldo Emerson");
bbquotes.push("Do the best you can until you know better. Then when you know better, do better - Maya Angelou");
bbquotes.push("It always seems impossible until it's done. -- Nelson Mandela");
bbquotes.push("Life is 10% what happens to you and 90% how you react to it. -- Charles R. Swindoll");
bbquotes.push("The best preparation for tomorrow is doing your best today. -- H. Jackson Brown, Jr.");
bbquotes.push("Believe you can and you're halfway there. -- Theodore Roosevelt")
bbquotes.push("If one does not know to which port one is sailing, no wind is favorable. -- Seneca");
bbquotes.push("Luck is what happens when preparation meets opportunity. -- Seneca");
bbquotes.push("If opportunity doesn't knock, build a door. -- Milton Berle");
bbquotes.push("The power of imagination makes us infinite. -- John Muir")


function sendQuote(){
	var quote = bbquotes[Math.floor(Math.random()*bbquotes.length)];
	console.log(quote);

	tweetIt(quote);
}

sendQuote();
setInterval(sendQuote, 1000*60*47)