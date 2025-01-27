function checkFortune() {
    var animal = document.getElementById('animal-select').value;
    var number = parseInt(document.getElementById('number-input').value, 10);
    var result = "ラッキーカラー"; // デフォルトの値
 
     
    if (animal === "うさぎ" && number === 1) {
        result = "青";
 } else  if (animal === "うさぎ" && number === 2) {
        result = "ピンク";
    } else  if (animal === "うさぎ" && number === 3) {
        result = "赤";
    } else if (animal  === "うさぎ" && number === 4) {
        result = "黒";
                
    } else if (animal  === "いぬ" && number === 1) {
        result = "青";
     } else if (animal  === "いぬ" && number === 2) {
        result = "ピンク";
     } else if (animal  === "いぬ" && number === 3) {
        result = "赤";
    } else if (animal  === "いぬ" && number === 4) {
        result = "黒";
                
    } else if (animal  === "ねこ" && number === 1) {
        result = "青";
 } else if (animal  === "ねこ" && number ===  2) {
        result = "ピンク";
     } else if (animal  === "ねこ" && number === 3) {
        result = "赤";                
    } else if (animal  === "ねこ" && number === 4) {
        result = "黒";
                
    } else if (animal  === "くま" && number === 1) {
        result = "青";
            } else if (animal  === "くま" && number === 2) {
        result = "ピンク";
                 } else if (animal  === "くま" && number === 3) {
        result = "赤";
    } else if (animal  === "くま" && number === 4 ) {
        result = "黒";
                
    } else if (animal  === "ひつじ" && number === 1) {
        result = "青";
                  } else if (animal  === "ひつじ" && number === 　2) {
        result = "ピンク";
                  } else if (animal  === "ひつじ" && number === 3) {
        result = "赤";
    } else if (animal  === "ひつじ" && number === 4) {
        result = "黒";
                
    } else if (animal  === "きりん" && number === 1) {
        result = "青";
                  } else if (animal  === "きりん" && number === 2) {
        result = "ピンク";
                  } else if (animal  === "きりん" && number === 3) {
        result = "赤";
    } else if (animal  === "きりん" && number === 4) {
        result = "黒";
                
    } else if (animal  === "ぞう" && number === 1) {
        result = "青";
                } else if (animal  === "ぞう" && number === 2) {
        result = "ピンク";
                } else if (animal  === "ぞう" && number === 3) {
        result = "赤";
    } else if (animal  === "ぞう" && number === 4) {
        result = "黒";
                
    } else if (animal  === "ぱんだ" && number === 1) {
        result = "青";
                  } else if (animal  === "ぱんだ" && number === 2) {
        result = "ピンク";
                  } else if (animal  === "ぱんだ" && number === 3) {
        result = "赤";
    } else if (animal  === "ぱんだ" && number === 4) {
        result = "黒";
                
    } else if (animal  === "こあら" && number === 1) {
        result = "青";
                 } else if (animal  === "こあら" && number === 2) {
        result = "ピンク";
                 } else if (animal  === "こあら" && number === 3) {
        result = "赤";
    } else if (animal  === "こあら" && number === 4) {
        result = "黒";
                
    } else if (animal  === "きつね" && number === 1) {
        result = "青";
                 } else if (animal  === "きつね" && number === 2) {
        result = "ピンク";
                 } else if (animal  === "きつね" && number === 3) {
        result = "赤";
    } else if (animal  === "きつね" && number === 4) {
        result = "黒";
                
    } else if (animal  === "はりねずみ" && number === 1) {
        result = "青";
                 } else if (animal  === "はりねずみ" && number === 2) {
        result = "ピンク";
                 } else if (animal  === "はりねずみ" && number === 3) {
        result = "赤";
    } else if (animal  === "はりねずみ" && number === 4) {
        result = "黒";
                
    } else if (animal  === "りす" && number === 1) {
        result = "青";
                } else if (animal  === "りす" && number === 2) {
        result = "ピンク";
                } else if (animal  === "りす" && number === 3) {
        result = "赤";
    } else if (animal  === "りす" && number === 4) {
        result = "黒";
    }
 
    
    document.getElementById('result-output').innerText = "あなたのラッキーカラーは【" + result + "】です";
}

