import styled from 'styled-components';

export const CurrencySwitcherWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 22px;
`;

export const CurrencySwitcherBtn = styled.button`
  width: 38px;
  padding: 0px 10px 0px 0px;
  border: none;
  background-color: var(--clr-white);
  color: var(--clr-bunker);
  font-size: 18px;
  line-height: 28.5px;
  font-family: Raleway;
  font-weight: 500;
  cursor: pointer;
  background-image: ${(props) =>
    props.isOpen ? "url('/images/arrow-up.svg');" : "url('/images/arrow-down.svg');"};
  background-repeat: no-repeat;
  background-position: center right;
`;

export const CurrencyDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: var(--clr-white);
  width: 114px;
  margin-top: 7px;
  border: none;
  box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
`;

export const CurrencyItem = styled.li`
  cursor: pointer;
  padding: 20px 15px;
  font-weight: 500;
  font-size: 18px;
  &:hover {
    background-color: var(--clr-darkgray);
    color: var(--clr-white);
  }
`;
