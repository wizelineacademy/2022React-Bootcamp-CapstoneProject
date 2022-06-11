import PropTypes from 'prop-types';
import SidebarLink from '../../styles/SidebarLink.styled';
import SidebarWrapper from '../../styles/SidebarWrapper.styled';
import SidebarCategory from './SidebarCategory/SidebarCategory';

const Sidebar = ({
    categories,
    activeCategoryFilters,
    handleCategoryClick,
    handleClearFiltersClick,
}) => {
    return (
        <SidebarWrapper>
            {categories?.results.map((category) => {
                return (
                    <SidebarCategory
                        active={activeCategoryFilters.includes(category.id)}
                        key={category.id}
                        handleCategoryClick={handleCategoryClick}
                        category={category}
                    />
                );
            })}
            <SidebarLink
                id="clearFilters"
                clear={true}
                key="clearFilters"
                onClick={handleClearFiltersClick}>
                Clear filters
            </SidebarLink>
        </SidebarWrapper>
    );
};

Sidebar.propTypes = {
    categories: PropTypes.object.isRequired,
};
export default Sidebar;
