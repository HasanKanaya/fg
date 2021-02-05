


function hasan(yourchoice)
{
	var humanchoice,botchoice;

	humanchoice = yourchoice.id;
	botchoice = numbertochoice(randrps());

	results = winner(humanchoice,botchoice);

	message = finalmassage(results);

	rpsfrontend(yourchoice.id,botchoice,message);




}

function randrps()
{
	return Math.floor(Math.random()*3);
}

function numbertochoice(number)
{
	return ['rock','paper','scissors'][number];
}

function winner(yourchoice,botchoice)
{
	var rpsdatabase = {
		'rock' : {'scissors' : 1,'rock' : 0.5 , 'paper' : 0},
		'paper' :{'scissors' : 0,'rock' : 1 , 'paper' : 0.5},
		'scissors' : {'scissors' : 0.5,'rock' : 0 , 'paper' : 1}
	};

	var yourscore = rpsdatabase[yourchoice][botchoice];
	var botscore = rpsdatabase[botchoice][yourchoice];

	return [yourscore,botscore];
}


function finalmassage([yourscore,botscore])
{
	if(yourscore === 0)
	{
		return {'message':'You lost!','color':'red'};
	}
	else if(yourscore === 0.5)
	{
		return {'message':'Draw','color':'yellow'};
	}
	else
	{
		return {'message':'You won!','color':'green'};
	}
}



function rpsfrontend(humanimage,botimage,finalmassage)
{
	var imagedatabase = {
		'rock' : document.getElementById('rock').src,
		'paper' : document.getElementById('paper').src,
		'scissors' : document.getElementById('scissors').src
	};


	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();


	var humandiv = document.createElement('div');
	var botdiv = document.createElement('div');
	var messagediv = document.createElement('div');


	humandiv.innerHTML = "<img src='" + imagedatabase[humanimage] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px blue;' >";
	messagediv.innerHTML = "<h1 style='color: "+ finalmassage['color'] + "; font-size:60px; padding:30px;'>" + finalmassage['message'] + "</h1>";
	botdiv.innerHTML = "<img src='" + imagedatabase[botimage] + "' height=150 width=150 style = 'box-shadow: 0px 10px 50px red;' >";


	document.getElementById('flex-box-rps-div').appendChild(humandiv);
	document.getElementById('flex-box-rps-div').appendChild(messagediv);
	document.getElementById('flex-box-rps-div').appendChild(botdiv);



}