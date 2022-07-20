
import { useState } from 'react'
import './App.css'
import UserForm from './components/user-form.jsx'
import VowelCount from './components/vowel-count.jsx'
import HighlightVowels from './components/highlight-vowels.jsx'

function App() {

  const [word, setWord] = useState('')
  const [vowels, setVowels] = useState('')

  const handleClick = () => {
    let newWord = document.getElementById('input').value
    setWord(newWord)

    let newVowels = newWord.match(/[aeiou]/gi)
    if (newVowels != null) newVowels = newVowels.join('')
    else newVowels = ''
    setVowels(newVowels)
  }

  return (
    <div className="App">
      <UserForm handleClick={handleClick} />
      <h5 className="pt-3 text-start text-white">
        Vowels: {vowels}
      </h5>
      <h5 className="text-start text-white">
        Count: <VowelCount vowels={vowels} />
      </h5>
      <h5 className="text-start text-white">
        Highlighted: <HighlightVowels word={word} vowels={vowels} />
      </h5>
    </div>
  );

}

export default App

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       userinput: '',
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   // handleChange(event) {
//   //   this.setState({value: event.target.value})
//   // }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.setState({userinput: event.target.input.value})
//     console.log(event.target.input.value)
//     console.log('button has been pressed')
//   }

//   render() {
//     return (
//       <div className="App">
//         <form onSubmit={this.handleSubmit}>
//           <div className="d-flex">
//             <h4 className="text-white">
//               <u>Enter Text:</u>
//               <input type="text" className="text-white ms-3" name="input"/>
//             </h4>
//             <button className="btn btn-warning ms-3" type="Submit">
//               Submit
//             </button>            
//           </div>
//         </form>
//         {/* <HighlightVowels userinput={this.state.userinput} /> */}
//         <Vowels userinput={this.state.userinput} />
//         {/* <VowelCount userinput={this.state.userinput} /> */}
//       </div>
//     )
//   }
// }



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {input: '', vowels: '', highlightVowels: '', count: ''};
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
  
//   handleInputChange(event) {
//     this.setState({input: event.target.value})
//     // this.setState({highlightVowels: })
//     this.setState({vowels: event.target.value.match(/[aeiou]/g).join('')})
//     this.setState({count: event.target.value.match(/[aeiou]/g).join('').length})
//   }

//   render() {
//     return (
//       <div className="App" >
//         <div>
          
//           <h4 className="text-white" >
//             <u>Enter Text:</u>
//             <input type="text" class="text-white ms-3" onChange={this.handleInputChange}/>
//           </h4>
//         </div>
//         <h5 className="text-white pt-3 text-start">
//           Highlighted: {}
//         </h5>
//         <h5 className="text-white pt-3 text-start" >
//           Vowels-only: {this.state.vowels}
//         </h5>
//         <h5 className="text-white pt-3 text-start">
//           Count: {this.state.count}
//         </h5>
//       </div>
//     )
//   }
// }

// export default App