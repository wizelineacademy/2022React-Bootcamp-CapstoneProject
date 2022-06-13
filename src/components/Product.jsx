import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './products.styled';
import { formatPrice } from '../utils/helpers';
import { Loader } from './';

const Product = ({ product, activecat }) => {

	/* STATE OF LOADER */
	const [loader, setLoader] = useState(true);

	/* STATE OF CURRENT CLASS */
	const [currentClass, setCurrentClass] = useState(null);

	/* STATE OF CURRENT DATA FILTERED */
	const [availableProduct, setavAilableProduct] = useState(false);

	/* PRODUCT DESTRUCTURING */
	const {
		data:{
			category:{
				id,
				slug,
			},
			mainimage:{
				url,
				alt,
			},
			name,
			price,
		},
	} = product;

	/* USE EFFECT HOOK TO MEMORIZE THE VALUE OF CATEGROY ID */
	const cid = useMemo(() => {
    return id;
  }, [id]);

	/* USE EFFECT HOOK TO SWITCH THE ACTIVE CLASS */
	useEffect(() => {
		const switchStateClass = () => {
			let getChangeClass = activecat ? activecat.indexOf(cid) !== -1 ? 'active' : null : null;
			setCurrentClass(getChangeClass);
		}
		if(activecat !== undefined){
			switchStateClass();
		}
	}, [activecat, cid]);

	/* USE EFFECT HOOK TO FILTER THE DATA */
	useEffect(() => {
		const filterProductsBycatId = () => {
			var categoryarray = activecat,
			productcatid = cid,
			arrayfil = categoryarray.filter(item => productcatid.includes(item));

			if ( arrayfil.length >= 1 ) {
				setavAilableProduct(true);
			} else {
				setavAilableProduct(false);
			}
		}
		if(activecat !== undefined){
			filterProductsBycatId();
		}
	}, [activecat, cid]);

	/* USE EFFECT HOOK TO LOAD */
	useEffect(() => {
		setLoader(true);
		setTimeout(() => {
			setLoader(false);
		}, 2000);
	}, [availableProduct])


	/* PRODUCT COMPONENT */
	const RenderProduct = () => {
		return (
			<Wrapper
				className={ currentClass }
			>
				{ loader ?
					<div className="container">
						<Loader />
					</div>
					:
					<>
						<div className="container">
							<img
								src={ url } alt={ alt }
							/>
						</div>
						<div className='details'>
							<h5>
								{ name }
							</h5>
							<p>
								{ slug }
							</p>
						</div>
						<div className='counter'>
							{formatPrice(price)}
						</div>
					</>
				}
			</Wrapper>
		)
	}

	return (
		availableProduct || activecat === undefined ? <RenderProduct /> : null
	);
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};


export default Product;