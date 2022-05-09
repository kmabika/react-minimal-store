import styled from 'styled-components';

export const ParagraphWrapper = styled.div`
    color: ${({ theme }) => theme.colors.bunker};
    line-height: 150%;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem`: '1em')};
    font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}`: 'Raleway')};
    margin-bottom: ${(props) => (props.fontSize ? `${props.fontSize}rem`: '1em')};
    width: 100%;
    font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}`: '400')}
`