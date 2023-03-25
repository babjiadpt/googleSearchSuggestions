// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchList, updateSearchInput} = props
  const {suggestion} = searchList

  const updateSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="item-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" onClick={updateSuggestion} className="button-arrow">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="button-arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
