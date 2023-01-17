import "./App.scss";
import Home from "./pages/home";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
	const { data, isLoading } = useFeaturedBanners();
	console.log(data, isLoading);

	return (
		<div className='App'>
			<Home />
		</div>
	);
}

export default App;
