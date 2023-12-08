import { Suspense, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./atomics/moles";
import { Column } from "./atomics/atoms";

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    useEffect(() => {
        const getBoardList = async () => {
            const boardsResponse = await fetch("http://localhost:4000/", {
                method: "get",
            });
            const boardsResult = await boardsResponse.json();
            setBoards(boardsResult);
        };

        getBoardList();
    }, []);

    return boards.map((board, index) => (
        <Link key={`boards-${index}`} to={`/boards/${board.id}`}>
            {board.title}
        </Link>
    ));
};
export default () => {
    return (
        <Wrapper>
            <Column>
                <Suspense fallback={"로딩 중"}>
                    <BoardList />
                </Suspense>
            </Column>
        </Wrapper>
    );
};
