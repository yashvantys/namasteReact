import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './ItemCard'
import { clearcart } from '../utils/cartSlice'
const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)
    const handleClearCart = () => {
        dispatch(clearcart())
    }
    return (
        <div className='text-center p-2 m-2'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div className='w-6/12 m-auto'>
                {cartItems?.length > 0 ? <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart} >Clear Cart</button> : ""}
                {cartItems.length === 0 ? <h1>Your cart is empty, Please add items in your cart</h1> : ""}
                <ItemCard data={cartItems} />
            </div>
        </div>
    )
}

export default Cart