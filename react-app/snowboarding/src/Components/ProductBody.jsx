import React from 'react';
import {useState} from 'react';

function ProductBody() {

    const [pValue, setPValue] = useState([]);
    const [totPrice, setTotPrice] = useState(0);
    const item1Price = 20.00;

    const handleAdd = (e) => {
        e.preventDefault();
        let Pcontent = e.target.textContent;
        let Parr = Pcontent.split(" ");
        let sum = totPrice === undefined ? 0 : totPrice;
        setPValue(pValue => [...pValue, Parr]);
        let itemVal = parseInt(Parr[3]);
        setTotPrice(sum += itemVal);
    }
    const handleDelete = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    /*const cartTotal = () => {
        console.log(Parr);
        setTotPrice(item1Price);
    }*/
    return (   
            <section className="item">
            <div id="main-body">
                <div className="indivItem" id="item1">
                    <img src={process.env.PUBLIC_URL + "/Images/dummy.jpg"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1">Item-1 </p>
                        <p>Item-Description </p>
                        <p>Price: 20 </p>
                        <button>Add-To-Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item2">
                    <img src={process.env.PUBLIC_URL + "/Images/dummy.jpg"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1">Item-2 </p>
                        <p>Item-Description </p>
                        <p>Price: 30 </p>
                        <button>Add-To-Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item2">
                    <img src={process.env.PUBLIC_URL + "/Images/dummy.jpg"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1">Item-2 </p>
                        <p>Burton </p>
                        <p>Price: 100 </p>
                        <button>Add-To-Cart</button>
                    </form>
                </div>
            </div>
            <div id="shopping-container">
                <h2>Shopping Cart</h2>
                {pValue.map((t,i) => <p>{i+1} item: {t[0]} Price: ${t[3]} <button onClick={handleDelete}>Delete</button></p>)}
                Total: ${totPrice}
            </div>
            </section>
        )
    }

export default ProductBody;