$(function () {

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

            let amountEUR;　　//グローバル変数

            //通貨名を順番に出力
            for (const key in response.rates) {
                var option = $('<option>');　// optionタグを追加
                option.append(key);　// <option>の中に通貨を順番に出力
                $('#country').append(option);　//slectタグにoptionタグを追加
            };

            // // 日本円をEURに換金
            // $('#convert').click(function () {
            //     $('#EURamount').val(amountEUR);　//二段目に出力
            // });

            // 通貨を選んでボタンを押すとその国の通貨を出力
            $('#country').change(function () {
                let amountJP = $("#jpAmount").val();
                let cnt = $(this).val(); //その国の通貨名
                console.log(response.rates[cnt]);
                let math = Math.round(response.rates[cnt] * 100) / 100;  //その国の通貨の小数点以下を四捨五入
                console.log(math);
                $('#exchange').click(function () {
                    amountEUR = amountJP / 130;　//日本円をEURに換金
                    $('#amout').text('');　　//枠の中を空にする
                    let answer = Math.round(amountEUR * math*100)/100;
                    console.log(answer);
                    $('#amount').append(answer);　　//ターゲットを出力　//fin
                    $('#amount').css({
                        'textAlign': 'center'
                    })
                });
            });
            $('#exchange').on('mouseover', function () {
                $(this).css({
                    'backgroundColor': 'black',
                    'color': 'white'
                });
            })
            $('#exchange').mouseleave(function () {
                $(this).css({
                    'backgroundColor': 'white',
                    'color': 'black'
                });
            })
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