//-----------------リアルタイムレート取得-------------------------//
// // set endpoint and your access key
// endpoint = 'latest'
// access_key = 'API_KEY';

// // get the most recent exchange rates via the "latest" endpoint:
// $.ajax({
//     url: 'https://api.exchangeratesapi.io/v1/' + endpoint + '?access_key=' + access_key,
//     dataType: 'jsonp',
//     success: function(json) {

//         // exchange rata data is stored in json.rates
//         alert(json.rates.GBP);

//         // base currency is stored in json.base
//         alert(json.base);

//         // timestamp can be accessed in json.timestamp
//         alert(json.timestamp);

//     }
// });

// -----------通貨を変換----------------------------//
// // set endpoint and your API key
// endpoint = 'convert';
// access_key = 'API_KEY';

// // define from currency, to currency, and amount
// from = 'EUR';
// to = 'GBP';
// amount = '10';

// // execute the conversion using the "convert" endpoint:
// $.ajax({
//     url: 'https://api.exchangeratesapi.io/v1/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,
//     dataType: 'jsonp',
//     success: function(json) {

//         // access the conversion result in json.result
//         alert(json.result);

//     }
// });

$(function () {
    $.ajax({
        url: 'http://api.exchangeratesapi.io/v1/latest?access_key=373f6a4c6a91b0d67715af14b524c847&format=1', //アクセスするURL
        type: 'get',　　 //post or get
        cache: false,        //cacheを使うか使わないかを設定
        dataType: 'json',     //data type script・xmlDocument・jsonなど
        data: data,           //アクセスするときに必要なデータを記載      
    })
        .done(function (response) {
            //通信成功時の処理
            //成功したとき実行したいスクリプトを記載
        })
        .fail(function (xhr) {
            //通信失敗時の処理
            //失敗したときに実行したいスクリプトを記載
        })
        .always(function (xhr, msg) {
            //通信完了時の処理
            //結果に関わらず実行したいスクリプトを記載
        });


});





// 'http://api.exchangeratesapi.io/v1/latest?access_key=373f6a4c6a91b0d67715af14b524c847&format=1'