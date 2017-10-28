function Deck()
{
	
	this.Cards = [];
	this.Count = 0;
	
	for(let i = 1; i < 14; i++)
	{
		var Card = new Card("Spades", i);
		this.Cards.push(Card);
	}
	
	for(let i = 1; i < 14; i++)
	{
		let Card = new Card("Diamonds", i);
		this.Cards.push(Card);
	}
	
	for(let i = 1; i < 14; i++)
	{
		let Card = new Card("Hearts", i);
		this.Cards.push(Card);
	}
	
	for(let i = 1; i < 14; i++)
	{
		let Card = new Card("Clubs", i);
		this.Cards.push(Card);
	}
	
	this.Shuffle();
}

Deck.prototype.Shuffle = function()
{
	
	let i = 0, j = 0, Temp = null;
	
	for(i = this.Cards.length - 1; i > 0; i--)
	{
		j = Math.floor(Math.random()*(i+1));
		Temp = this.Cards[i];
		this.Cards[i] = this.Cards[j];
		this.Cards[j] = Temp;
	}
}

Deck.prototype.DrawCard = function()
{
	let Card = this.Cards[0];
	this.CardCount(Card);
	this.Cards.splice(0,1);
	return Card;
}

Deck.prototype.CardCount = function(Card)
{
	
	if(Card.Rank >= 10)
	{
		this.Count -= 1;
	}
	else if(Card.Rank < 7)
	{
		this.Count += 1;
	}
		
}