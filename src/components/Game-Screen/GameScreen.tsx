import React from 'react';

import Container from '../Container/Container';
import Frame from '../Frame/Frame';
import GameSettings from '../Game-Settings/Game-Settings';
import ScoreBoard from '../Scoreboard/Scoreboard';

const MOCK_CARDS = [
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  {
    imgSrc: 'src',
    title: 'Card'
  },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
  // {
  //   imgSrc: 'src',
  //   title: 'Card'
  // },
]

const GameScreen = () => {
  return (
    <Container>
      <div className="game-screen">
        <div className="game-screen__settings">
          <GameSettings />
        </div>
        <div className="game-screen__frame">
          <Frame
            cards={MOCK_CARDS}
            sizeFrame={[3, 4]}
          />
        </div>
        <div className="game-screen__scoreboard">
          <ScoreBoard />
        </div>
      </div>
    </Container>
  )
}

export default GameScreen;