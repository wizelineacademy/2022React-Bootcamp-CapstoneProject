import PropTypes from 'prop-types';
import SidebarLink from '../../../styles/SidebarLink.styled';
const SidebarCategory = ({ handleCategoryClick, category, active }) => {
    return (
        <SidebarLink
            active = {active}
            id={category.id}
            key={category.id + 'inner'}
            onClick={handleCategoryClick}>
            {category?.data.name}
        </SidebarLink>
    );
};

SidebarCategory.propTypes = {
    category: PropTypes.object.isRequired,
};

export default SidebarCategory;
