
function checkFortune() {
    var zodiacSigns = document.getElementById('zodiac-signs-select').value;
    var number = parseInt(document.getElementById('number-input').value, 10);
    var result = "ラッキーカラー"; // デフォルトの値
 
    // 星座と数字に基づいてラッキーカラーを決定
    if (zodiacSigns === "うお座" && number === 1) {
        result = "青";
    } else if (zodiacSigns === "うお座" && number === 2) {
        result = "青";
    } else if (zodiacSigns === "みずがめ座" && number === 3) {
        result = "ピンク";
    } else if (zodiacSigns === "みずがめ座" && number === 4) {
        result = "ピンク";
    } else if (zodiacSigns === "おとめ座" && number === 1) {
        result = "赤";
    } else if (zodiacSigns === "おとめ座" && number === 2) {
        result = "赤";
    } else if (zodiacSigns === "かに座" && number === 3) {
        result = "水色";
    } else if (zodiacSigns === "かに座" && number === 4) {
        result = "水色";
    } else if (zodiacSigns === "おひつじ座" && number === 1) {
        result = "黒";
    } else if (zodiacSigns === "おひつじ座" && number === 2) {
        result = "黒";
    } else if (zodiacSigns === "ふたご座" && number === 3) {
        result = "オレンジ";
    } else if (zodiacSigns === "ふたご座" && number === 4) {
        result = "オレンジ";
    } else if (zodiacSigns === "てんびん座" && number === 1) {
        result = "ゴールド";
    } else if (zodiacSigns === "てんびん座" && number === 2) {
        result = "ゴールド";
    } else if (zodiacSigns === "さそり座" && number === 3) {
        result = "パープル";
    } else if (zodiacSigns === "さそり座" && number === 4) {
        result = "パープル";
    } else if (zodiacSigns === "しし座" && number === 1) {
        result = "黄色";
    } else if (zodiacSigns === "しし座" && number === 2) {
        result = "黄色";
    } else if (zodiacSigns === "おうし座" && number === 3) {
        result = "白";
    } else if (zodiacSigns === "おうし座" && number === 4) {
        result = "白";
    } else if (zodiacSigns === "いて座" && number === 1) {
        result = "黄緑";
    } else if (zodiacSigns === "いて座" && number === 2) {
        result = "黄緑";
    } else if (zodiacSigns === "やぎ座" && number === 3) {
        result = "ベージュ";
    } else if (zodiacSigns === "やぎ座" && number === 4) {
        result = "ベージュ";
    }
 
    // 結果を表示
    document.getElementById('result-output').innerText = "あなたのラッキーカラーは【" + result + "】です";
}
コンテキスト メニューあり
