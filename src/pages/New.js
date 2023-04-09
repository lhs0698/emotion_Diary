import MyHearder from "../components/MyHearder";
import MyButton from "../components/MyButton";

import { useNavigate } from "react-router-dom";


const New = () => {

    const navigate = useNavigate();

    return (
        <div>
            <MyHearder 
            headText={"새 일기쓰기"}
            leftChild={<MyButton text={'< 뒤로가기'} onClick={()=> navigate(-1)}/>}
            />
            <div>
                <section></section>
            </div>
        </div>
    )
}

export default New;
