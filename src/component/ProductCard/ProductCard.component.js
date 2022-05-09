import PropTypes from 'prop-types';
import { PureComponent } from "react";
import {
    ProductContent,
    ProductImage,
    ProductLink,
    ProductThumb,
    ProductCardWrapper,
    ProductCartButton,
    ProductAttributesWrapper,
    ProductImageOutOfStockText,
} from "./styled";

import Headline from "Component/Headline";
import ProductAttributes from 'Component/ProductAttributes'
import Paragraph from 'Component/Paragraph'
import CartSvg from "Images/CartSvg"
import { PriceItemType } from 'Type/Price.type';
import { AttributesType } from 'Type/ProductList.type';
import { PricesItem } from 'Type/Price.type';

export class ProductCard extends PureComponent {

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PriceItemType.isRequired,
        prices: PricesItem.isRequired,
        attributes: AttributesType.isRequired,
        inStock: PropTypes.bool.isRequired,
        image: PropTypes.string.isRequired,
        handleAddToCart: PropTypes.func.isRequired,
    };

    renderProductCardImage() {
        const { inStock, image, id } = this.props;
        return (
            <ProductThumb>
                <ProductImage
                    src={image}
                    alt={id}
                    width={354}
                    height={330}
                />
                {!inStock && <ProductImageOutOfStockText>OUT OF STOCK</ProductImageOutOfStockText>}
            </ProductThumb>
        )
    };

    renderProductContent() {
        const { name,category,price, attributes, inStock, brand } = this.props;

        return (
            <ProductContent>
                <ProductLink to={`/${category}/${this.props.id}`}>
                    {this.renderProductCardImage()}
                    <Headline typeHeadline="h5" marginTop={1.5} marginBottom={0.5} fontWeight={300}>{`${brand} ${name}`}</Headline>
                </ProductLink>
                <Paragraph fontWeight={500} children={`${price.currency.symbol} ${price.amount}`} />
                <ProductAttributesWrapper>
                    <ProductAttributes attributes={attributes} inStock={inStock} />
                </ProductAttributesWrapper>
            </ProductContent>
        )
    };

    renderAddToCart() {
        const { handleAddToCart, id, name, image, prices, attributes } = this.props;
        const productCartInfo = { id: id, name: name, image: image, prices: prices, attributes: attributes };
        return (
            <ProductCartButton onClick={() => handleAddToCart(productCartInfo)}>
                <CartSvg />
            </ProductCartButton>
        );
    };

    renderProductCard() {
        return (
            <>
                {this.renderProductContent()}
            </>
        )
    }

    render() {
        const { inStock } = this.props;
        return (
            <ProductCardWrapper inStock={this.props.inStock}>
                {this.renderProductCard()}
                {inStock && this.renderAddToCart()}
            </ProductCardWrapper>
        )
    }
};

export default ProductCard