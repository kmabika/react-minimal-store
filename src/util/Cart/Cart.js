export const setCartItemId = (product) => {
  let cartItemId = `${product.id}`;
  product.attributes.forEach((attribute) => {
    attribute.items.forEach((item) => {
      if (item.isSelected) {
        cartItemId = `${cartItemId}-${attribute.name}-${item.value}`.toLowerCase();
      }
    });
  });
  return cartItemId;
};

export const setDefaultAttributes = (product) => {
  const selectAllAttributes = product.attributes.every((attribute) => {
    const isSelected = attribute.items.find((item) => item.isSelected);
    return isSelected;
  });

  if (selectAllAttributes) return product;
  return {
    ...product,
    attributes: product.attributes.map((attribute) => ({
      ...attribute,
      items: attribute.items.map((item, index) => {
        if (index === 0) return { ...item, isSelected: true };
        return { ...item, isSelected: false };
      }),
    })),
  };
};
