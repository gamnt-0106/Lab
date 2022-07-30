import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
  const {cart, total} = useSelector(store => store)

  const dispatch = useDispatch()

  const upCount = (item) => {
    dispatch({
      type: "cart/up_count",
      payload: item
    })
  }

  const downCount = (item) => {
    dispatch({
      type: "cart/down_count",
      payload: item
    })
  }

  return (
    <div className='cart-container mt-[40px]'>
      <h3>Cart</h3>
      {cart?.map(item => (
        <div className="cart-item">
          <h4 className="min-w-[400px]">{item.name}</h4>
          <img style={{width: "20%",height: "20%"}} src={item.image} alt="" />
          <div className="flex justify-center w-1/5">
          <button onClick={() => downCount(item)}>-</button>
            <input value={item?.count ? item?.count : 1} className="mx-2 text-center w-12" type="text" defaultValue="1"/>
            
            <button onClick={() => upCount(item)}>+</button>
          </div>
          <p>{total}</p>

        </div>
      ))}
      <div className="total">
        <div>Total</div>
        <h2>{total}</h2>
      </div>
    </div>
  )
}

export default Cart