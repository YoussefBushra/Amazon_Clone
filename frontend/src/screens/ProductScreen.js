import React, { useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../actions/productActions";
import { useNavigate } from "react-router-dom";


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [qty, setQty] = useState(1);
    //console.log(id);
    const productId = id;
    const productDetails = useSelector((state) => state.productDetails);
    //console.log("222");
    const {loading, error, product} = productDetails;
    useEffect(()=> {
        dispatch(detailsProduct(productId));
        //console.log("111");
    }, [dispatch, productId])

    const history = useNavigate();
    const addToCartHandler = () => {
        history(`/cart/${productId}?qty=${qty}`);
    };

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ): (
                <div>
            <Link to="/">Back to Results</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li><h1>{product.name}</h1></li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}>
                            </Rating>
                        </li>
                        <li>Price: ${product.price}</li>
                        <li>description: <p>{product.description}</p></li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? <span className="success">In Stock</span>:
                                        <span className="danger">Unavailable</span>}
                                    </div>
                                </div>
                            </li>
                            {product.countInStock > 0 && (
                            <>
                            <li>
                                <div className="row">
                                <div>Qty</div>
                                <div>
                                    <select
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    >
                                    {[...Array(product.countInStock).keys()].map(
                                        (x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                        )
                                    )}
                                    </select>
                                </div>
                                </div>
                            </li>
                            <li>
                                <button
                                onClick={addToCartHandler}
                                className="primary block"
                                >
                                Add to Cart
                                </button>
                            </li>
                            </>
                        )}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        )}
        </div>
        
    );
}