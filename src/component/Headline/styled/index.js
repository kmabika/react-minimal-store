import styled from 'styled-components';

export const HeadlineElement = styled.div`
  width: 100%;
`;

const tag = (props) => (props.typeHeadline ? { as: props.typeHeadline } : { as: 'p' });

const sizeHeadline = (type) => {
  switch (type) {
    case 'h1':
      return { size: 40, weight: 400 };
    case 'h2':
      return { size: 24, weight: 400 };
    case 'h3':
      return { size: 20.8, weight: 400 };
    case 'h4':
      return { size: 19.2, weight: 400 };
    case 'h5':
      return { size: 17.6, weight: 700 };
    case 'h6':
      return { size: 16, weight: 700 };
    default:
      return { size: 16, weight: 500 };
  }
};

export const HeadlineWrapper = styled(HeadlineElement).attrs(tag)`
  color: var(--clr-bunker);
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}px` : '150%')};
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}px` : `${sizeHeadline(props.typeHeadline).size}px`};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : sizeHeadline(props.typeHeadline).weight};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : '')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}px` : '')};
`;
