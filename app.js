 function checkFortune() {
            var the zodiac signs = document.getElementById('the zodiac signs-select').value;
            var food = parseInt(document.getElementById('food  -input').value, 12);
            var result = "ラッキーカラー"; // デフォルトの値

            if (the zodiac signs === "うお座" &&  food  === ラーメン) {
  　　　　　　 result = "青";
　　　　　　
　　　　    } else if (the zodiac signs  === "うお座" &&  food  === ポテト) {
                result = "青";              
            } else if (the zodiac signs === "みずがめ座" &&  food  === オムライス) {
                result = "ピンク";
            } else if (the zodiac signs === "みずがめ座" &&  food  === ピザ) {
                result = "ピンク";
            } else if (the zodiac signs === "おとめ座" &&  food  === ラーメン) {
                result = "赤";
 　　　　　 } else if (the zodiac signs === "おとめ座" &&  food  === ポテト) {
                result = "赤";
            } else if (the zodiac signs === "かに座" &&  food  === オムライス) {
                result = "水色";
　　　　　　} else if (the zodiac signs === "かに座" &&  food  === ピザ) {
                result = "水色";
            } else if (the zodiac signs  === "おひつじ座" &&  food  === ラーメン) {
                result = "黒";
　　　　　  } else if (the zodiac signs  === "おひつじ座" &&  food  === ポテト) {
                result = "黒";
            } else if (the zodiac signs === "ふたご座" &&  food  === オムライス) {
                result = "オレンジ";
            } else if (the zodiac signs === "ふたご座" &&  food  === ピザ) {
                result = "オレンジ";
            } else if (the zodiac signs  === "てんびん座" &&  food  === ラーメン) {
                result = "ゴールド";    
            } else if (the zodiac signs  === "てんびん座" &&  food  === ポテト) {
                result = "ゴールド";               
            } else if (the zodiac signs  === "さそり座" &&  food  === オムライス) {
                result = "パープル";
            } else if (the zodiac signs  === "さそり座" &&  food  === ピザ) {
                result = "パープル";
            } else if (the zodiac signs  === "しし座" &&  food  === ラーメン) {
                result = "黄色";
            } else if (the zodiac signs  === "しし座" &&  food  === ポテト) {
                result = "黄色";
          　} else if (the zodiac signs  === "おうし座" &&  food  === オムライス) {
                result = "白";
            } else if (the zodiac signs  === "おうし座" &&  food  === ピザ) {
                result = "白";             
 　　　　　 } else if (the zodiac signs  === "いて座" &&  food  === ラーメン) {
                result = "黄緑";
            } else if (the zodiac signs  === "いて座" &&  food  === ポテト) {
                result = "黄緑";
　　　　　　} else if (the zodiac signs  === "やぎ座" &&  food  === オムライス) {
                result = "ベージュ";
　　　　　　} else if (the zodiac signs  === "やぎ座" &&  food  === ピザ) {
                result = "ベージュ";  
                 

　　　　　　
             document.getElementById('result-output').innerText = "あなたのラッキーカラーは【" + result + "】です";
