import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
    const { id } = useParams();
    const { search } = useLocation();
    const [searchParms] = useSearchParams();

    const productId = id;
    const qty = search ? Number(search.split("=")[1]) : 1;
    console.log({ productId, qty, qtyParam: Number(searchParms.get("qty")) });
  
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
        dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    
    return (
        <div>
        <h1>Cart Screen</h1>
        <p>
            ADD TO CART : ProductID: {productId} Qty: {qty}
        </p>
        </div>
    );
}