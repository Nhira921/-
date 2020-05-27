"use strict";

{
    const currentTime = document.getElementById("currentTime");
    const btnGetTime = document.getElementById("btnGetTime");
    const btnAdvice = document.getElementById("btnAdvice");
    const advice = document.getElementById("advice");

    /*--------------------------*/
    /*変数の設定----*/
    /*--------------------------*/

    let h = 0;
    let m = 0;
    let s = 0;
    let idealTime = 0;
    let yourAge = 0;
    let idealWakeyTime = 0;

    /*--------------------------*/
    /*フォームから年齢を取得----*/
    /*--------------------------*/

    const ageSelect = document.getElementById("ageSelect");
    ageSelect.onchange = function () {
        let ageValue = this.value; //年齢

        /*--------------------------*/
        /*理想の起床時間を計算------*/
        /*--------------------------*/
        switch (ageValue) {
            case "10":
                idealTime = 9;
                yourAge = "0～10歳";
                break;
            case "15":
                idealTime = 8;
                yourAge = "11～15歳";
                break;
            case "25":
                idealTime = 7;
                yourAge = "11～25歳";
                break;
            case "45":
                idealTime = 6;
                yourAge = "26～45歳";
                break;
            case "65":
                idealTime = 6;
                yourAge = "46～65歳";
                break;
            case "75":
                idealTime = 5;
                yourAge = "75歳以上";
                break;
        }

        /*  夜間の睡眠時間は10歳までは8~9時間、15歳で約8時間、25歳で約7時間、45歳で約6.5時間、65歳で約6時間*/
    };

    /*--------------------------*/
    /*クリックして現在時刻を取得*/
    /*--------------------------*/
    btnGetTime.addEventListener("click", () => {
        const time = new Date(Date.now());
        h = String(time.getHours()).padStart(2, "0");
        m = String(time.getMinutes()).padStart(2, "0");
        s = String(time.getSeconds()).padStart(3, "0");

        currentTime.textContent = `${h}:${m}.${s}`;

        /*--------------------------*/
        /*アドバイスを表示させる----*/
        /*--------------------------*/

        if (idealTime === 0) {
            window.alert("年齢を選択してください");
            return;
        }

        let intH = parseInt(h, 10);
        console.log(`h:${intH}`);
        console.log(`idealTime:${idealTime}`);
        idealWakeyTime = (intH + idealTime) % 24;
        console.log(idealWakeyTime);

        advice.innerHTML = `あなたの理想の起床時間:${idealWakeyTime}時${m}分<br>
    ${yourAge}のあなたは${idealTime}時間の睡眠時間が必要です。
    睡眠で大切なのは睡眠時間をしっかり確保することです。<br>
    日中眠くなることが多かったり、仕事や学校のない休日に朝遅くまで寝てしまっている場合は、
    日ごろ睡眠時間が足りないというサインになります。
    睡眠は健康、美容の第一歩です。
    十分な睡眠をこころがけましょう。<br>`;
    });
}
