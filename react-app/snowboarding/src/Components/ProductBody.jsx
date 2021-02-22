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
                <div className="indivItem" id="item2">
                    <img src={process.env.PUBLIC_URL + "/Images/Salomon.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Salomon </p>
                        <p>Powder </p>
                        <p>Price: 450.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item3">
                    <img src={process.env.PUBLIC_URL + "/Images/Lamar.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Lamar </p>
                        <p>Powder </p>
                        <p>Price: 250.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item4">
                    <img src={process.env.PUBLIC_URL + "/Images/Volcom.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Volcom </p>
                        <p>Powder </p>
                        <p>Price: 500.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item5">
                    <img src={process.env.PUBLIC_URL + "/Images/Jones.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Jones </p>
                        <p>Ice </p>
                        <p>Price: 620.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item6">
                    <img src={process.env.PUBLIC_URL + "/Images/Dakine.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Dakine </p>
                        <p>Powder </p>
                        <p>Price: 340.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item7">
                    <img src={process.env.PUBLIC_URL + "/Images/Neff.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Neff </p>
                        <p>Precision </p>
                        <p>Price: 200.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item8">
                    <img src={process.env.PUBLIC_URL + "/Images/CrabGrab.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">CrabGrab </p>
                        <p>Stunt </p>
                        <p>Price: 510.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item9">
                    <img src={process.env.PUBLIC_URL + "/Images/Dragon.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Dragon </p>
                        <p>Precision </p>
                        <p>Price: 260.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item10">
                    <img src={process.env.PUBLIC_URL + "/Images/SkullCandy.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">SkullCandy </p>
                        <p>Powder </p>
                        <p>Price: 240.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
                <div className="indivItem" id="item1">
                    <img src={process.env.PUBLIC_URL + "/Images/Burton.PNG"} alt="hello"/>
                    <form onSubmit={handleAdd}>
                        <p id="sB1" value="item1" className="title">Burton </p>
                        <p>Powder </p>
                        <p>Price: 300.00 </p>
                        <button>Add To Cart</button>
                    </form>
                </div>
            </div>
            <div id="shopping-container">
                <h2>Shopping Cart</h2>
                {
                pValue.map((t,i) => 
                <ShoppingCart keys={i} item={t[0]} price={t[3]} handleDelete={handleDelete} totPrice={totPrice}/>)
                }
                <h3>
                    <p>
                        Total: ${totPrice} <button>Checkout</button>
                    </p>
                </h3>
            </div>
            </section>
        )
    }

export default ProductBody;