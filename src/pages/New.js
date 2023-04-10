import DiaryEditor from "../components/DiaryEditor";


const getStringDate = (date) => {
    return date.toISOString().slice(0,10)
    // toISOString 메서드는 단순화한 확장 ISO형식의 문자열은 반환한다
    // YYYY-MM-DDTHH로 표현한다
}

const New = () => {
  return (
    <div>
        <DiaryEditor/>
    </div>
  )
};

export default New;
