import styled from "styled-components";

const InputStyle = styled.input`
    width: 240px;
    height: 40px;
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
`;

export default ({ placeholder, name, type }) => {
    return (
        <InputStyle
            placeholder={placeholder}
            name={name}
            type={type}
        ></InputStyle>
    );
};
