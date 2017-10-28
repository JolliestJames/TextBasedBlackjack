function ShouldDealerDraw(Hand, House, Deck)
{
	if(Hand.GetScore() > House.GetScore() && Hand.IsBusted() === false)
	{
		return true;
	}
	else
	{
		return false;
	}
}

alert("Welcome to my Blackjack game!");
	
let NewDeck = new Deck();

let MyHand = new Hand();

let DealerHand = new Hand();

let Play = true;

while(Play)
{
	
	alert("Dealing hands...");

	MyCard1 = NewDeck.DrawCard();
	MyCard2 = NewDeck.DrawCard();
		
	DealerCard1 = NewDeck.DrawCard();
	DealerCard1.Facedown = true;
	DealerCard2 = NewDeck.DrawCard();
		
	MyHand.AddCard(MyCard1); 
	MyHand.AddCard(MyCard2);

	DealerHand.AddCard(DealerCard1);
	DealerHand.AddCard(DealerCard2);
	
	if(MyHand.IsBusted())
	{
		MyHand.HasAce();
	}
	
	if(DealerHand.IsBusted())
	{
		DealerHand.HasAce();
	}
	
	if(MyHand.CheckFor21() === true && DealerHand.CheckFor21() === true)
	{
		DealerHand.Cards[0].Facedown = false;
		alert("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
			"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: " + DealerHand.GetScore() +
			"\nIt's a draw!");
	}
	
	else if(MyHand.CheckFor21() === true)
	{
		DealerHand.Cards[0].Facedown = false;
		alert("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
			"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: " + DealerHand.GetScore() +
			"\nBlackjack! You win!");
	}
	else if(DealerHand.CheckFor21() === true)
	{
		DealerHand.Cards[0].Facedown = false;
		alert("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
			"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: " + DealerHand.GetScore() +
			"\nBlackjack! The house wins!");
	}
	else
	{
		
		let move = prompt("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
			"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: ?" +
			"\nWould you like to [hit] or [stand]?");
		
		while(move.toUpperCase() !== "HIT" && move.toUpperCase() !== "STAND")
		{
			move = prompt("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
				"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: ?" +
				"\n[HIT] OR [STAND]");
		}
		
		while(move.toUpperCase() === "HIT")
		{
				
			alert("Dealing...");
			
			MyHand.AddCard(NewDeck.DrawCard());
			
			if(MyHand.IsBusted())
			{
				if(!MyHand.HasAce())
				{
					alert("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
						"\nYou busted!");
					
					move = "STAND";
				}
				else
				{
					MyHand.HasAce();
				}
			}
			
			if(!MyHand.IsBusted())
			{		
				move = prompt("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
					"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: ?" +
					"\nWould you like to [hit] or [stand]?");
			}
			
			while(move.toUpperCase() !== "HIT" && move.toUpperCase() !== "STAND")
			{
				move = prompt("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
					"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: ?" +
					"\n[HIT] OR [STAND]");
			}
		}
		
		while(ShouldDealerDraw(MyHand, DealerHand, NewDeck) === true)
		{
			alert("Dealing...");
					
			DealerHand.AddCard(NewDeck.DrawCard());
			
			alert("Dealer's hand: " + DealerHand.ReturnHand() + "Score: ?");
			
			if(DealerHand.IsBusted())
			{
				if(!DealerHand.HasAce())
				{
					DealerHand.Cards[0].Facedown = false;
					alert("Dealer busted!");
					break;
				}
				else
				{
					DealerHand.HasAce();
				}
			}
		}
		
		if(MyHand.GetScore() < DealerHand.GetScore() && MyHand.IsBusted() === false || MyHand.IsBusted() === true)
		{
			DealerHand.Cards[0].Facedown = false;
			alert("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
				"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: " + DealerHand.GetScore() +
				"\nThe house wins!");
		}
		else if(MyHand.GetScore() > DealerHand.GetScore() && MyHand.IsBusted() === false || DealerHand.IsBusted() === true)
		{
			DealerHand.Cards[0].Facedown = false;
			alert("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
				"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: " + DealerHand.GetScore() +
				"\nYou win!");
		}
		else
		{
			DealerHand.Cards[0].Facedown = false;
			alert("Your hand: " + MyHand.ReturnHand() + "Score: " + MyHand.GetScore() +
				"\nDealer's hand: " + DealerHand.ReturnHand() + "Score: " + DealerHand.GetScore() +
				"\nIt's a draw!");
		}
	}
	
	Move = prompt("Would you like to play again?\nEnter [yes] or [no]")
	
	while(Move.toUpperCase() !== "YES" && Move.toUpperCase() !== "NO")
	{
		Move = prompt("[YES] OR [NO]");
	}
	
	if(Move.toUpperCase() === "YES")
	{
		MyHand.ClearHand();
		DealerHand.ClearHand();
		NewDeck.DeleteCards();
		delete NewDeck;
		NewDeck = new Deck();
	}	
	else
	{
		alert("Thanks for playing!");
		Play = false;
	}
}


