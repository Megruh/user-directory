import React, {useState} from "react"
import data from "../data"

export default function Main() {
    const [index, setIndex] = useState(0)

    const increment = () => {
        if (index < 24){
        setIndex(index + 1)
        } else {
            alert("You have reached the end of the dataset")
        }
    }

    const decrement = () => {
        if (index > 0) {
        setIndex(index - 1)
        } else {
            alert("There is no previous data")
        }
    }

        return (
            <div>
                <section className="main-container">
                    <h1>{data[index].name.first} {data[index].name.last}</h1>
                    <h2>From: {data[index].country}</h2>
                    <h2>Job Title: {data[index].title}</h2>
                    <h2>Employer: {data[index].employer}</h2>
                    <h2>Favorite Movies:</h2>
                    <ol>
                        <li>{data[index].favoriteMovies[0]}</li>
                        <li>{data[index].favoriteMovies[1]}</li>
                        <li>{data[index].favoriteMovies[2]}</li>
                    </ol>
                </section>
                <section>
                    <button onClick={decrement}>{"< Previous"}</button>
                    <button onClick={increment}>{"Next >"}</button>
                </section>
            </div>
            
        )
    }