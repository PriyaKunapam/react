// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./Store";
// import { useState } from "react";

// function Nonveg() {
//     const dispatch = useDispatch();
//     const nonvegItems = useSelector(state => state.products.Nonveg);

//     // State for filters
//     const [filterBelow100, setFilterBelow100] = useState(false);
//     const [filterAbove100, setFilterAbove100] = useState(false);

//     // Filter items based on checkbox selection
//     const filteredItems = nonvegItems.filter(item => {
//         if (filterBelow100 && item.price >= 100) return false;
//         if (filterAbove100 && item.price < 100) return false;
//         return true;
//     });

//     const finalItems = filteredItems.map((item, index) => (
//         <li key={index} className="nonveg-card">
//             <span>{item.name} - ${item.price}</span>
//             <img src={item.image} height="120px" width="120px"/>
//             <button className="add-cart-btn" onClick={() => dispatch(addToCart(item))}>
//             Add to Cart
//             </button>
//         </li>
//     ));

//     return (
//         <div className="nonveg-container">
//             <h1>Welcome to the Non-Veg Items Page</h1>

//             {/* Filter Section */}
//             <div className="filter-section">
//                 <label>
//                     <input 
//                         type="checkbox" 
//                         checked={filterBelow100} 
//                         onChange={() => setFilterBelow100(!filterBelow100)} 
//                     />
//                     Below $100
//                 </label>
//                 <label>
//                     <input 
//                         type="checkbox" 
//                         checked={filterAbove100} 
//                         onChange={() => setFilterAbove100(!filterAbove100)} 
//                     />
//                     Above $100
//                 </label>
//             </div>

//             {/* Display Filtered Items */}
//             <ol className="nonveg-list">{finalItems}</ol>
//         </div>
//     );
// }

// export default Nonveg;



import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nonveg() {
    const dispatch = useDispatch();
    const nonvegItems = useSelector(state => state.products.Nonveg) ?? [];

    // State for filters
    const [filterBelow100, setFilterBelow100] = useState(false);
    const [filterAbove100, setFilterAbove100] = useState(false);

    // Filter items based on checkbox selection
    const filteredItems = nonvegItems.filter(item => {
        if (filterBelow100 && item.price >= 100) return false;
        if (filterAbove100 && item.price < 100) return false;
        return true;
    });

    const finalItems = filteredItems.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
                <img src={item.image} className="card-img-top" height="200px" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                    <button 
                        className="btn btn-danger"
                        onClick={() => dispatch(addToCart(item))}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Welcome to the Non-Veg Items Page</h1>

            {/* Filter Section */}
            <div className="d-flex justify-content-center mb-4">
                <div className="form-check form-check-inline">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        checked={filterBelow100} 
                        onChange={() => setFilterBelow100(!filterBelow100)} 
                    />
                    <label className="form-check-label">Below $100</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        checked={filterAbove100} 
                        onChange={() => setFilterAbove100(!filterAbove100)} 
                    />
                    <label className="form-check-label">Above $100</label>
                </div>
            </div>

            {/* Display Non-Veg Items */}
            <div className="row">
                {filteredItems.length > 0 ? finalItems : <p className="text-center col-12">No Non-Veg Items Available</p>}
            </div>
        </div>
    );
}

export default Nonveg;
