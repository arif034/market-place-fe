import axios from "axios";
import {useState} from 'react'
function Search(){

    const [data, setData] = useState([]);
    const [error , setError] = useState('');

    function findAllProducts(){
        axios.get("http://localhost:8082" + '/product/get-all')
        .then(response => {
            setData(response.data)
        })
        .catch(
            err => {
                console.log('error occured : ',error);
                setError(err);
            }
        );
    }


    function onSearch()
    {
        findAllProducts();
    }

    return <div>
        <input type = "text" placeholder = "Search products..."/>
        <button onClick = {() => {onSearch()}}>Search</button>
        <div>{data}</div>
    </div>
}

export default Search;