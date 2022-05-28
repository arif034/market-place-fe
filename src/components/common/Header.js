import {useState} from 'react'

function Header() {

    const [message, setMessage] = useState('')

    function onChange(event){
        console.log(event.target.value);
        setMessage(event.target.value);
    }

    render()
    {
        return<div>
            <input type = "text" value = {message} onChange = {onChange}/>
        </div>
    }
}

export default Header;