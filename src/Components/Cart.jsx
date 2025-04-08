import React from 'react'
import { Link } from 'react-router-dom'
export default function Cart() {
  return (
    <>
    <section className="ftco-section ftco-cart">
			<div className="container">
				<div className="row">
    			<div className="col-md-12 ">
    				<div className="cart-list">
	    				<table className="table">
						    <thead className="thead-primary">
						      <tr className="text-center">
						        <th>&nbsp;</th>
						        <th>&nbsp;</th>
						        <th>Product</th>
						        <th>Price</th>
						        <th>Quantity</th>
						        <th>Total</th>
						      </tr>
						    </thead>
						    <tbody>
						      <tr className="text-center">
						        <td className="product-remove"><Link to="#"><span className="ion-ios-close"></span></Link></td>
						        
						        <td className="image-prod"><div className="img" style={{backgroundImage:"url('assets/images/product-3.jpG')"}}></div></td>
						        
						        <td className="product-name">
						        	<h3>Nike Free RN 2019 iD</h3>
						        	<p>Far far away, behind the word mountains, far from the countries</p>
						        </td>
						        
						        <td className="price">$4.90</td>
						        
						        <td className="quantity">
						        	<div className="input-group mb-3">
					             	<input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100"/>
					          	</div>
					          </td>
						        
						        <td className="total">$4.90</td>
						      </tr>

						      <tr className="text-center">
						        <td className="product-remove"><Link to="#"><span className="ion-ios-close"></span></Link></td>
						        
						        <td className="image-prod"><div className="img" style={{backgroundImage:"Url('assets/images/product-4.jpG')"}}></div></td>
						        
						        <td className="product-name">
						        	<h3>Nike Free RN 2019 iD</h3>
						        	<p>Far far away, behind the word mountains, far from the countries</p>
						        </td>
						        
						        <td className="price">$15.70</td>
						        
						        <td className="quantity">
						        	<div className="input-group mb-3">
					             	<input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100"/>
					          	</div>
					          </td>
						        
						        <td className="total">$15.70</td>
						      </tr>
						    </tbody>
						  </table>
					  </div>
    			</div>
    		</div>
    		<div className="row justify-content-start">
    			<div className="col col-lg-5 col-md-6 mt-5 cart-wrap ">
    				<div className="cart-total mb-3">
    					<h3>Cart Totals</h3>
    					<p className="d-flex">
    						<span>Subtotal</span>
    						<span>$20.60</span>
    					</p>
    					<p className="d-flex">
    						<span>Delivery</span>
    						<span>$0.00</span>
    					</p>
    					<p className="d-flex">
    						<span>Discount</span>
    						<span>$3.00</span>
    					</p>
    					<hr></hr>
    					<p className="d-flex total-price">
    						<span>Total</span>
    						<span>$17.60</span>
    					</p>
    				</div>
    				<p className="text-center"><Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
    			</div>
    		</div>
			</div>
		</section>
		

    </>
  )
}
