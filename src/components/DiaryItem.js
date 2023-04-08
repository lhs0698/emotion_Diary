const DiaryItem = ({id, emotion, content, date}) => {

    const strDate = new Date(parseInt(date)).toLocaleString();


    return (
        <div className="DiaryItem">
            <div className={["emotion_img_wrapper", `emotion_img_wrapper_${emotion}`].join(" ")}>
                <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}/>
            </div>
            <div className="diary_date">{strDate}</div>
            <div className="diray_content_prview"></div>
        </div>
    )
}

export default DiaryItem;