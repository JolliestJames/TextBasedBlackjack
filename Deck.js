function Deck()
{
	
	this.cards = [];
	this.count = 0;
	
	for(let i = 1; i < 14; i++)
	{
		var card = new Card("Spades", i);
		this.cards.push(card);
	}
	
	for(let i = 1; i < 14; i++)
	{
		let card = new Card("Diamonds", i);
		this.cards.push(card);
	}
	
	for(let i = 1; i < 14; i++)
	{
		let card = new Card("Hearts", i);
		this.cards.push(card);
	}
	
	for(let i = 1; i < 14; i++)
	{
		let card = new Card("Clubs", i);
		this.cards.push(card);
	}
	
	this.shuffle();
}

Deck.prototype.shuffle = function()
{
	
	let i = 0, j = 0, temp = null;
	
	for(i = this.cards.length - 1; i > 0; i--)
	{
		j = Math.floor(Math.random()*(i+1));
		temp = this.cards[i];
		this.cards[i] = this.cards[j];
		this.cards[j] = temp;
	}
}

Deck.prototype.draw_card = function()
{
	let card = this.cards[0];
	this.card_count(card);
	this.cards.splice(0,1);
	return card;
}

Deck.prototype.card_count = function(card)
{
	
	if(card.rank >= 10)
	{
		this.count -= 1;
	}
	else if(card.rank < 7)
	{
		this.count += 1;
	}
		
}