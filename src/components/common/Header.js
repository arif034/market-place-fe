import {useState} from 'react'

function Header(){

    const [message, setMessage] = useState('')

    const onChange = (event) =>
    {
        setMessage(event.target.value)
        console.log(event.target.value);
    }

    return(<div>
        <input type = "text" value = {message} onChange = {onChange}/>
        {message}
    </div>);
}

export default Header;