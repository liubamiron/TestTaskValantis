
import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/apiRequests';
import Box from '@mui/material/Box';
import md5 from "md5";

export default function Products () {

    const [products, setProducts] = useState ([]);
    const [productsForSort, setProductsForSort] = useState([]);
    let [isLoading, setLoading] = useState(false);


    useEffect(() => {
            getProducts()
                .then((data) => {
                    console.log(data)
                    setProducts(data.result);
                    setProductsForSort(data);
                })
                .catch((err_data) => {
                    console.log("no data", err_data);
                })
                .finally(() => setLoading(false));
    }, []);

    console.log('products', products);

    const content = products.map((post, index) =>
        <div key={index}>{post}</div>
    );
    const stamp = new Date().toISOString().slice(0,10).replace(/-/g,"");
    const password = 'Valantis'

    const hash = md5(`${password}_${stamp }`);
    console.log('hash', hash, )
    return (
      <Box className={'box_class'}>
          <h1  style={{backgroundColor: 'lightgray'}}>All Products</h1>
        <div>
            {isLoading ? <div>Loading...</div> : <div>

                <div>{content}</div>

            </div>}
        </div>
      </Box>
    );
  };