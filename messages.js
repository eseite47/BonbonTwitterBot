/*
	This module contains the different messages bonbon will send.
*/

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

var bbprivatemessage = Array();

bbprivatemessage.push("You're the best! ");
bbprivatemessage.push("Keep up the great work! ");
bbprivatemessage.push("I can't believe how far you've come. Don't give up! ");
bbprivatemessage.push("You are so inspiring. ");
bbprivatemessage.push("Don't hold on to anger; it only hurts you. ");
bbprivatemessage.push("Everything happens for a reason. Don't give up just yet! ");
bbprivatemessage.push("Something awesome is right around the corner! ");
bbprivatemessage.push("sending you a bear hug!! ");
bbprivatemessage.push("Have a wonderful day! ");
bbprivatemessage.push("you've got this! ");
bbprivatemessage.push("Success is on it's way to you ");
bbprivatemessage.push("Make today the best possible day ");
bbprivatemessage.push("Reach for the moon!! ")
bbprivatemessage.push("you're my lucky follower today ");

var bbemoji = Array();

bbemoji.push("(づ｡◕‿‿◕｡)づ");
bbemoji.push("ᕙ(⇀‸↼‶)ᕗ");
bbemoji.push("(ᵔᴥᵔ)");
bbemoji.push("✧*｡٩(ˊᗜˋ*)و✧*｡");
bbemoji.push("ʕ•ᴥ•ʔ");
bbemoji.push("(*•̀ᴗ•́*)و ̑̑");
bbemoji.push("(๑˃̵ᴗ˂̵)و");
bbemoji.push("(๑•̀ㅂ•́)و✧");
bbemoji.push("٩(˃̶͈̀௰˂̶͈́)و");
bbemoji.push("");

function quote(){
	var quote = bbquotes[Math.floor(Math.random()*bbquotes.length)];
	return quote;
}
module.exports.quote = quote;

function atMention(){
	var message = bbprivatemessage[Math.floor(Math.random()*bbprivatemessage.length)];
	var emoji = bbemoji[Math.floor(Math.random()*bbemoji.length)];
	return message + " " + emoji;
}
module.exports.atMention = atMention;

