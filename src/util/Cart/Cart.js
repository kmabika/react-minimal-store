export const setCartItemId = (product) => {
    let cartItemId = `${product.id}`;
    product.attributes.forEach(
        (attribute) => {
            attribute.items.forEach((item) => {
                if (item.isSelected) {
                    cartItemId = `${cartItemId}-${attribute.name}-${item.value}`.toLowerCase();
                }
            });
        },
    );
    return cartItemId;
};