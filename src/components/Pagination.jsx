import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Wrapper } from "./pagination.styled";

const Pagination = () => {
	return (
		<Wrapper>
			<a
				href="#/"
				className="prev"
			>
				<BsFillArrowLeftCircleFill />
			</a>
			<ul>
				<li><a href="#/" className='active'><span>1</span></a></li>
				<li><a href="#/"><span>2</span></a></li>
				<li><a href="#/"><span>3</span></a></li>
				<li><a href="#/"><span>4</span></a></li>
			</ul>
			<a
				href="#/"
				className="next"
			>
				<BsFillArrowRightCircleFill />
			</a>
		</Wrapper>
	)
}

export default Pagination