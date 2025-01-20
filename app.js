 function checkFortune() {
            var  zodiac signs = document.getElementById(' zodiac signs-select').value;
            var food = parseInt(document.getElementById('food  -input').value, 12);
            var result = "ラッキーカラー"; // デフォルトの値

            if ( zodiac signs === "うお座" &&  food  === ラーメン) {
  　　　　　　 result = "青";
　　　　　　
　　　　    } else if ( zodiac signs  === "うお座" &&  food  === ポテト) {
                result = "青";              
            } else if ( zodiac signs === "みずがめ座" &&  food  === オムライス) {
                result = "ピンク";
            } else if ( zodiac signs === "みずがめ座" &&  food  === ピザ) {
                result = "ピンク";
            } else if ( zodiac signs === "おとめ座" &&  food  === ラーメン) {
                result = "赤";
 　　　　　 } else if ( zodiac signs === "おとめ座" &&  food  === ポテト) {
                result = "赤";
            } else if ( zodiac signs === "かに座" &&  food  === オムライス) {
                result = "水色";
　　　　　　} else if ( zodiac signs === "かに座" &&  food  === ピザ) {
                result = "水色";
            } else if ( zodiac signs  === "おひつじ座" &&  food  === ラーメン) {
                result = "黒";
　　　　　  } else if ( zodiac signs  === "おひつじ座" &&  food  === ポテト) {
                result = "黒";
            } else if ( zodiac signs === "ふたご座" &&  food  === オムライス) {
                result = "オレンジ";
            } else if ( zodiac signs === "ふたご座" &&  food  === ピザ) {
                result = "オレンジ";
            } else if ( zodiac signs  === "てんびん座" &&  food  === ラーメン) {
                result = "ゴールド";    
            } else if ( zodiac signs  === "てんびん座" &&  food  === ポテト) {
                result = "ゴールド";               
            } else if ( zodiac signs  === "さそり座" &&  food  === オムライス) {
                result = "パープル";
            } else if ( zodiac signs  === "さそり座" &&  food  === ピザ) {
                result = "パープル";
            } else if ( zodiac signs  === "しし座" &&  food  === ラーメン) {
                result = "黄色";
            } else if ( zodiac signs  === "しし座" &&  food  === ポテト) {
                result = "黄色";
          　} else if ( zodiac signs  === "おうし座" &&  food  === オムライス) {
                result = "白";
            } else if ( zodiac signs  === "おうし座" &&  food  === ピザ) {
                result = "白";             
 　　　　　 } else if ( zodiac signs  === "いて座" &&  food  === ラーメン) {
                result = "黄緑";
            } else if ( zodiac signs  === "いて座" &&  food  === ポテト) {
                result = "黄緑";
　　　　　　} else if ( zodiac signs  === "やぎ座" &&  food  === オムライス) {
                result = "ベージュ";
　　　　　　} else if ( zodiac signs  === "やぎ座" &&  food  === ピザ) {
                result = "ベージュ";  
                 

　　　　　　
             document.getElementById('result-output').innerText = "あなたのラッキーカラーは【" + result + "】です";
