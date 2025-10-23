import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/welcome'

function App() {
  const [count, setCount] = useState(0)

  // let movie = [
  //   {nama:"sky", usia:23, genre:"animasi" },
  //   {nama:"jennie", usia:27, genre:"animasi" },
  //   {nama:"olivie", usia:22, genre:"horor" },
  //   {nama:"niki", usia:24, genre:"Komedi" }
  // ]

  // return (
  //   <>
  //     {movie.map((item, index) => (
  //       <Welcome name={item.nama} color ="pink"/>
  //     ))}
         

  //   </>
  // )
  let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]
  return(
    <>
    <div class="container"> 
      <img src="/src/assets/logo.jpeg" alt="logo thingstodo"/>
      <h2>THINGS TO DO</h2>
      <h5>During bootcamp in sanbercode</h5>
      <form action="/action_page.php">
            {thingsToDo.map((item, index) => (
            <div class="checkbox" key={index}>
              <input
                type="checkbox"
                id={`task-${index}`}
                name={`task-${index}`}
                value={item}
              />
              <label htmlFor={`task-${index}`}> {item}</label>
              <br /> 
            </div> 
          ))}
          <br />
          <button class="submit" type="submit" value="">SEND</button>
      </form>
    </div>
    </>
  )
}

export default App
