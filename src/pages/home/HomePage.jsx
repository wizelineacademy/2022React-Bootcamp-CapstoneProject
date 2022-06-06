import React from 'react';
import { Carrusel, ProductCard, Slider } from '../../components';

import styles from '../../styles/styles.module.css';
import data from '../../mocks/en-us/featured-products.json';

const HomePage = () => {
    const { results } = data;

    const products = results.map(product => (
        <div
            className={`${styles['col-2']} , ${styles['col-sm-4']}`}
            key={product.id}
        >
            <ProductCard product={product} />
        </div>
    ));

    return (
        <>
            <Carrusel />
            <Slider />
            <h2>Featured Products</h2>
            <hr />
            <div className={styles.row}>
                { products }
            </div>
        </>
    )
}

export default HomePage