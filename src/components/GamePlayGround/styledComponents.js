import styled from 'styled-components'

export const GamePlayGroundContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const ScoreBoardContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`

export const ScoreBoardHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 28px;
  margin-right: 30px;
  width: 150px;
  font-weight: 500;
`

export const ScoreBoard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 36px;
  font-weight: 500;
  margin: 0px;
`

export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 80px;
  padding: 0px;
  margin: 0px;
`

export const ChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 350px;
  margin-top: 100px;
`

export const RulesButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 18px;
  padding: 8px 20px 8px 20px;
  align-self: flex-end;
  position: absolute;
  bottom: 20px;
`

export const GameRulesContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 300px;
  padding: 4px;
`

export const GameRulesCloseButton = styled.button`
  background-color: #d4d9d9;
  border: none;
  align-self: flex-end;
  font-size: 22px;
  margin-bottom: 6px;
`

export const GameRulesImage = styled.img`
  width: 260px;
  height: 230px;
`
