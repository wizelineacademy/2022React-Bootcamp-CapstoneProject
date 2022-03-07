import styled from "styled-components"
import FeaturedBanners from '../../../mocks/en-us/featured-banners.json';

const BannerStyled = styled.img`
    width: 100%;
    box-sizing: border-box;
`
export const Banner = ({n}) => {
    const imageSource = FeaturedBanners.results[n].data.main_image.url;
    const imageAlt = FeaturedBanners.results[n].data.main_image.alt;
    return (
        <BannerStyled src={imageSource} alt={imageAlt}/>
    )
}