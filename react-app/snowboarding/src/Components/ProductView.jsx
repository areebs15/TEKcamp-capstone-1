import React from 'react';
import myData from "../products.json"
import {useState} from 'react';
/*import Search from './Search';*/

function ProductView()
{
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setSearchItem] = useState([]);

    const searchSpace = (e) => {
        e.preventDefault();
        for (let i = 0; i < myData.products.length; i++) {
            const searchDataI = myData.products[i];
            const searchDataValues = Object.values(searchDataI);
            if (searchDataValues.includes(searchValue)) {
                console.log("i found this item" + searchDataValues);
                setSearchItem(searchDataValues);
            }
        }
        console.log(searchItem);
    }

    const trackInput = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    }

    return (
        <div>
            <div className="search">
                    <input type="text" placeholder="Enter item to be searched" onChange={trackInput}/>
                    <button onClick={searchSpace} value={searchValue}>Search</button>
                    <p>Found in search: {searchItem}</p>
            </div>
            <div className="product-view">
                {myData.products.map((data, key) => {
                    return (
                        <div key={key} className="products">
                            <p>{data.productname}</p>
                            <p>{data.serialnumber}</p>
                            <p>{data.price}</p>
                            <p>{data.category}</p>
                            <p>{data.quantity}</p>
                            <p>{data.productimage}</p>
                        </div>
                    );
                })}
            </div>
        </div>
        );
    };

export default ProductView;