// hooks
import { useState } from 'react';
import Counter from "./Components/Counter"
import Greeting from "./Components/Greeting"
import Todo from './Todo'

function App() {
  const [userData, setUserData] = useState(null)

  const fetchData = async () => {
    const response = await fetch('https://api.github.com/users/aarenjvo')
    const data = await response.json()
    console.log(data)
    setUserData(data)
  }

  const clear = () => {
    setUserData(null)
  }


  const display = userData && (
    <div>
      <p>{userData.login}</p>
      <img src={userData.avatar_url} alt='profile' />
      <p>
        <a href={userData.html_url} target="blank">Profile</a>
      </p>
    </div>
  )

  const people = ['Aaren', 'Mely', 'Gatsby']
  const greetings = people.map((person, i) => {
    return <Greeting key={i} name={person} />
  })

  return (
    <div>
      <h1>My Counter Application</h1>
      <Counter />
      <button onClick={fetchData}>Get Data</button>
      {display}
      <button onClick={clear}>Clear Data</button>
      {/* {greetings} */}
      <Todo />
    </div>
  );
}

export default App;
