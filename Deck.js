function Deck()
{
	
	this.Cards = [];
	
	for(let i = 1; i < 14; i++)
	{
		let NewCard = new Card("Spades", i);
		this.Cards.push(NewCard);
	}
	
	for(let i = 1; i < 14; i++)
	{
		let NewCard = new Card("Diamonds", i);
		this.Cards.push(NewCard);
	}
	
	for(let i = 1; i < 14; i++)
	{
		let NewCard = new Card("Hearts", i);
		this.Cards.push(NewCard);
	}
	
	for(let i = 1; i < 14; i++)
	{
		let NewCard = new Card("Clubs", i);
		this.Cards.push(NewCard);
	}
	
	this.Shuffle();
}

Deck.prototype.DeleteCards = function()
{
	for(Index in this.Cards)
	{
		delete this.Cards[Index];
	}
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
	let DrawThisCard = this.Cards[0];
	this.Cards.splice(0,1);
	return DrawThisCard;
}