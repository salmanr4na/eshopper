import React from "react";
import Product from "./Product";
export default function Shop() {
  return (
    <>
      <section className="ftco-section btn-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-10 order-md-last">
              <div className="row">
			  <Product
              image="assets/images/product-1.png" name="" bprice="899" fprice="599"/>
              <Product
              image="assets/images/product-2.png" bprice="3999" fprice="2199"/>
              <Product
              image="assets/images/product-3.png"  bprice="4299" fprice="2699"/>
              <Product
              image="assets/images/product-4.png" bprice="8499" fprice="5999"/>
			  <Product
              image="assets/images/product-5.png"  bprice="899" fprice="599"/>
              <Product
              image="assets/images/product-6.png" bprice="3999" fprice="2199"/>
              <Product
              image="assets/images/product-7.png"  bprice="4299" fprice="2699"/>
              <Product
              image="assets/images/product-8.png" bprice="8499" fprice="5999"/>
              </div>
              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li>
                        <a href="#">&lt;</a>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#">&gt;</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="sidebar">
                <div className="sidebar-box-2">
                  <h2 className="heading">Categories</h2>
                  <div className="fancy-collapse-panel">
                    <div
                      className="panel-group"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingOne"
                        >
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Maincategory
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                        >
                          <div className="panel-body">
                            <ul>
                              <li>
                                <button className="btn btn-light">All</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingTwo"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Subcategory
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                        >
                          <div className="panel-body">
                            <ul>
                              <li>
                                <button className="btn btn-light">All</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingThree"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Brand
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="panel-body">
                            <ul>
                              <li>
                                <button className="btn btn-light">All</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-box-2">
                  <h2 className="heading">Price Range</h2>
                  <form method="post" className="colorlib-form-2">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label for="guests">Price from:</label>
                          <div className="form-field">
                            <i className="icon icon-arrow-down3"></i>
                            <input
                              type="number"
                              name="min"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label for="guests">Price to:</label>
                          <div className="form-field">
                            <i className="icon icon-arrow-down3"></i>
                            <input
                              type="number"
                              name="max"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
