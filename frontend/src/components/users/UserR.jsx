import { Suspense, useEffect, useState } from "react";
import { Wrapper } from "../atomics/moles";
import { useParams } from "react-router-dom";

const User = () => {
    const param = useParams();
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const getUser = async () => {
            const userResponse = await fetch(
                `http://localhost:4000/users/${param.id}`,
                {
                    method: "get",
                }
            );
            const userResult = await userResponse.json();
            setUserData(userResult);
        };

        getUser();
    }, []);

    if (userData.user) {
        const { user, boards } = userData;
        return (
            <>
                <div>닉네임: {user.nickname}</div>
                <div>아이디: {user.username}</div>
                <br></br>
                <div>작성글 목록</div>
                {boards.map((board, index) => (
                    <div key={`user-boards-${index}`}>{board.title}</div>
                ))}
            </>
        );
    }
    return <></>;
};

export default () => {
    return (
        <Wrapper>
            <Suspense fallback={"로드 중"}>
                <User />
            </Suspense>
        </Wrapper>
    );
};
