

var quotes=[ 
	"\"Dude, suckin' at something is the first step at being sorta good at something.\"<br>-  Jake <small><em>(Adventure Time)</em></small>", 
	"\"Either I will find a way, or I will make one.\"<br> - Philip Sidney", 
	"\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison", 
	"\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis",
	"\"If you can dream it, you can do it.\"<br>- Walt Disney", 
	"\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe",
	"\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali", 
	"\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee",
	"\"The Way Get Started Is To Quit Talking And Begin Doing.\"<br>- Walt Disney",
	"\"the people who are crazy enough to think they can change the world are the ones who do.\" <br>- Steve Jobs",
	"\"Nothing is impossible, the word itself says “I’m possible”!\" <br>- Audrey Hepburn",
	"\"The greatest effort is not concerned with results.\"<br> - Atisha",
	"\"Wisdom equals knowledge plus courage. You have to not only know what to do and when to do it, but you have to also be brave enough to follow through.\"<br> - Jarod Kintz",
	"\"In a battle between two ideas, the best one doesn’t necessarily win. No, the idea that wins is the one with the most fearless heretic behind it.\" <br>- Seth Godin",
	"\"Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.\"<br> - Patrick Lencioni",
	"\"Leadership is an action, not a position.\"<br> - Donald McGannon",
	];
	

newQuote=()=>{
var randomNumber=Math.floor(Math.random()*(quotes.length));
var print=document.getElementById('quoteDisplay');
print.innerHTML=quotes[randomNumber];
}