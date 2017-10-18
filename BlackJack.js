function should_dealer_draw(hand, house, deck)
{
	if(hand.get_score() > house.get_score() && hand.is_busted() === false)
	{
		return true;
	}
	else
	{
		return false;
	}
}

alert("Welcome to my Blackjack game!");
	
let newDeck = new Deck();

let my_hand = new Hand();

let dealer_hand = new Hand();

let playOn = true;

while(playOn === true)
{
	
	alert("Dealing hands...");

	my_card_1 = newDeck.draw_card();
	my_card_2 = newDeck.draw_card();
		
	dealer_card_1 = newDeck.draw_card();
	dealer_card_1.facedown = true;
	dealer_card_2 = newDeck.draw_card();
		
	my_hand.add_card(my_card_1); 
	my_hand.add_card(my_card_2);

	dealer_hand.add_card(dealer_card_1);
	dealer_hand.add_card(dealer_card_2);
	
	if(my_hand.is_busted())
	{
		my_hand.has_ace();
	}
	
	if(dealer_hand.is_busted())
	{
		dealer_hand.has_ace();
	}
	
	if(my_hand.check_21() === true && dealer_hand.check_21() === true)
	{
		dealer_hand.cards[0].facedown = false;
		alert("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
			"\nDealer's hand: " + dealer_hand.return_hand() + "Score: " + dealer_hand.get_score() +
			"\nIt's a draw!");
	}
	else if(my_hand.check_21() === true)
	{
		dealer_hand.cards[0].facedown = false;
		alert("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
			"\nDealer's hand: " + dealer_hand.return_hand() + "Score: " + dealer_hand.get_score() +
			"\nBlackjack! You win!");
	}
	else if(dealer_hand.check_21() === true)
	{
		dealer_hand.cards[0].facedown = false;
		alert("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
			"\nDealer's hand: " + dealer_hand.return_hand() + "Score: " + dealer_hand.get_score() +
			"\nBlackjack! The house wins!");
	}
	else
	{
		
		let move = prompt("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
			"\nDealer's hand: " + dealer_hand.return_hand() + "Score: ?" +
			"\nWould you like to [hit] or [stand]?");
		
		while(move.toUpperCase() !== "HIT" && move.toUpperCase() !== "STAND")
		{
			move = prompt("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
				"\nDealer's hand: " + dealer_hand.return_hand() + "Score: ?" +
				"\n[HIT] OR [STAND]");
		}
		
		while(move.toUpperCase() === "HIT")
		{
				
			alert("Dealing...");
			
			my_hand.add_card(newDeck.draw_card());
			
			if(my_hand.is_busted())
			{
				if(!my_hand.has_ace())
				{
					alert("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
						"\nYou busted!");
					
					move = "STAND";
				}
				else
				{
					my_hand.has_ace();
				}
			}
			
			if(!my_hand.is_busted())
			{		
				move = prompt("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
					"\nDealer's hand: " + dealer_hand.return_hand() + "Score: ?" +
					"\nWould you like to [hit] or [stand]?");
			}
			
			while(move.toUpperCase() !== "HIT" && move.toUpperCase() !== "STAND")
			{
				move = prompt("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
					"\nDealer's hand: " + dealer_hand.return_hand() + "Score: ?" +
					"\n[HIT] OR [STAND]");
			}
		}
		
		while(should_dealer_draw(my_hand, dealer_hand, newDeck) === true)
		{
			alert("Dealing...");
					
			dealer_hand.add_card(newDeck.draw_card());
			
			alert("Dealer's hand: " + dealer_hand.return_hand() + "Score: ?");
			
			if(dealer_hand.is_busted())
			{
				if(!dealer_hand.has_ace())
				{
					dealer_hand.cards[0].facedown = false;
					alert("Dealer busted!");
					break;
				}
				else
				{
					dealer_hand.has_ace();
				}
			}
		}
		
		if(my_hand.get_score() < dealer_hand.get_score() && dealer_hand.is_busted() === false || my_hand.is_busted() === true)
		{
			dealer_hand.cards[0].facedown = false;
			alert("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
				"\nDealer's hand: " + dealer_hand.return_hand() + "Score: " + dealer_hand.get_score() +
				"\nThe house wins!");
		}
		else if(my_hand.get_score() > dealer_hand.get_score() && my_hand.is_busted() === false || dealer_hand.is_busted() === true)
		{
			dealer_hand.cards[0].facedown = false;
			alert("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
				"\nDealer's hand: " + dealer_hand.return_hand() + "Score: " + dealer_hand.get_score() +
				"\nYou win!");
		}
		else
		{
			dealer_hand.cards[0].facedown = false;
			alert("Your hand: " + my_hand.return_hand() + "Score: " + my_hand.get_score() +
				"\nDealer's hand: " + dealer_hand.return_hand() + "Score: " + dealer_hand.get_score() +
				"\nIt's a draw!");
		}
	}
	
	move = prompt("Would you like to play again?\nEnter [yes] or [no]")
	
	while(move.toUpperCase() !== "YES" && move.toUpperCase() !== "NO")
	{
		move = prompt("[YES] OR [NO]");
	}
	
	if(move.toUpperCase() === "YES")
	{
		delete newDeck;
		newDeck = new Deck();
		my_hand.clear_hand();
		dealer_hand.clear_hand();
	}	
	else
	{
		alert("Thanks for playing!");
		playOn = false;
	}
}


