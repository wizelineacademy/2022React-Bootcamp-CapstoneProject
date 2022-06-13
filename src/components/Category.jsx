import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const Category = ({ category, switchActiveCat, activecat }) => {

	/* STATE OF CURRENT CLASS */
	const [currentClass, setCurrentClass] = useState(null);

	/* CATEGORIES DESTRUCTURING */
	const {
		id,
		data:{
			name,
		},
	} = category;

	/* USE EFFECT HOOK TO MEMORIZE THE VALUE OF CATEGROY ID */
	const cid = useMemo(() => {
    return id;
  }, [id]);

	/* USE EFFECT HOOK TO SWITCH THE ACTIVE CLASS */
	useEffect(() => {
		const changeStateClass = () => {
			let getChangeClass = activecat ? activecat.indexOf(cid) !== -1 ? 'active' : null : null;
			setCurrentClass(getChangeClass);
		}
		changeStateClass();
	}, [activecat, cid]);

	return (
		<>
			<li className={ currentClass }>
				<a href='#/'
					onClick={ ev => {
						ev.preventDefault();
						switchActiveCat(id);
					}}
					id={ id }
					className={ activecat.indexOf(id) !== -1 ? 'active' : null }
				>{ name }</a>
			</li>
		</>
	 );
}

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;