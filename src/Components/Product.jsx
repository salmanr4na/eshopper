import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {
  return (
    <>
    <div className="col-sm-12 col-md-6 col-lg-3  d-flex">
    <div className="product d-flex flex-column ">
                    <Link to="#" className="img-prod">
                      <img
                        className="img-fluid"
                        src={props.image}
                        alt="img"
                        style={{ height: "300px", width: "400px" }}
                      />
                    </Link>
                    <div className="text py-3 pb-4 px-3">
                      <h3>
                        <Link to="#">{props.name}</Link>
                      </h3>
                      <div className="pricing">
                        <p className="price">
                          <span className="mr-2 price-dc">&#8377;{props.bprice}</span>
                          <span className="price-sale">&#8377;{props.fprice}</span>
                        </p>
                      </div>
                      <p className="bottom-area d-flex px-3">
                        <Link to="#" className="add-to-cart text-center py-2 mr-1">
                          <span>
                            Add to cart <i className="ion-ios-add ml-1"></i>
                          </span>
                        </Link>
                        <Link to="#" className="buy-now text-center py-2">
                          Buy now
                          <span>
                            <i className="ion-ios-cart ml-1"></i>
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                  </div>
    </>
  )
}

export default Product