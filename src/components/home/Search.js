// import axios from "axios";
// import {useState} from 'react'
// function Search(){

//     const [data, setData] = useState([]);
//     const [error , setError] = useState('');
//     const [dataMssg, setDataMssg] = useState([]);
//     const [productName, setProductName] = useState(``);

//     function findAllProducts(){
//         axios.get("http://localhost:8082" + '/product/get-all')
//         .then(response => {
//             setData(response.data);
//         })
//         .catch(
//             err => {
//                 console.log('error occured : ',error);
//                 setError(err);
//             }
//         );
//     }


//     function logging()
//     {
//         if(data != null)
//         {
//             console.log(data.message);
//             data.status == 404 ? alert(`${data.message}`):alert(`${data.message}`);
//         }
//         else
//         {
//             alert(`api not hit yet`);
//         }
//     }

//     function onSearch()
//     {
        
//         findProductsByName();
//         logging();
//     }

//     function findProductsByName()
//     {
//         axios.get(`http://localhost:8082/product/get-by-name?name=${productName}`)
//         .then(response => {
//             setDataMssg(response.data);
//         }).catch(
//             err => {
//                 console.log(err);
//                 setError(err);
//             }
//         )
//     }

//     const onInputChange = () => {
//         console.log(`${productName}`);
//         setProductName(productName);
//     }

//     return <div>
//         <input type = "text" value = {productName} onChange = {() => {onInputChange}} placeholder = "Search products..."/>
//         <button onClick = {() => {onSearch()}}>Search</button>
//     </div>
// }

// export default Search;