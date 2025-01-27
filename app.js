function checkFortune() {
    var animal = document.getElementById('animal-select').value;
    var number = parseInt(document.getElementById('number-input').value, 10);
    var result = "ラッキーカラー"; // デフォルトの値
 
     
    if (animal === "うさぎ" && number === 1) {
        result = "青";
    } else if (animal  === "うさぎ" && number === 2) {
        result = "青";
    } else if (animal  === "いぬ" && number === 3) {
        result = "ピンク";
    } else if (animal  === "いぬ" && number === 4) {
        result = "ピンク";
    } else if (animal  === "ねこ" && number === 1) {
        result = "赤";
    } else if (animal  === "ねこ" && number === 2) {
        result = "赤";
    } else if (animal  === "くま" && number === 3) {
        result = "水色";
    } else if (animal  === "くま" && number === 4) {
        result = "水色";
    } else if (animal  === "ひつじ" && number === 1) {
        result = "黒";
    } else if (animal  === "ひつじ" && number === 2) {
        result = "黒";
    } else if (animal  === "きりん" && number === 3) {
        result = "オレンジ";
    } else if (animal  === "きりん" && number === 4) {
        result = "オレンジ";
    } else if (animal  === "ぞう" && number === 1) {
        result = "ゴールド";
    } else if (animal  === "ぞう" && number === 2) {
        result = "ゴールド";
    } else if (animal  === "ぱんだ" && number === 3) {
        result = "パープル";
    } else if (animal  === "ぱんだ" && number === 4) {
        result = "パープル";
    } else if (animal  === "こあら" && number === 1) {
        result = "黄色";
    } else if (animal  === "こあら" && number === 2) {
        result = "黄色";
    } else if (animal  === "きつね" && number === 3) {
        result = "白";
    } else if (animal  === "きつね" && number === 4) {
        result = "白";
    } else if (animal  === "はりねずみ" && number === 1) {
        result = "黄緑";
    } else if (animal  === "はりねずみ" && number === 2) {
        result = "黄緑";
    } else if (animal  === "りす" && number === 3) {
        result = "ベージュ";
    } else if (animal  === "りす" && number === 4) {
        result = "ベージュ";
    }
 
    
    document.getElementById('result-output').innerText = "あなたのラッキーカラーは【" + result + "】です";
}

