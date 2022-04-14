import styled from 'styled-components';

export const ParagraphWrapper = styled.div`
    color: #000;
    line-height: 150%;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}em`: '1em')};
    margin-bottom: 10px;
    width: 100%;
    font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}`: '400')}
`