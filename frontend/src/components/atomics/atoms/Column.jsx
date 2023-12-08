import styled from "styled-components";

const ColumnStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export default ({ children }) => {
    return <ColumnStyle>{children}</ColumnStyle>;
};
