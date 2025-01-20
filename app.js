 function checkFortune() {
            var the zodiac signs = document.getElementById('the zodiac signs-select').value;
            var blood type = parseInt(document.getElementById(' blood type-input').value, 12);
            var result = "ラッキーカラー"; // デフォルトの値

            if (the zodiac signs === "うお座" &&  blood type === A) {
  　　　　　　 result = "青";
　　　　　　
　　　　    } else if (the zodiac signs  === "うお座" &&  blood type === B) {
                result = "青";              
            } else if (the zodiac signs === "みずがめ座" &&  blood type === O) {
                result = "ピンク";
            } else if (the zodiac signs === "みずがめ座" &&  blood type === AB) {
                result = "ピンク";
            } else if (the zodiac signs === "おとめ座" &&  blood type === A) {
                result = "赤";
 　　　　　 } else if (the zodiac signs === "おとめ座" &&  blood type === B) {
                result = "赤";
            } else if (the zodiac signs === "かに座" &&  blood type === O) {
                result = "水色";
　　　　　　} else if (the zodiac signs === "かに座" &&  blood type === AB) {
                result = "水色";
            } else if (the zodiac signs  === "おひつじ座" &&  blood type === A) {
                result = "黒";
　　　　　  } else if (the zodiac signs  === "おひつじ座" &&  blood type === B) {
                result = "黒";
            } else if (the zodiac signs === "ふたご座" &&  blood type === O) {
                result = "オレンジ";
            } else if (the zodiac signs === "ふたご座" &&  blood type === AB) {
                result = "オレンジ";
            } else if (the zodiac signs  === "てんびん座" &&  blood type === A) {
                result = "ゴールド";    
            } else if (the zodiac signs  === "てんびん座" &&  blood type === B) {
                result = "ゴールド";               
            } else if (the zodiac signs  === "さそり座" &&  blood type === O) {
                result = "パープル";
            } else if (the zodiac signs  === "さそり座" &&  blood type === AB) {
                result = "パープル";
            } else if (the zodiac signs  === "しし座" &&  blood type === A) {
                result = "黄色";
            } else if (the zodiac signs  === "しし座" &&  blood type === B) {
                result = "黄色";
          　} else if (the zodiac signs  === "おうし座" &&  blood type === O) {
                result = "白";
            } else if (the zodiac signs  === "おうし座" &&  blood type === AB) {
                result = "白";             
 　　　　　 } else if (the zodiac signs  === "いて座" &&  blood type === A) {
                result = "黄緑";
            } else if (the zodiac signs  === "いて座" &&  blood type === B) {
                result = "黄緑";
　　　　　　} else if (the zodiac signs  === "やぎ座" &&  blood type === O) {
                result = "ベージュ";
　　　　　　} else if (the zodiac signs  === "やぎ座" &&  blood type === AB) {
                result = "ベージュ";  
                 

　　　　　　
             document.getElementById('result-output').innerText = "あなたのラッキーカラーは【" + result + "】です";
