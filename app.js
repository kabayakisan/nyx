 function checkFortune() {
            var  zodiac signs = document.getElementById(' zodiac signs-select').value;
            var number = parseInt(document.getElementById(' number   -input').value, 10);
            var result = "ラッキーカラー"; // デフォルトの値

            if ( zodiac signs === "うお座" &&   number  === １) {
  　　　　　　 result = "青";
　　　　　　
　　　　    } else if ( zodiac signs  === "うお座" &&   number  === ２) {
                result = "青";              
            } else if ( zodiac signs === "みずがめ座" &&   number   === ３) {
                result = "ピンク";
            } else if ( zodiac signs === "みずがめ座" &&   number  ===　４) {
                result = "ピンク";
            } else if ( zodiac signs === "おとめ座" &&   number  === １) {
                result = "赤";
 　　　　　 } else if ( zodiac signs === "おとめ座" &&   number  === ２) {
                result = "赤";
            } else if ( zodiac signs === "かに座" &&   number   === ３) {
                result = "水色";
　　　　　　} else if ( zodiac signs === "かに座" &&   number   === ４) {
                result = "水色";
            } else if ( zodiac signs  === "おひつじ座" &&   number   === １) {
                result = "黒";
　　　　　  } else if ( zodiac signs  === "おひつじ座" &&   number   === ２) {
                result = "黒";
            } else if ( zodiac signs === "ふたご座" &&   number  === ３) {
                result = "オレンジ";
            } else if ( zodiac signs === "ふたご座" &&   number   === ４) {
                result = "オレンジ";
            } else if ( zodiac signs  === "てんびん座" &&   number   === １) {
                result = "ゴールド";    
            } else if ( zodiac signs  === "てんびん座" &&   number   === ２) {
                result = "ゴールド";               
            } else if ( zodiac signs  === "さそり座" &&   number  === ３) {
                result = "パープル";
            } else if ( zodiac signs  === "さそり座" &&   number   === ４) {
                result = "パープル";
            } else if ( zodiac signs  === "しし座" &&   number   === １) {
                result = "黄色";
            } else if ( zodiac signs  === "しし座" &&   number  === ２) {
                result = "黄色";
          　} else if ( zodiac signs  === "おうし座" &&   number   === ３) {
                result = "白";
            } else if ( zodiac signs  === "おうし座" &&   number   === ４) {
                result = "白";             
 　　　　　 } else if ( zodiac signs  === "いて座" &&   number   === １) {
                result = "黄緑";
            } else if ( zodiac signs  === "いて座" &&   number   === ２) {
                result = "黄緑";
　　　　　　} else if ( zodiac signs  === "やぎ座" &&   number   === ３) {
                result = "ベージュ";
　　　　　　} else if ( zodiac signs  === "やぎ座" &&   number   === ４) {
                result = "ベージュ";  
                 

　　　　　　
             document.getElementById('result-output').innerText = "あなたのラッキーカラーは【" + result + "】です";
