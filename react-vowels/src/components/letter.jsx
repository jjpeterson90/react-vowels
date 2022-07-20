
function letter(props) {

  function style() {
    console.log('style function')
    if (props.style == 'highlight') {
      return 'highlight'
    } else return ''
  }

  function value() {
    return props.value
  }

  return (
    <span className={ style() }>
      { props.value }
    </span>
  );
  
}
  
export default letter