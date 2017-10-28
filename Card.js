function Card(Suite, RankNumber)
{
	const Ranks = 
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
	
	this.Suite = Suite;
	this.Rank = Ranks[RankNumber];
	let Score = -1
	
	if(RankNumber === 1)
	{
		Score = 11;
	}
	else if(RankNumber > 9)
	{
		Score = 10;
	}
	else
	{
		Score = RankNumber
	}
	
	this.Score = Score;
	this.Facedown = false;	
}

Card.prototype.GetInfo = function()
{
	let Info = [];
	
	Info.push(this.Suite);
	Info.push(this.Rank);
	Info.push(this.Score);
	
	return Info;
}

Card.prototype.ChangeAce = function()
{
	this.Score = 1;
}
