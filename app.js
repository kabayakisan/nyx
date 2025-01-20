 function checkFortune() {
            var the zodiac signs = document.getElementById('the zodiac signs-select').value;
            var number = parseInt(document.getElementById('number-input').value, 12);
            var result = "ラッキーカラー"; // デフォルトの値

            if (the zodiac signs === "うお座" && number === 2) {
  　　　　　　 result = "青";
　　　　　　
　　　　    } else if (the zodiac signs  === "うお座" && number === 3) {
                result = "青";              
            } else if (the zodiac signs === "みずがめ座" && number === 1) {
                result = "ピンク";
            } else if (the zodiac signs === "みずがめ座" && number === 2) {
                result = "ピンク";
            } else if (the zodiac signs === "おとめ座" && number === 8) {
                result = "赤";
 　　　　　 } else if (the zodiac signs === "おとめ座" && number === 9) {
                result = "赤";
            } else if (the zodiac signs === "かに座" && number === 6) {
                result = "水色";
　　　　　　} else if (the zodiac signs === "かに座" && number === 7) {
                result = "水色";
            } else if (the zodiac signs  === "おひつじ座" && number === 3) {
                result = "黒";
　　　　　  } else if (the zodiac signs  === "おひつじ座" && number === 4) {
                result = "黒";
            } else if (the zodiac signs === "ふたご座" && number === 5) {
                result = "オレンジ";
            } else if (the zodiac signs === "ふたご座" && number === 6) {
                result = "オレンジ";
            } else if (the zodiac signs  === "てんびん座" && number === 9) {
                result = "ゴールド";    
            } else if (the zodiac signs  === "てんびん座" && number === 10) {
                result = "ゴールド";               
            } else if (the zodiac signs  === "さそり座" && number === 10) {
                result = "パープル";
            } else if (the zodiac signs  === "さそり座" && number === 11) {
                result = "パープル";
            } else if (the zodiac signs  === "しし座" && number === 7) {
                result = "黄色";
            } else if (the zodiac signs  === "しし座" && number === 8) {
                result = "黄色";
          　} else if (the zodiac signs  === "おうし座" && number === 4) {
                result = "白";
            } else if (the zodiac signs  === "おうし座" && number === 5) {
                result = "白";             
 　　　　　 } else if (the zodiac signs  === "いて座" && number === 11) {
                result = "黄緑";
            } else if (the zodiac signs  === "いて座" && number === 12) {
                result = "黄緑";
　　　　　　} else if (the zodiac signs  === "やぎ座" && number === 12) {
                result = "ベージュ";
　　　　　　} else if (the zodiac signs  === "やぎ座" && number === 1) {
                result = "ベージュ";  
                 

　　　　　　
             document.getElementById('result-output').innerText = "あなたのラッキーカラーは【" + result + "】です";
