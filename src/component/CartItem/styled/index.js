import styled,{css} from 'styled-components';

export const CartItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 41px;
`;

export const CartItemContentWrapper = styled.div`
    text-align: left;
    width: 136px;
    margin-right: 18px;
`;

export const CartItemAttributesWrapper = styled.div`
`;

export const CartItemProductNameWrapper = styled.div`
font-weight: 600;
font-size: 30px;
line-height: 27px;
margin: 0px 0px 16px;
`;

export const CartItemProductPriceWrapper= styled.div`
font-weight: 400;
font-size: 30px;
line-height: 27px;
margin: 0px 0px 12px;
`;

export const AttributesItemsWrapper = styled.div`
    display: flex;
    margin-top: 5px;
`;

export const CartItemAttributeBtn = styled.button`
    width: auto;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.bunker};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.fonts.bunker};
    opacity: 1;
    transition: opacity 250ms linear;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.sourceSans};
    font-weight: 400;
    font-size: 14px;}
    &:not(last-child) {
           margin-right: 5px;
    };
    ${({ isSelected, theme }) => {
        return (
          isSelected &&
          css`
          border: 1px solid ${theme.colors.darkGray};
          background-color: ${theme.colors.lightGray};
          color: ${theme.colors.darkGray};
        `
        );
    }};
`;



export const CartItemCountersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
`;

export const CartItemCounterUp = styled.button`
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.bunker};
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 1;
    transition: opacity 250ms linear;
    cursor: pointer;
    margin-bottom: 40px;

    &:hover {
        transition: all 0.5s;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.bunker};
    }
`;

export const CartItemCountAmount = styled.span`
    font-weight: 500;
    font-size: 1rem;
`

export const CartItemCounterDown = styled.button`
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.bunker};
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 1;
    transition: opacity 250ms linear;
    cursor: pointer;
    margin-top: 33px;

    &:hover {
        transition: all 0.5s;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.white};
`;

export const CartItemImageWrapper = styled.div`
    width: 105px;
    height: 137px;
`;

export const CartItemImage = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
`