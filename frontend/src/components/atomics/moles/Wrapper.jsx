import styled from "styled-components";

const WrapperStyle = styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default ({ children }) => {
    return <WrapperStyle>{children}</WrapperStyle>;
};
