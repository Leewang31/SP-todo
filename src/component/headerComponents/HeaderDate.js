import {ArrowButton} from "./HeaderStyleComponent";

const HeaderDate = () => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    switch (day) {
        case 0:
            day = "Sun."
            break;
        case 1:
            day = "Mon."
            break;
        case 2:
            day = "Tue."
            break;
        case 3:
            day = "Wed."
            break;
        case 4:
            day = "Thu."
            break;
        case 5:
            day = "Fri."
            break;
        case 6:
            day = "Sat."
            break;
    }
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let ampm;
    if (hours > 12) {
        ampm = 'pm';
        hours %= 12;
    } else {
        ampm = 'am';
    }
    return (
        <div className='HeaderDate-div'>
            <span className='HeaderDate-time'>{`${ampm} ${hours} : ${minutes}`}</span>
            <span className='HeaderDate-edit'>
                <ArrowButton ><img src='/img/arrow_back.svg'/></ArrowButton>
                <span className='HeaderDate-date'>{`${year} - ${month} - ${date} - ${day}`}</span>
                <ArrowButton><img src='/img/arrow_forward.svg'/></ArrowButton>
            </span>
        </div>
    )
}
export default HeaderDate;