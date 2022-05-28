import axios from "axios";
import {Component} from "react"

class AddProducts extends Component{

    constructor(props)
    {
        super(props)
        this.state = {

            response : {},
            products : {},
            price : 0,
            category : '',
            name : ''
        }
    }

    changeName = (event) => {
        let newVal = {"name" : event.target.value};
        this.setState(() => {
            return {...this.state.products, ...newVal}
        })
    }

    changeCategory =  (event) => {
        let newVal = {"category" : event.target.value};
        this.setState(() => {
            return {...this.state.products, ...newVal}
        })
    }

    changePrice = (event) => {
        let newVal = {"price" : event.target.value};
        this.setState(() => {
            return {
            ...this.state.products, ...newVal}
            }
        );
    }

    submitForm = () => {
        let request = {
            name : 'Mobile',
            category : 'Electronics',
            price : 12000
        };
        axios.post('http://localhost:8082/product/add-product', request)
        .then(response => this.setState(() => {
            response.data.status == 200 ? alert(`${response.data.message}`):alert(`api hit failed`);
            return {response : response.data}
        }))
        .catch(err => {
            console.log(err);
        });
    }

    render()
    {
        return(<div>
            <form >
                <input type = "text" value = {this.state.name} onChange = {this.changeName} placeholder = "Product name"/>
                <br/>
                <input type = "text" value = {this.state.category} onChange = {this.changeCategory} placeholder = "Product category"/>
                <br/>
                <input type = "text" value = {this.state.price} onChange = {this.changePrice} placeholder = "Product price"/>
                <br/>
                <button onClick = {this.submitForm}>Add Product</button>
            </form>
        </div>)
    }
}

export default AddProducts;