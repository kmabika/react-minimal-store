import styled from 'styled-components'

export const HeadlineElement = styled.div`
    width: 100%;
`;

const tag = (props) =>
  props.typeHeadline ? { as: props.typeHeadline } : { as: 'p' };

const sizeHeadline = (type) => {
  switch (type) {
    case 'h1':
      return { size: 2.5, weight: 400 };
    case 'h2':
      return { size: 1.5, weight: 400 };
    case 'h3':
      return { size: 1.3, weight: 400 };
    case 'h4':
      return { size: 1.2, weight: 400 };
    case 'h5':
      return { size: 1.1, weight: 700 };
    case 'h6':
      return { size: 1, weight: 700 };
    default:
      return { size: 1, weight: 500 };
  }
};

export const HeadlineWrapper = styled(HeadlineElement).attrs(tag)`
  color: ${({ theme }) => theme.colors.bunker};
  line-height: ${(props) =>
    props.typeHeadline === 'h6' || props.typeHeadline === 'h5' || props.typeHeadline === 'h4'
      ? '140%'
      : '150%'};
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}em` : `${sizeHeadline(props.typeHeadline).size}em`};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : sizeHeadline(props.typeHeadline).weight};
  margin-top: ${(props) =>
      props.marginTop ? `${props.marginTop}rem` : '0rem'};
  margin-bottom: ${(props) =>
        props.marginBottom ? `${props.marginBottom}rem` : '0rem'};
  `