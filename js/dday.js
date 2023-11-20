const now = new Date();
const firstDay = new Date("2022-04-29");
const toNow = now.getTime(); //getTime() 함수는 밀리초를 반환한다.
const toFirst = firstDay.getTime();
const passedTime = toNow - toFirst;
const passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); //밀리초를 날짜로 바꾸고 반올림
document.querySelector("#accent").innerText = `D-${passedDay}`;

calcDate(100);
calcDate(365);
//중복되는 코드가 많으므로 100일,365일을 매개변수로 둔 함수를 만든것
function calcDate(day) {
    const future = toFirst + day * (1000 * 60 * 60 * 24); 
    const someday = new Date(future);
    const year = someday.getFullYear();
    const month = someday.getMonth() + 1; //월은 +1을 해줘야 정확한 일수가 나온다.
    const date = someday.getDate();

    document.querySelector("#date" + day).innerText = `${year}년 ${month}월 ${date}일`;
}
