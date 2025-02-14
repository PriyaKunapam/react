//  import { useDispatch, useSelector } from "react-redux";
// // import { addpurchaseDetails, clearCart, decreament, increament, remove } from "./Store";
// // import { useState } from "react";

// import { useState } from "react";
// import { addpurchaseDetails, clearCart, decreament, increament, remove } from "./Store";

// function Cart()
// {
//     let dispatch=useDispatch()
//     let Cartobjects=useSelector(state=>state.cart)

//     let cartitems=Cartobjects.map((item,index)=>(
//         <li key={index}>

//             {item.name}-{item.price}
//             <button onClick={()=>dispatch(increament(item))}> + </button>
//             <button onClick={()=>dispatch(decreament(item))}> - </button>
//                     Quantity:{item.quantity}
//             <button onClick={()=>dispatch(remove(item))}> Remove </button>
            
//         </li>
//     ))
//     //calculate the total price
//     let totalprice=Cartobjects.reduce((sum,item)=>sum+item.quantity*item.price,0);
//     //set the discount percentage
//     let[discountPercentage,setDiscountPercentage]=useState(0);
//     //calculate discount amount
//     let discountAmount=totalprice*discountPercentage/100;
//     let finalAmount=totalprice-discountAmount;
//     let[showDiscount,setShowDiscount]=useState(false);
//     let[cuponCode,setCuponcode]=useState('');
//     let [showCuponCode,setShowCuponCode]=useState(false);
//     let[cuponCodeDiscountPer,setcuponCodeDiscountPer]=useState(0);
//     let handlingCuponPer=()=>{
//         switch(cuponCode.toUpperCase()){
//             case "RATAN10" : setcuponCodeDiscountPer(10); 
//                              setShowCuponCode(true);
//             break;
//             case "RATAN20" : setcuponCodeDiscountPer(20); 
//                              setShowCuponCode(true);
//             break;
//             case "RATAN30" : setcuponCodeDiscountPer(30); 
//                              setShowCuponCode(true);
//             break;
//             case "RATAN40" : setcuponCodeDiscountPer(40); 
//                              setShowCuponCode(true);
//             break;
//             default :alert('Invalid cupon code');
//             setcuponCodeDiscountPer(0);
//         }
//     };
//     let cuponDiscountAmount=totalprice * cuponCodeDiscountPer/100;
//     let handleCompletePurchase=()=>{
//     const purchaseDate=new Date().toLocaleDateString();
//     let purchaseDetails={
//                           date:purchaseDate,
//                           items:[...Cartobjects],
//                           totalprice:totalprice
//     }
//     dispatch(clearCart());
//     dispatch(addpurchaseDetails(purchaseDetails));
//     }
//     return(
//         <>
//         {
//             Cartobjects.length>0?
//             <div>
//         <h1 style={{color:'red'}}>This is cart.jsx file</h1>
//         <ul>{ cartitems}</ul>
//         <p>Your Total Price:{totalprice.toFixed(2)}</p>
 
//         { showDiscount &&
//             <div>
//                 <p style={{color:'green',fontFamily:'initial'}}>Your Discount Applied:{discountPercentage}%</p>
//                 <p style={{color:'red',fontFamily:'-moz-initial'}}>Your Discount Amount:{discountAmount.toFixed(2)}</p>
//             </div>
//         } 
//                 <p>Your Net Amount to Pay:{finalAmount.toFixed(2)}</p>  
//          <button onClick={()=>{setDiscountPercentage(10),setShowDiscount(true)}}>Apply 10% discount</button>
//          <button onClick={()=>{setDiscountPercentage(20),setShowDiscount(true)}}>Apply 20% discount</button>
//          <button onClick={()=>{setDiscountPercentage(30),setShowDiscount(true)}}>Apply 30% discount</button><br/>&emsp;&emsp;
//          <input type="text" value={cuponCode} onChange={(e)=>setCuponcode(e.target.value)} placeholder="Enter Cupon Code" /><br/>&emsp;&emsp;
//          <button onClick={()=> handlingCuponPer()}>Apply Cupon</button>&emsp;&emsp;<br></br>
//        {
//         showCuponCode&&
//         <div>
//             <p>Your Cupon Code Applied:{cuponCode}</p>
//             <p>Your Cupon Code Discount:{cuponDiscountAmount}</p>
//             </div>
//        }
//        <button onClick={handleCompletePurchase}> Complete Purchase</button>
//         </div>
//         :
//         <h1 className='text-danger fs-5 p-5 fst-italic fst-bold'>Your Cart is Empty</h1>
// }
//         </>
//    )
// }
//     export default Cart;

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPurchaseDetails, clearCart, decreament, increament, remove } from "./Store";
// import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
    const dispatch = useDispatch();
    const Cartobjects = useSelector(state => state.cart);

    // Calculate total price
    let totalprice = Cartobjects.reduce((sum, item) => sum + item.quantity * item.price, 0);

    // State for discounts
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const discountAmount = (totalprice * discountPercentage) / 100;
    const finalAmount = totalprice - discountAmount;

    // Coupon Code State
    const [cuponCode, setCuponcode] = useState("");
    const [showCuponCode, setShowCuponCode] = useState(false);
    const [cuponCodeDiscountPer, setCuponCodeDiscountPer] = useState(0);

    const handleCuponPer = () => {
        switch (cuponCode.toUpperCase()) {
            case "RATAN10":
                setCuponCodeDiscountPer(10);
                setShowCuponCode(true);
                break;
            case "RATAN20":
                setCuponCodeDiscountPer(20);
                setShowCuponCode(true);
                break;
            case "RATAN30":
                setCuponCodeDiscountPer(30);
                setShowCuponCode(true);
                break;
            case "RATAN40":
                setCuponCodeDiscountPer(40);
                setShowCuponCode(true);
                break;
            default:
                alert("Invalid coupon code");
                setCuponCodeDiscountPer(0);
        }
    };

    const cuponDiscountAmount = (totalprice * cuponCodeDiscountPer) / 100;

    const handleCompletePurchase = () => {
        const purchaseDate = new Date().toLocaleDateString();
        const purchaseDetails = {
            date: purchaseDate,
            items: [...Cartobjects],
            totalprice: totalprice
        };
        dispatch(clearCart());
        dispatch(addPurchaseDetails(purchaseDetails));
    };

    return (
        <div className="container mt-5">
            {Cartobjects.length > 0 ? (
                <>
                    <h1 className="text-danger text-center p-3 fw-bold">Shopping Cart</h1>
                    <div className="row">
                        {Cartobjects.map((item, index) => (
                            <div key={index} className="col-md-6 mb-4">
                                <div className="card shadow-lg">
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-uppercase">{item.name}</h5>
                                        <p className="card-text fw-bold text-danger">₹{item.price.toFixed(2)}</p>
                                        <div className="d-flex justify-content-center align-items-center gap-2">
                                            <button className="btn btn-success" onClick={() => dispatch(increament(item))}>
                                                +
                                            </button>
                                            <span className="fw-bold">Qty: {item.quantity}</span>
                                            <button className="btn btn-warning" onClick={() => dispatch(decreament(item))}>
                                                -
                                            </button>
                                            <button className="btn btn-danger" onClick={() => dispatch(remove(item))}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pricing Details */}
                    <div className="mt-4">
                        <p className="fw-bold fs-4">Total Price: ₹{totalprice.toFixed(2)}</p>
                        {discountPercentage > 0 && (
                            <div className="alert alert-success">
                                <p>Discount Applied: {discountPercentage}%</p>
                                <p>Discount Amount: ₹{discountAmount.toFixed(2)}</p>
                            </div>
                        )}
                        <p className="fw-bold fs-4">Final Amount: ₹{finalAmount.toFixed(2)}</p>
                    </div>

                    {/* Discount Buttons */}
                    <div className="mt-3">
                        <button className="btn btn-info me-2" onClick={() => setDiscountPercentage(10)}>
                            Apply 10% Discount
                        </button>
                        <button className="btn btn-info me-2" onClick={() => setDiscountPercentage(20)}>
                            Apply 20% Discount
                        </button>
                        <button className="btn btn-info" onClick={() => setDiscountPercentage(30)}>
                            Apply 30% Discount
                        </button>
                    </div>

                    {/* Coupon Code Section */}
                    <div className="mt-4">
                        <input
                            type="text"
                            className="form-control w-50 mx-auto"
                            value={cuponCode}
                            onChange={(e) => setCuponcode(e.target.value)}
                            placeholder="Enter Coupon Code"
                        />
                        <button className="btn btn-primary mt-2" onClick={handleCuponPer}>
                            Apply Coupon
                        </button>
                    </div>

                    {showCuponCode && (
                        <div className="alert alert-warning mt-3">
                            <p>Coupon Code Applied: {cuponCode}</p>
                            <p>Coupon Discount: ₹{cuponDiscountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    {/* Complete Purchase Button */}
                    <button className="btn btn-success mt-3 w-100 fw-bold" onClick={handleCompletePurchase}>
                        Complete Purchase 🛒
                    </button>
                </>
            ) : (
                <h1 className="text-danger fs-5 p-5 fst-italic fw-bold text-center">Your Cart is Empty</h1>
            )}
        </div>
    );
}

export default Cart;
