import {
  ResultContainer,
  ImageContainer,
  User,
  ResultHeading,
  ResultImage,
  PlayAgainButton,
} from './styledComponents'

const resultText = {won: 'WON', lose: 'LOSE', draw: 'DRAW'}

const ResultCard = props => {
  const {onClickPlayAgain, choicesList, yourChoice, opponentChoice} = props
  const clickPlayAgain = () => onClickPlayAgain()
  let opponentImageUrl
  let yourImageUrl
  choicesList.map(eachItem => {
    if (eachItem.id === yourChoice) {
      yourImageUrl = eachItem.imageUrl
    }
    if (eachItem.id === opponentChoice) {
      opponentImageUrl = eachItem.imageUrl
    }
    return null
  })
  const you = 'YOU'
  let result
  if (opponentChoice === 'ROCK' && yourChoice === 'SCISSORS') {
    result = `${you} ${resultText.lose}`
  } else if (opponentChoice === 'SCISSORS' && yourChoice === 'ROCK') {
    result = `${you} ${resultText.won}`
  } else if (opponentChoice === 'SCISSORS' && yourChoice === 'PAPER') {
    result = `${you} ${resultText.lose}`
  } else if (opponentChoice === 'PAPER' && yourChoice === 'SCISSORS') {
    result = `${you} ${resultText.won}`
  } else if (opponentChoice === 'PAPER' && yourChoice === 'ROCK') {
    result = `${you} ${resultText.lose}`
  } else if (opponentChoice === 'ROCK' && yourChoice === 'PAPER') {
    result = `${you} ${resultText.won}`
  } else {
    result = `IT IS ${resultText.draw}`
  }
  return (
    <ResultContainer>
      <ImageContainer>
        <User>YOU</User>
        <ResultImage src={yourImageUrl} alt="your choice" />
      </ImageContainer>
      <ImageContainer>
        <User>OPPONENT</User>
        <ResultImage src={opponentImageUrl} alt="opponent choice" />
      </ImageContainer>
      <ImageContainer>
        <ResultHeading>{result}</ResultHeading>
        <PlayAgainButton type="button" onClick={clickPlayAgain}>
          Play Again
        </PlayAgainButton>
      </ImageContainer>
    </ResultContainer>
  )
}

export default ResultCard
