import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Button, Column } from "../atoms";
import { userState } from "../../../recoil/user";

const LayoutStyle = styled.div`
    padding: 40px 0;
    width: 200px;
    height: 100dvh;
    border-right: 1px solid #333;
    position: absolute;
`;

export default () => {
    const [user, setUser] = useRecoilState(userState);
    return (
        <LayoutStyle>
            {user.nickname ? (
                <Column>
                    <Button onClick={() => setUser({})}>로그아웃</Button>
                    <Link to={"/boards"}>글 작성하기</Link>
                    <Link to={`/users/${user.id}`}>내 정보 보기</Link>
                </Column>
            ) : (
                <Link to={"/users"}>Login</Link>
            )}
        </LayoutStyle>
    );
};
