import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { CategoryWrap, StyledLink } from './styled';

class Category extends PureComponent {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    activeCategory: PropTypes.string.isRequired,
  };

  renderNavBarSkeleton() {
    return (
      <>
        <div className="block2 pulsate" style={{ marginRight: '10px' }}></div>
        <div className="block2 pulsate" style={{ marginRight: '10px' }}></div>
        <div className="block2 pulsate" style={{ marginRight: '10px' }}></div>
      </>
    );
  }

  renderNavbar() {
    const { categories, activeCategory } = this.props;
    return categories?.map((category, index) => {
      let isActive = false;
      const currentCategory = activeCategory;
      if (currentCategory && category.toLowerCase() === currentCategory.toLowerCase()) {
        isActive = true;
      }
      return (
        <StyledLink
          key={index}
          id={category}
          to={`/${category}`}
          aria-label={`${category} category`}
          isselected={isActive.toString()}
          exact>
          {category}
        </StyledLink>
      );
    });
  }

  render() {
    return (
      <CategoryWrap>
        {this.props.categories.length > 0 ? this.renderNavbar() : this.renderNavBarSkeleton()}
      </CategoryWrap>
    );
  }
}

export default Category;
