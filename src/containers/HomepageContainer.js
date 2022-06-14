import React from 'react'
import Header from '../components/Header.js'
import ContentContainer from './ContentContainer.js'
import Footer from '../components/Footer.js'

function HomepageContainer({data}) {

    return (
        <div>
            <Header />
            <ContentContainer />
            <Footer />
        </div>
    )
}

export default HomepageContainer