import { Slider, Banners, GridProducts } from '../components'

const Home = ({ switchNavigation }) => {

	return (
		<section>
			<Slider/>
			<hr />
			<Banners />
			<hr />
			<GridProducts />
			<hr />
			<button onClick={
				() => switchNavigation("PLP")
				}
				className="btn"
			>View all products</button>
		</section>
	 );
}

export default Home;