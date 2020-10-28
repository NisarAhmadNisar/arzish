import React, { Component } from "react";
import Product from "../Product/Product";
import Title from "../ReusableComponents/Title/Title";
import { ProductConsumer } from "../../contextapi";
import Pagination from "../Pagination/pagination";

export default class ProductList extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          let filtered = value.products.filter(product => {
            return (
              product.title
                .toLowerCase()
                .indexOf(value.search.toLowerCase()) !== -1
            );
          });
          if (!value.search) {
            return (
              <React.Fragment>
                <div className="py-5">
                  <div className="container">
                    <div className="form_group">
                      <input
                        style={{
                          width: "92%",
                          marginLeft: "1.85rem",
                          marginTop: "1rem"
                        }}
                        id="search"
                        className="form_input"
                        type="text"
                        placeholder="Search"
                        value={value.search}
                        onChange={value.updateSearch}
                      />
                    </div>

                    <div className="row">
                      {value.currentProducts.map(product => {
                        return (
                          <Product
                            key={product.id}
                            product={product}
                            img={product.img}
                            products={value.products}
                          />
                        );
                      })}
                    </div>
                    <Pagination
                      productsPerPage={value.productsPerPage}
                      totalProducts={value.products.length}
                      paginate={value.paginate}
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <div className="py-5">
                  <div className="container">
                    <div className="form_group">
                      <input
                        style={{
                          width: "92%",
                          marginLeft: "1.85rem",
                          marginTop: "1rem"
                        }}
                        id="search"
                        className="form_input"
                        type="text"
                        placeholder="Search"
                        value={value.search}
                        onChange={value.updateSearch}
                      />
                    </div>

                    <div className="row">
                      {filtered.map(product => {
                        return (
                          <Product
                            key={product.id}
                            product={product}
                            img={product.img}
                            products={value.products}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
