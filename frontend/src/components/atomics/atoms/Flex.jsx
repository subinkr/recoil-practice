import styled from "styled-components";

const FlexStyle = styled.div`
    display: flex;
    gap: 20px;
`;

export default ({ children }) => {
    return <FlexStyle>{children}</FlexStyle>;
};
