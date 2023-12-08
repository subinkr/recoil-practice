import styled from "styled-components";

const ButtonStyle = styled.button`
    width: 100px;
    height: 50px;
    box-shadow: 1px 1px 1px #333;
    border-radius: 8px;
`;

export default ({ onClick, type, children }) => {
    return (
        <ButtonStyle onClick={onClick} type={type}>
            {children}
        </ButtonStyle>
    );
};
