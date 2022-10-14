import styled from 'styled-components';

export const List = styled.ul`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
list-style: none;
`;

export const Item = styled.li`
`

export const Button = styled.button`
padding: 10px;
font-weight: normal;
font-size: 24px;
border-radius: 10%;
&:hover {
    background-color: #004DFF;
    color: #fff;
}
`;