import React from 'react';
import {useState} from 'react';
import ShoppingCart from './ShoppingCart';

function ProductBody() {

    const [pValue, setPValue] = useState([]);
    const [pValueD, setPValueD] = useState(pValue);
    const [totPrice, setTotPrice] = useState(0);

    const handleAdd = (e) => {
        e.preventDefault();
        let Pcontent = e.target.textContent;
        let Parr = Pcontent.split(" ");
        let sum = totPrice === undefined ? 0 : totPrice;
        setPValue(pValue => [...pValue, Parr]);
        let itemVal = parseInt(Parr[3]);
        //------------------------------------
        setTotPrice(sum += itemVal);
    }
    const handleDelete = (e) => {
        e.preventDefault();
        let indexV = e.target.value;
        setPValueD(pValue.splice(indexV, 1));
        let itemPrice = parseInt(e.target.id);
        setTotPrice(totPrice - itemPrice);
    }
    
    return (   
            <section className="item">
            <div id="main-body">
                <div className="indivItem" id="item1">
                    <img src={process.env.PUBLIC_URL + "/Images/dummy.jpg"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Item-1 </p>
                        <p>Item-Description </p>
                        <p>Price: 20 </p>
                        <button>Add-To-Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item2">
                    <img src={process.env.PUBLIC_URL + "/Images/dummy.jpg"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Item-2 </p>
                        <p>Item-Description </p>
                        <p>Price: 30 </p>
                        <button>Add-To-Cart</button>
                    </form>
                </div>
            </div>
            <div id="shopping-container">
                <h2>Shopping Cart</h2>
                {
                pValue.map((t,i) => 
                <ShoppingCart keys={i} item={t[0]} price={t[3]} handleDelete={handleDelete} totPrice={totPrice}/>)
                }
                Total: ${totPrice}
            </div>
            </section>
        )
    }

export default ProductBody;