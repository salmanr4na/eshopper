import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
    <section className="ftco-section ftco-no-pt ftco-no-pb mt-5">
			<div className="container">
				<div className="row no-gutters ftco-services">
          <div className="col-lg-4 text-center d-flex align-self-stretch ">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-bag"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Free Shipping</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>      
          </div>
          <div className="col-lg-4 text-center d-flex align-self-stretch ">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-customer-service"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Support Customer</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>    
          </div>
          <div className="col-lg-4 text-center d-flex align-self-stretch ">
            <div className="media block-6 services p-4 py-md-5">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
            		<span className="flaticon-payment-security"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Secure Payments</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>      
          </div>
        </div>
			</div>
		</section>

    <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
			<div className="container">
				
	          <div className="heading-section-bold mb-4 mt-md-5">
	          	<div className="ml-md-0">
		            <h2 className="mb-4">Stablished Sinced 1975</h2>
	            </div>
	          </div>
	          <div className="pb-md-5 pb-4">
							<p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
							<p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
							<p><Link to="/shop/All" className="btn btn-primary">Shop now</Link></p>
						</div>
					</div>
			
		</section>

    <section className="ftco-section testimony-section">
      <div className="container">
      
        		<div className="services-flow row">
        			<div className="services-2 p-4 d-flex col-xl-3 col-lg-3 col-md-6 col-12">
        				<div className="icon">
        					<span className="flaticon-bag"></span>
        				</div>
        				<div className="text">
	        				<h3>Free Shipping</h3>
	        				<p className="mb-0">Separated they live in. A small river named Duden flows</p>
        				</div>
        			</div>
        			<div className="services-2 p-4 d-flex col-xl-3 col-lg-3 col-md-6 col-12">
        				<div className="icon">
        					<span className="flaticon-heart-box"></span>
        				</div>
        				<div className="text">
	        				<h3>Valuable Gifts</h3>
	        				<p className="mb-0">Separated they live in. A small river named Duden flows</p>
	        			</div>
        			</div>
        			<div className="services-2 p-4 d-flex col-xl-3 col-lg-3 col-md-6 col-12 ">
        				<div className="icon">
        					<span className="flaticon-payment-security"></span>
        				</div>
        				<div className="text">
	        				<h3>All Day Support</h3>
	        				<p className="mb-0">Separated they live in. A small river named Duden flows</p>
	        			</div>
        			</div>
        			<div className="services-2 p-4 d-flex col-xl-3 col-lg-3 col-md-6 col-12">
        				<div className="icon">
        					<span className="flaticon-customer-service"></span>
        				</div>
        				<div className="text">
	        				<h3>All Day Support</h3>
	        				<p className="mb-0">Separated they live in. A small river named Duden flows</p>
	        			</div>
        			</div>
        		</div>
        	</div>
          <div className="col-lg-7">
          	
           
        
      </div>
    </section>

    </>
  )
}
