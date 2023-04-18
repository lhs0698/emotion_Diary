import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

import { useNavigate, useParams } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {

  const [originData, setOriginData] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);
  // console.log(id);
  // console.log(diaryList);
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기수정`; 
  },[])

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      // console.log(targetDiary);

      if(targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
        // id가 잘못 전달되었을 떄 navigate를 이용해서 home으로 돌려보낸다 -> replace를 이용해 뒤로가기를 막는다
      }
    }
  }, [id, diaryList]);
  
  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData}/>}
    </div>
  );
};

export default Edit;
