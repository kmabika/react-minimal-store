import { PureComponent } from "react";
import ProductAttribute from 'Component/ProductAttribute'



export class ProductAttributes extends PureComponent{


    renderProductAttribute(item, attributeData){
        const {inStock } = this.props;
        return(
            <ProductAttribute
            key={item.id}
            item={item}
            attributeData={attributeData}
            isAvailable={inStock}
            />
        )
    }
 
    renderAttributes(){
        const {attributes,inStock} = this.props;
    
        return Object.values(attributes).map((attribute) => {
            const {
                id,
                items,
                name,
                type
            } = attribute;
            const attributeData = {
                name: name, type: type
            }

            if (!inStock){
                return null;
            }
            return (
                <div key={id} style={{ display: 'flex', width : '50%' }}>
                    {items.map((item) => (
                        this.renderProductAttribute(item,attributeData)
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