function Hand()
{
	this.Cards = [];
}	

Hand.prototype.AddCard = function(Card)
{
	this.Cards.push(Card);
}

Hand.prototype.ReturnHand = function()
{
	let Hand = "Cards: ";
	
	for(Card in this.Cards)
	{
		if(this.Cards[Card].Facedown === false)
		{
			Hand += "[" + this.Cards[Card].Rank + " of " + this.Cards[Card].Suite + "], ";
		}
		else
		{
			Hand += "[?], ";
		}
	}
	
	return Hand;
}

Hand.prototype.GetScore = function()
{
	let Score = 0;
	
	for(Card in this.Cards)
	{
		Score += this.Cards[Card].Score;
	}
	
	return Score;
}

Hand.prototype.IsBusted = function()
{
	if(this.GetScore() > 21)
	{
		return true;
	}
	else
	{
		return false;
	}
}

Hand.prototype.ClearHand = function()
{
	this.Cards = [];
}

Hand.prototype.CheckFor21 = function()
{
	if(this.GetScore() === 21)
	{
		return true;
	}
	else
	{
		return false;
	}
}

Hand.prototype.HasAce = function()
{
	for(Card in this.Cards)
	{
		if(this.Cards[Card].Score === 11)
		{
			this.Cards[Card].ChangeAce();
			return true;
		}
	}
	
	return false;
}





