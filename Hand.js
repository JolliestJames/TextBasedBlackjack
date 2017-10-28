function Hand()
{
	this.Cards = [];
}	

Hand.prototype.DeleteCards = function()
{
	for(Index in this.Cards)
	{
		delete this.Cards[Index];
	}
}

Hand.prototype.AddCard = function(Card)
{
	this.Cards.push(Card);
}

Hand.prototype.ReturnHand = function()
{
	let Hand = "Cards: ";
	
	for(Index in this.Cards)
	{
		if(this.Cards[Index].Facedown === false)
		{
			Hand += "[" + this.Cards[Index].Rank + " of " + this.Cards[Index].Suite + "], ";
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
	
	for(Index in this.Cards)
	{
		Score += this.Cards[Index].Score;
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
	for(Index in this.Cards)
	{
		if(this.Cards[Index].Score === 11)
		{
			this.Cards[Index].ChangeAce();
			return true;
		}
	}
	return false;
}





