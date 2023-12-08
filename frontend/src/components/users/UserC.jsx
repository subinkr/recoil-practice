import { useEffect, useState } from "react";
import { LoginForm, RegisterForm, Wrapper } from "../atomics/moles";

export default () => {
    const [register, setRegister] = useState(false);
    const LoginRegister = () => {
        if (!register) {
            return <LoginForm setRegister={setRegister} />;
        } else {
            return <RegisterForm />;
        }
    };

    useEffect(() => {}, [register]);

    return (
        <Wrapper>
            <LoginRegister />
        </Wrapper>
    );
};
