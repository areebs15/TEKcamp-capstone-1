import React from 'react';
import myData from "../products.json"
import {useState} from 'react';
/*import Search from './Search';*/

function ProductView()
{
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setSearchItem] = useState();

    const searchSpace = (e) => {
        setSearchValue(e.target.value);
        for (let i = 0; i < myData.products.length; i++) {
            const searchDataI = myData.products[i];
            const searchDataValues = Object.values(searchDataI);
            if (searchDataValues.includes(searchValue)) {
                console.log(searchDataValues);
                setSearchItem(searchDataValues);
            } else {
                setSearchItem("Not found");
            }
            //console.log(searchDataValues);
        }
        //console.log(searchData);
        
        //console.log(searchDataValues);
        //setResult(words.filter(word => word));
        //console.log(myData.products);
    }
    return (
        <div className="product-view">
            <div className="products">
                <input type="text" placeholder="Enter item to be searched" onChange={searchSpace} />
                <p>Found in search: {searchItem}</p>
            </div>
                {myData.products.map((data, key) => {
                    return (
                        <div key={key} className="products">
                            <p>{data.productname}</p>
                            <p>{data.serialnumber}</p>
                            <p>{data.price}</p>
                            <p>{data.manufacturer}</p>
                            <p>{data.category}</p>
                            <p>{data.quantity}</p>
                        </div>
                    );
                })}
            </div>
        );
    };

export default ProductView;