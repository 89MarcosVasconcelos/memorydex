import styles from "./styles.module.css";
import { Card } from "../../components/Card";
import { GameOverModal } from "../../components/GameOverModal";

import { cards } from "../../cards";
import { useEffect } from "react";
import { useMemoryGame } from "../../hooks/useMemoryGame";

export function Game() {
  const {
    checkIfTheFlippedCardsMatches,
    gameOver,
    handleCardClick,
    handleMatchCards,
    isFlipped,
    isMemorized,
    resetGame,
    steps,
    unflippCard,
    flippedCards,
  } = useMemoryGame(cards);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const matched = checkIfTheFlippedCardsMatches();
      if (matched) {
        handleMatchCards();
      }
      setTimeout(unflippCard, 1000);
    }
  }, [flippedCards]);

  return (
    <>
      <GameOverModal show={gameOver} steps={steps} onPlayAgain={resetGame} />
      <div className={styles.game}>
        <div className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              flipped={isFlipped(card)}
              image={card.image}
              memorized={isMemorized(card)}
              handleClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
