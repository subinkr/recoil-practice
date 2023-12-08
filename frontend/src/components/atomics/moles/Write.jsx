import { useRecoilValue } from "recoil";
import { Button, Form, Input } from "../atoms";
import { userState } from "../../../recoil/user";
import { useNavigate } from "react-router-dom";

export default () => {
    const user = useRecoilValue(userState);
    const navigate = useNavigate();
    const write = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;

        const boardResponse = await fetch("http://localhost:4000/boards", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
                user: user.id,
            }),
        });
        const boardResult = await boardResponse.json();

        navigate(`/boards/${boardResult.id}`);
    };

    return (
        <Form onSubmit={write}>
            <Input placeholder={"제목"} name={"title"} />
            <Input placeholder={"내용"} name={"content"} />
            <Button type={"submit"}>작성하기</Button>
        </Form>
    );
};
