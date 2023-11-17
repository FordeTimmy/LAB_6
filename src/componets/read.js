import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios"; //http client (will talk to the web)
function Read() {

    const [data, setData] = useState([]);


    // Adding all the book information 
    useEffect( // using react hook
        () => {//get method calling using asysnc
            axios.get('http://localhost:4000/api/books')
                .then(
                    (response) => {
                        setData(response.data.myBooks);// pulling out the data from the array called books
                    }
                )
                //will catchany errors
                .catch(
                    (error) => {// Arrow function 
                        console.log(error); // call back function 
                    } // print out "Error" to console if there is one
                )
        }, []
    );

    return (
        <div>
            <h1>Hello From Read Componets</h1>
            <Books myBooks={data}></Books>
        </div>

    );
}

export default Read;