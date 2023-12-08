import styled from "styled-components";

const FormStyle = styled.form`
    width: 400px;
    height: 600px;
    border: 1px solid #333;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    box-shadow: 2px 2px 2px #333;
`;

export default ({ onSubmit, children }) => {
    return <FormStyle onSubmit={onSubmit}>{children}</FormStyle>;
};
