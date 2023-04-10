import MyHearder from "./MyHearder";
import MyButton from "./MyButton";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import EmotionItem from "./EmotionItem";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: "완전 좋음",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: "그럭저럭",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: "나쁨",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: "끔찍함",
  },
];

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
  // toISOString 메서드는 단순화한 확장 ISO형식의 문자열은 반환한다
  // YYYY-MM-DDTHH로 표현한다
};

const DiaryEditor = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);

  const handleClickEmotion = (emotion) => {
    setEmotion(emotion);
  };

  return (
    <div className="DiaryEditor">
      <MyHearder
        headText={"새 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date || ""}
              // React input 관련 오류 => input의 value에 undefined가 들어갔을 경우에 대한 처리가 없음.
              // input의 value가 undefined 일 때 ""가 들어올 수 있게 해준다
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmotion}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
