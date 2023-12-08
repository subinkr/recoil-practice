import { useRecoilState } from "recoil";
import { Form, Input, Button, Flex } from "../atoms";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../recoil/user";

export default ({ setRegister }) => {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState);
    const login = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const userResponse = await fetch("http://localhost:4000/users", {
            method: "post",
            headers: {
                "Users-Type": "login",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        const userResult = await userResponse.json();
        console.log(userResult);

        if (userResult.message === "Bad Request") {
            return alert("로그인 정보가 틀렸습니다.");
        }

        setUser({
            ...user,
            nickname: userResult.nickname,
            username: userResult.username,
            id: userResult.id,
        });

        navigate("/");
    };
    return (
        <>
            <Form onSubmit={login}>
                <h1>로그인</h1>
                <Input placeholder={"ID"} name={"username"} type={"text"} />
                <Input
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                />
                <Flex>
                    <Button onClick={() => setRegister(true)} type={"button"}>
                        회원가입
                    </Button>
                    <Button type={"submit"}>로그인</Button>
                </Flex>
            </Form>
        </>
    );
};
