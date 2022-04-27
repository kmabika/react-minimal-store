import { PureComponent } from "react";
import ProductAttribute from 'Component/ProductAttribute'



export class ProductAttributes extends PureComponent{


    renderProductAttribute(item,type){
        const {inStock } = this.props;
        return(
            <ProductAttribute
            key={item.id}
            item={item}
            isAvailable={inStock}
            type={type}
            />
        )
    }
 
    renderAttributes(){
        const {attributes,inStock} = this.props;
    
        return Object.values(attributes).map((attribute) => {
            const {
                id,
                items,
                type
            } = attribute;

            if (!inStock){
                return null;
            }
            return (
                <div key={id} style={{ display: 'flex', width : '50%' }}>
                    {items.map((item) => (
                        this.renderProductAttribute(item,type)
                    ))}
                </div>
            )
        })
    };

    render(){
        return(
            <div>
                {this.renderAttributes()}
            </div>
        )
    }
};

export default ProductAttributes;