import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../atomics/moles";

const Board = () => {
    const [board, setBoard] = useState({});
    const param = useParams();
    useEffect(() => {
        const getBoard = async () => {
            const boardResponse = await fetch(
                `http://localhost:4000/boards/${param.id}`,
                {
                    method: "get",
                }
            );
            const boardResult = await boardResponse.json();
            setBoard(boardResult);
        };

        getBoard();
    }, []);

    return (
        <>
            <div>제목: {board.title}</div>
            <div>내용: {board.content}</div>
            <div>작성자: {board.user ? board.user.nickname : null}</div>
        </>
    );
};
export default () => {
    return (
        <Wrapper>
            <Suspense fallback={"로딩 중"}>
                <Board />
            </Suspense>
        </Wrapper>
    );
};
