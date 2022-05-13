import PropTypes from 'prop-types';
import { PureComponent } from "react";
import { connect } from 'react-redux';
import Category from "./Category.component";

export const mapStateToProps = (state) => ({
    availableCategories: state.CategoryReducer.categories,
    activeCategory: state.CategoryReducer.activeCategory,
});

export class CategoryContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { category: true };
    };

    static propTypes = {
        availableCategories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }

    containerProps() {
        const { availableCategories, activeCategory} = this.props;
        return {
            categories: availableCategories,
            activeCategory,
        }
    }
    render() {
        return (
            <Category {...this.containerProps()} />
        )
    }
}

export default connect(mapStateToProps)(CategoryContainer);