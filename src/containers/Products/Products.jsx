import React, { useState, useEffect } from 'react';
import './Products.scss';
import BoticarioServices from '../../utils/services';
import { Button } from '@material-ui/core';


function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    function loadProducts() {
        BoticarioServices.products().then((res) => {
            setProducts(res);
        })
            .catch((error) => {
                return error;
            });
    }

    return (
        <section className="products">
            <p>Teste</p>
            {products.map((c) => (
                <>
                    <img alt="imagem" src={c.image} />
                    <p>{c.description}</p>
                </>
            ))}
            <Button onClick={() => console.log(products)}></Button>
        </section>
    );
}

export default Products;
