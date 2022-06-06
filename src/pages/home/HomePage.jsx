import React from 'react';
import Carrusel from '../../components/Carrusel/Carrusel';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Container, GlobalStyle } from '../../styles';

import data from '../../mocks/en-us/featured-products.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from '../../styles/styles.module.css';

const HomePage = () => {
    const { results: products } = data;
    return (
        <>
            <GlobalStyle />
            <Container container>
                <Header />
                <Carrusel />

                <h2>Featured Products</h2>
                <hr />
                <div className={styles.row}>

                    {
                        products.map(product => (
                            <div 
                                className={ `${styles['col-2']} , ${styles['col-sm-4']}` } 
                                key={product.id}
                            >
                                <ProductCard product={product} />
                            </div>

                        ))
                    }
                </div>

                <Footer />
            </Container>
        </>
    )
}

export default HomePage