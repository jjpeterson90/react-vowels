
function userForm(props) {

  return (
    <div className="d-flex">
      <h4 className="text-white">
        <u>Enter Text:</u>
        <input type="text" className="text-white ms-3" id="input" />
      </h4>
      <button className="btn btn-warning ms-3" type="Submit" onClick={props.handleClick}>
        Submit
      </button>
    </div>
  );

}

export default userForm;
