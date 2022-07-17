import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    background-color: #0e101c;
    border: 1px solid #516391;
    border-radius: 4px;
    color: white;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    transition: background 300ms;

    &:hover {
        background-color: #516391;
    }
`;

export default Button;