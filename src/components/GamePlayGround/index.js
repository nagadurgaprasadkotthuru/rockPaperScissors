import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import ChoiceCard from '../ChoiceCard'
import ResultCard from '../ResultCard'

import {
  GamePlayGroundContainer,
  ChoicesContainer,
  ScoreBoardContainer,
  ScoreBoardHeading,
  ScoreBoard,
  ScoreHeading,
  Score,
  RulesButton,
  GameRulesContainer,
  GameRulesCloseButton,
  GameRulesImage,
} from './styledComponents'

class GamePlayGround extends Component {
  state = {
    score: 0,
    isShowResultCard: false,
    yourChoice: '',
    opponentChoice: '',
  }

  onClickPlayAgain = () =>
    this.setState(prevState => ({
      isShowResultCard: !prevState.isShowResultCard,
    }))

  onChangeChoice = value => {
    const {choicesList} = this.props
    const opponentChoice = choicesList[Math.floor(Math.random() * 3)].id
    console.log(opponentChoice, value)
    if (opponentChoice === 'ROCK' && value === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isShowResultCard: !prevState.isShowResultCard,
        yourChoice: value,
        opponentChoice,
      }))
    } else if (opponentChoice === 'SCISSORS' && value === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isShowResultCard: !prevState.isShowResultCard,
        yourChoice: value,
        opponentChoice,
      }))
    } else if (opponentChoice === 'SCISSORS' && value === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isShowResultCard: !prevState.isShowResultCard,
        yourChoice: value,
        opponentChoice,
      }))
    } else if (opponentChoice === 'PAPER' && value === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isShowResultCard: !prevState.isShowResultCard,
        yourChoice: value,
        opponentChoice,
      }))
    } else if (opponentChoice === 'PAPER' && value === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isShowResultCard: !prevState.isShowResultCard,
        yourChoice: value,
        opponentChoice,
      }))
    } else if (opponentChoice === 'ROCK' && value === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isShowResultCard: !prevState.isShowResultCard,
        yourChoice: value,
        opponentChoice,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 0,
        isShowResultCard: !prevState.isShowResultCard,
        yourChoice: value,
        opponentChoice,
      }))
    }
  }

  renderPlayGroundView = () => {
    const {choicesList} = this.props
    return (
      <ChoicesContainer>
        {choicesList.map(eachItem => (
          <ChoiceCard
            cardDetails={eachItem}
            key={eachItem.id}
            onChangeChoice={this.onChangeChoice}
          />
        ))}
      </ChoicesContainer>
    )
  }

  renderScoreBoard = () => {
    const {score} = this.state
    return (
      <ScoreBoardContainer>
        <ScoreBoardHeading>ROCK PAPER SCISSORS</ScoreBoardHeading>
        <ScoreBoard>
          <ScoreHeading>Score</ScoreHeading>
          <Score>{score}</Score>
        </ScoreBoard>
      </ScoreBoardContainer>
    )
  }

  render() {
    const {isShowResultCard, yourChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    return (
      <GamePlayGroundContainer>
        {this.renderScoreBoard()}
        {isShowResultCard ? (
          <ResultCard
            onClickPlayAgain={this.onClickPlayAgain}
            choicesList={choicesList}
            yourChoice={yourChoice}
            opponentChoice={opponentChoice}
          />
        ) : (
          this.renderPlayGroundView()
        )}
        <Popup
          modal
          trigger={<RulesButton type="button">RULES</RulesButton>}
          className="popup-content"
        >
          {close => (
            <GameRulesContainer>
              <GameRulesCloseButton onClick={() => close()}>
                <RiCloseLine />
              </GameRulesCloseButton>
              <GameRulesImage
                alt="rules"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              />
            </GameRulesContainer>
          )}
        </Popup>
      </GamePlayGroundContainer>
    )
  }
}

export default GamePlayGround
