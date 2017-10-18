function Hand()
{
	this.cards = [];
}	

Hand.prototype.add_card = function(card)
{
	this.cards.push(card);
}

Hand.prototype.return_hand = function()
{
	let hand = "Cards: ";
	
	for(card in this.cards)
	{
		if(this.cards[card].facedown === false)
		{
			hand += "[" + this.cards[card].rank + " of " + this.cards[card].suite + "], ";
		}
		else
		{
			hand += "[?], ";
		}
	}
	
	return hand;
}

Hand.prototype.get_score = function()
{
	let score = 0;
	
	for(card in this.cards)
	{
		score += this.cards[card].score;
	}
	
	return score;
}

Hand.prototype.is_busted = function()
{
	if(this.get_score() > 21)
	{
		return true;
	}
	else
	{
		return false;
	}
}

Hand.prototype.clear_hand = function()
{
	this.cards = [];
}

Hand.prototype.check_21 = function()
{
	if(this.get_score() === 21)
	{
		return true;
	}
	else
	{
		return false;
	}
}

Hand.prototype.has_ace = function()
{
	for(card in this.cards)
	{
		if(this.cards[card].score === 11)
		{
			this.cards[card].change_ace();
			return true;
		}
	}
	return false;
}





