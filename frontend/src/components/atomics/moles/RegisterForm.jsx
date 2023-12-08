import { Form, Input, Button } from "../atoms";

export default () => {
    const register = async (e) => {
        e.preventDefault();
        const nickname = e.target.nickname.value;
        const username = e.target.username.value;
        const password = e.target.password.value;

        const registerResponse = await fetch(`http://localhost:4000/users`, {
            method: "post",
            headers: {
                "Users-Type": "register",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nickname, username, password }),
        });
        const registerResult = await registerResponse.json();
        if (registerResult.message === "Bad Request") {
            return alert("이미 존재하는 아이디입니다.");
        }

        window.location.href = "/users";
    };
    return (
        <>
            <Form onSubmit={register}>
                <h1>회원가입</h1>
                <Input
                    placeholder={"Nickname"}
                    name={"nickname"}
                    type={"text"}
                />
                <Input placeholder={"ID"} name={"username"} type={"text"} />
                <Input
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                />
                <Button>회원가입</Button>
            </Form>
        </>
    );
};
