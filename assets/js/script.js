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
            // console.log(response.rates.EUR);
            // var key = Object.keys(response.rates);
            for (const key in response.rates) {
                // console.log(key);
                var option = $('<option>');
                // console.log(option);
                option.append(key);
                $('#country').append(option);
            }
            $('#country').change(function(){
                // console.log($(this).val());
                let cnt = $(this).val();
                // console.log(cnt);
                let math = Math.round(response.rates[cnt]);
                // console.log(math);
            });
            $('#convert').click(function(){
                // console.log($(this));
                let amountJP = $("#jpAmount").val()
                // console.log(amountJP);
                let amountEUR = amountJP / 130;
                // console.log(amountEUR);
                $('#EURamount').val(amountEUR);                
            });
            $('#exchange').click(function(){
                console.log($('#amount').val());

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