import { useState } from "react";//Need to import useState first to use it
import axios from "axios";
const Create = ()=>{
    //We do everything in this class thanks to Axios
    //Allows us to handle http requests & responses
    //Axios allows us to send asynchronous http requests(get, post)
    //Sends them to endpoints to handle responses

    //We create an array called title
    //Give a method to set the title
    //And give it a default state of useState
    //State Variable
    //useState allows us to add state variables to functional components
    //format = const [state, setState] = useState(initialValue);
    const[title, setTitle] = useState('');
    const[year, setYear] = useState('');
    const[poster, setPoster] = useState('');

    //Used to handle when our submit button is pressed
    //Takes in the element, prevents it from repeating
    //Then it logs it to the console
    //Modified version now adds it to the server too
    const handleSubmit = (e) => {
        //Prevents the function from being called multiple times
        e.preventDefault();
        //Outputting the title entered by the user to the console
        const movie = {title, year, poster};
        console.log(movie);

        axios.post('http://localhost:4000/api/movies', movie)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.data));
    }
    return(
        //Simple component to be displayed in app.js
        //Each field is handled using reacts useState
        //Each input will be logged to the console upon submission
        <div>
            {/*Getting the title for our movie and saving it to the server*/}
            <h3>Hello from the Create component</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add a movie Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) =>{setTitle(e.target.value)}}></input>
                </div>
            </form>
            {/*Getting the year of release for our movie and saving it to the server*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add a movie release year: </label>
                    <input type="text"
                    className="form-control"
                    value={year}
                    onChange={(e) =>{setYear(e.target.value)}}></input>
                </div>
            </form>
            {/*Getting the poster for our movie and saving it to the server*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add a movie Poster: </label>
                    <input type="text"
                    className="form-control"
                    value={poster}
                    onChange={(e) =>{setPoster(e.target.value)}}></input>
                </div>
                <div>
                    <input type="submit" value="Save Details"></input>
                </div>
            </form>
        </div>
    )
}

export default Create;