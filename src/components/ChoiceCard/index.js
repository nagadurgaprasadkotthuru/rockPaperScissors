import {ChoiceButton, ChoiceImage} from './styledComponents'

const ChoiceCard = props => {
  const {cardDetails, onChangeChoice} = props
  const {id, imageUrl} = cardDetails
  const dataTestIdValue = `${id.toLowerCase()}Button`
  const clickChoice = () => onChangeChoice(id)
  return (
    <ChoiceButton
      data-testid={dataTestIdValue}
      type="button"
      onClick={clickChoice}
    >
      <ChoiceImage alt={id} src={imageUrl} />
    </ChoiceButton>
  )
}

export default ChoiceCard
