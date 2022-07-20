import Letter from './letter.jsx'

function highlightVowels(props) {

  const getResultElements = new Array(props.word.length).fill({}).map((elem, index) => {
    console.log('get result elements')
    if (props.vowels.includes(props.word[index])) {
      return (
        <Letter style={"highlight"} value={props.word[index]}/>
      )
    } else {
      return (
        <Letter style={"none"} value={props.word[index]}/>
      )
    }
  })

  return (
      <span>
        { getResultElements }
      </span>
  );

}

export default highlightVowels