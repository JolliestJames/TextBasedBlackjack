function Card(suite, rank)
{
	
	const ranks = 
	{
		1: "Ace",
		2: "2",
		3: "3",
		4: "4",
		5: "5",
		6: "6",
		7: "7",
		8: "8",
		9: "9",
		10: "10",
		11: "Jack",
		12: "Queen",
		13: "King"
	};
	
	this.suite = suite;
	this.rank = ranks[rank];
	
	let score = -1
	
	if(rank === 1)
	{
		score = 11;
	}
	else if(rank > 9)
	{
		score = 10;
	}
	else
	{
		score = rank
	}
	
	this.score = score;
	
	this.facedown = false;
	
}

Card.prototype.getInfo = function()
{
	let info = [];
	
	info.push(this.suite);
	info.push(this.rank);
	info.push(this.score);
	
	return info;
}

Card.prototype.change_ace = function()
{
	this.score = 1;
}

