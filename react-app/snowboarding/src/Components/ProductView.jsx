import React from 'react';
import myData from "../products.json"
import {useState} from 'react';

function ProductView()
{
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setSearchItem] = useState([]);
    const [notFound, setNotFound] = useState();

    const searchSpace = (e) => {
        e.preventDefault();
        setNotFound("");
        for (let i = 0; i < myData.products.length; i++) {
            const searchDataI = myData.products[i];
            const searchDataValues = Object.values(searchDataI);
            if (searchDataValues.includes(searchValue)) {
                setSearchItem(searchDataValues);
            } //Need to create error handle that actually works.
            /*else {
                setNotFound(searchValue + " not found in search");
            }*/
        }
    }
    const trackInput = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    }
    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Enter item to be searched" onChange={trackInput}/>
                <button onClick={searchSpace} value={searchValue}>Search</button>
                <h4><p>{notFound}</p></h4>
                <div className="productsGold">
                {searchItem.map((searchValue, key) => <p>{searchValue}</p>)}
                </div>
            </div>
            <div className="product-view">
                {myData.products.map((data, key) => {
                    return (
                        <div className="products">
                            <p>Product Name: {data.productname}</p>
                            <p>Serial Number: {data.serialnumber}</p>
                            <p>Price: {data.price}</p>
                            <p>Category: {data.category}</p>
                            <p>Quantity: {data.quantity}</p>
                        </div>
                    );
                })}
            </div>
        </div>
        );
    };

export default ProductView;