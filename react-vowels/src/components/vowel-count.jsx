
function vowelCount(props) {

  const getCount = () => {
    let count
    if (props.vowels != undefined && props.vowels != '') {
      count = props.vowels.length
    } else count = ''
    return count
  }

  return (
    <span id="count">
      {getCount()}
    </span>
  );

}

export default vowelCount