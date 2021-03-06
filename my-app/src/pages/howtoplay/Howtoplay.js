import React from "react";

const Howtoplay = () => {
  return (
    <div>
      <h4>Basics</h4>
      <p>
        UNC Compstone is a card game between two players. The goal of the game
        is to play cards from your hand onto the board and then use the cards on
        the board to damage the enemy's grade and eventually bring them down to
        0.
      </p>

      <h4>Start of the game</h4>
      <p>
        Each player starts with 7 cards in their hand and 0 on their board. The
        player that goes first is decided randomly.
      </p>

      <h4>Turn progression</h4>
      <p>
        On a player's turn, they can play cards from their hand onto their
        board. Each board can only have 7 cards on it at a time. Playing a card
        from the hand costs health and when a card is played it can't be used to
        attack until the turn after it is played. Many cards have abilities that
        are activated upon playing the card from the hand.
      </p>

      <h4>End of Game</h4>
      <p>The game ends when one of the players goes down to 0 health.</p>
    </div>
  );
};

export default Howtoplay;
