function Header() {
    function onChange(val)
    {
        console.log(val.target.value);
    }
        return(<div>
            <input type = "text" onChange = {onChange}/>
        </div>);
}

export default Header;