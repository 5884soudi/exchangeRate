$(function () {

    // set endpoint and your access key
    // endpoint = ''
    // access_key = '';


    // get the most recent exchange rates via the "latest" endpoint:
    // $.ajax({
    //     url: 'http://api.exchangeratesapi.io/v1/latest?access_key=373f6a4c6a91b0d67715af14b524c847&format=1',
    //     dataType: 'jsonp',
    //     success: function (json) {

    //         // exchange rata data is stored in json.rates
    //         alert(json.rates.GBP);

    //         // base currency is stored in json.base
    //         alert(json.base);
    //         console.log(json.base);

    //         // timestamp can be accessed in json.timestamp
    //         alert(json.timestamp);

    //     }
    // });


    let data = {
        access_key: '373f6a4c6a91b0d67715af14b524c847',

    };

    $.ajax({
        url: 'http://api.exchangeratesapi.io/v1/latest', //アクセスするURL
        type: 'get',　　 //post or get
        cache: false,        //cacheを使うか使わないかを設定
        dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
        data: data,           //アクセスするときに必要なデータを記載    
    })
        .done(function (response) {
            //通信成功時の処理
            //成功したとき実行したいスクリプトを記載
            console.log(response.rates.JPY);
            // var key = Object.keys(response.rates);
            for (const key in response.rates) {
                console.log(key);
                var option = $('<option>');
                console.log(option);
                option.append(key);
                $('#country').append(option);
            }
            $('#country').change(function(){
                console.log($(this).val());
                let cnt = $(this).val();
                // console.log(cnt);
                console.log(response.rates.JPY);
                let math = Math.round(response.rates[cnt]);
                console.log(math);
            });
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