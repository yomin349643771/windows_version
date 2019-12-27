const socket=io.connect("http://" + location.host);　　　　　　　　　　　　　　　　　　 //localhostにつなぐ

const default_text='//プログラムを入力(にゅうりょく)したら実行(じっこう)ボタン！！\nprint "Hello YetAnotherBasic System!!"\n\n//printとは？公式集(こうしきしゅう)をクリックして学習(がくしゅう)してみよう';                    //デフォルトでテキストエリアに表示したいテキスト
var default2_text=document.getElementById("input_in").innerHTML="<ruby>右下<rt>みぎした</rt></ruby>の<ruby>端末<rt>たんまつ</rt></ruby>にカーソルがある<ruby>状態<rt>じょうたい</rt></ruby>では、スクロールできないので<ruby>別<rt>べつ</rt></ruby>のところにカーソルを<ruby>置<rt>お</rt></ruby>こう!!";
var default3_text=document.getElementById("hint556").innerHTML='プログラムのヒントが表示されます(参考にしてみてください)<br><br>便利ツールから非表示にもできます<br><br>場合により2回押す必要があります。ご了承下さい';


$("textarea.source").val(default_text);                                         //default_text内のテキストをtextarea.sourceで取得

$(".tab_label").on("click",function(){                                          //ラベルの切り替えのためのプログラム。今は使用してないが、今後使う時のために、とっておく
  var $th=$(this).index();
  $(".tab_label").removeClass("active");
  $(".tab_panel").removeClass("active");
  $(this).addClass("active");
  $(".tab_panel").eq($th).addClass("active");
});

// -----------------------------------------------------------------------------xterm
var term = new Terminal();                                                      //ターミナルを起動
//var socket = io();
term.open(document.getElementById('terminal'));                                 //htmlのところにターミナルを開かせる(javascriptでは開いて見えないので、htmlで見える化させるため)　
// term.on('data', d => socket.emit('data', d));                                   //ターミナルのデータをソケット通信
// socket.on('data', d => term.write(d));

term.on('data', function(data) {
    socket.emit('data', data);
});
socket.on('data', function(data) {
    term.write(data);
});

//------------------------------------------------------------------------------basic実行結果表示
socket.on("data",function (d){
  document.getElementById("textare").style.color="#000";                          //正常に実行できたら文字の色を黒に
  console.log(d);
});

var vu=[];//err_line_numを受け取るための変数
//------------------------------------------------------------------------------エラーが起きた時の動作　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
socket.on("data",function(d){                                            　　　　//エラーが起きたら実行されるイベント、同じdataなので混乱しないように(console.logを使って確認してみるも良し)
  const error_data= /Error/.test(d);                                            //dはすべての実行結果を表しているものだが、分かりやすくするため変数はerror_dataと書いた
  if(error_data == true){                                                       //上のプログラムでerror_data内のErrorという文字列を識別したので、それがあればtrue,ないならfalseを返す。それを使ったif文
  document.getElementById("textare").style.color="red";                            //エラーをおこしたら文字の色を赤に(＊エラー部の文字だけ色を変えたい)


  const error_string= /String/.test(d);     //エラー1つ1つに対して、日本語詳細をだしてみる(新しくエラー文章を見つけたら追加していこう)
  const error_syntax= /syntax/.test(d);     //少し下にあるアラートページでつかっています
  const error_0xff=/0xff/.test(d);
  const error_elsif=/elsif/.test(d);
  const error_else=/else/.test(d);
  const error_endif=/endif/.test(d);
  const error_color=/colour/.test(d);
  const error_next=/next/.test(d);
  const error_match=/'for' and 'next' do not match/.test(d);
  const error_kagi1=/</.test(d);
  const error_kagi2=/>/.test(d);
  const error_loop=/loop/.test(d);
  const error_window=/Got no window to draw/.test(d);
  const error_curve=/curve/.test(d);


  var kode =document.getElementById("textare").value;  //エラーした行を特定(確実じゃない場合がある。原因特定できたらやる)
  var kode_num = kode.match(/\n/g);
  var kode_num_len=kode_num.length;
  d = d.match(/\d+/g).join(".");
  const err_line_num=parseFloat(d);//エラー行を取得
  kode_num_len = err_line_num;//ただ返してる
  vu[0]=err_line_num;//vuでエラー行を取得

  //console.log("エラーは"+ kode_num_len +"行目にあります。")
  var err_text= Array.from(kode);
  //console.log(err_text);//123
  //下のコメントはエラーコメントを日本語化させたいものだと思う、記憶曖昧
//   var counter = 1;
//   var i=0;
//   var okyaku=0;
//   var start=0;
//   var end=0;
//    while(1)
//  {
//
//      if(err_text[i]=='\n')
//        counter++;
//        i++;
//      if(counter==err_line_num){
//        if(okyaku==0){
//          okyaku=30;
//          start=i;
//          var sample=err_text[i];
//        }else{
//
//      sample=sample+err_text[i];
//      end=i;
//    }}
//     if(i==124){
//     console.log(sample);
//   break;
//   }
//
//
//  }
//  var sample_2 = "<font color='#f00;'>"+sample+"</font>" ;
//
//  var sin_err_text=[];
//  i=0;
//  var j=0;
//  while(i!=123){
//    if(start<=i&&i<=end){
//      sin_err_text[i]=sample_2[j]
//      j++;
//    }else{
//    sin_err_text[i]=err_text[i];
//  }
//  i++;
// }
 //$("#text").val(sample_2); //innerHTMLじゃとうまくいかんらしい


  $.confirm({//エラーが起きたときに教えてくれるアラートページを表示する
    icon: 'fas fa-exclamation-triangle',
    'title':'プログラムのエラーです',
    type: 'red',
    typeAnimated: true,
    boxWidth: '30%',
    useBootstrap: false,
    content:"エラーが"+'<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>"+"行目で発生しています<br>" +
            "<ruby>行数<rt>ぎょうすう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby> (<<ruby>例<rt>れい</rt></ruby>>Error...line 2(2<ruby>行目<rt>ぎょうめ</rt></ruby>がエラー)) して<ruby>修正<rt>しゅうせい</rt></ruby>してください"+
            "<br><br> (<ruby>文字<rt>もじ</rt></ruby>の<ruby>色<rt>いろ</rt></ruby>が<ruby>赤<rt>あか</rt></ruby>になりますが<ruby>仕様<rt>しよう</rt></ruby>です。「<ruby>文字<rt>もじ</rt></ruby>の<ruby>色<rt>いろ</rt></ruby>はそのまま」を<ruby>押<rt>お</rt></ruby>すと<ruby>黒色<rt>くろいろ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>ります)<br><br>",
    'buttons':{
      'OK':{
        btnClass: 'btn-red',
        'action' : function(){
            console.log("エラー確認しました");
            document.getElementById("input_in").innerHTML="エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。<br>仕様上2.1行目など小数点が出る場合があります。2.1行目ならば2行目のエラーを指しています";
            if(error_string == true){
              document.getElementById("input_in").innerHTML="<ruby>文字列<rt>もじれつ</rt></ruby>がおかしいかもしれません。<ruby>見直<rt>みなお</rt></ruby>しましょう<br>"+"エラーは"+'<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_syntax == true){
              document.getElementById("input_in").innerHTML="<ruby>構文<rt>こうぶん</rt></ruby>が<ruby>間違<rt>まちが</rt></ruby>っています。<ruby>再確認<rt>さいかくにん</rt></ruby>して<ruby>修正<rt>しゅうせい</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_0xff == true){
              document.getElementById("input_in").innerHTML="<ruby>文字<rt>もじ</rt></ruby>のどこかが<ruby>全角<rt>ぜんかく</rt></ruby>になっています。<ruby>再確認<rt>さいかくにん</rt></ruby>して<ruby>修正<rt>しゅうせい</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_elsif == true){
              document.getElementById("input_in").innerHTML="elsif文のエラーです。<br>最初のif文のthenのつけ忘れ、elsif文の間違いがあるかもしれません<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_endif == true){
              document.getElementById("input_in").innerHTML="end if文のエラーです。<br>最後に書き忘れていませんか？<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_color == true){
              document.getElementById("input_in").innerHTML="color文のエラーです。<br>colorの中の色はあっていますか？colorのつづりを間違えていませんか？<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_next == true){
              document.getElementById("input_in").innerHTML="next文のエラーです。<br>next文を最後に付け忘れていませんか？<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_match == true){
              document.getElementById("input_in").innerHTML="for文のエラーです。<br>変数がfor文とnext文でうまく合っていないようです。確認しましょう。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_else == true){
              document.getElementById("input_in").innerHTML="else文のエラーです。<br>if文の最初にthenのつけ忘れ、else文の間違いがあるかもしれません。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_kagi1 == true){
              document.getElementById("input_in").innerHTML="不等号を書く順番を間違えていませんか？<br>(正)<=(誤)=<<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_kagi2 == true){
              document.getElementById("input_in").innerHTML="不等号を書く順番を間違えていませんか？<br>(正)>=(誤)=><br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_loop == true){
              document.getElementById("input_in").innerHTML="loop文のエラーです。<br>loopのつけ忘れ、break文のつけ忘れを起こしていませんか？<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_window == true){
              document.getElementById("input_in").innerHTML="open windowで開けていますか？<br>書いてない可能性があります。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
            if(error_curve == true){
              document.getElementById("input_in").innerHTML="curve文のエラーです。<br>endにしていませんか？curve文はcloseです。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
            }
        }
      },
      '文字の色はそのまま':{
        'class' : 'gray',
        'action' : function(){
          document.getElementById("textare").style.color="#000";
          document.getElementById("input_in").innerHTML="エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。<br>仕様上2.1行目など小数点が出る場合があります。2.1行目ならば2行目のエラーを指しています";
          if(error_string == true){
            document.getElementById("input_in").innerHTML="<ruby>文字列<rt>もじれつ</rt></ruby>がおかしいかもしれません。<ruby>見直<rt>みなお</rt></ruby>しましょう<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_syntax == true){
            document.getElementById("input_in").innerHTML="<ruby>構文<rt>こうぶん</rt></ruby>が<ruby>間違<rt>まちが</rt></ruby>っています。<ruby>再確認<rt>さいかくにん</rt></ruby>して<ruby>修正<rt>しゅうせい</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_0xff == true){
            document.getElementById("input_in").innerHTML="<ruby>文字<rt>もじ</rt></ruby>のどこかが<ruby>全角<rt>ぜんかく</rt></ruby>になっています。<ruby>再確認<rt>さいかくにん</rt></ruby>して<ruby>修正<rt>しゅうせい</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_elsif == true){
            document.getElementById("input_in").innerHTML="elsif文のエラーです。<br>最初のif文のthenのつけ忘れ、elsif文の間違いがあるかもしれません<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_endif == true){
            document.getElementById("input_in").innerHTML="end if文のエラーです。<br>最後に書き忘れていませんか？<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_color == true){
            document.getElementById("input_in").innerHTML="color文のエラーです。<br>colorの中の色はあっていますか？colorのつづりを間違えていませんか？<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_next == true){
            document.getElementById("input_in").innerHTML="next文のエラーです。<br>next文を最後に付け忘れていませんか？<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_match == true){
            document.getElementById("input_in").innerHTML="for文のエラーです。<br>変数がfor文とnext文でうまく合っていないようです。確認しましょう。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_else == true){
            document.getElementById("input_in").innerHTML="else文のエラーです。<br>if文の最初にthenのつけ忘れ、else文の間違いがあるかもしれません。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_kagi1 == true){
            document.getElementById("input_in").innerHTML="不等号を書く順番を間違えていませんか？<br>(正)<=(誤)=<。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_kagi2 == true){
            document.getElementById("input_in").innerHTML="不等号を書く順番を間違えていませんか？<br>(正)>=(誤)=>。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_loop == true){
            document.getElementById("input_in").innerHTML="loop文のエラーです。<br>loopのつけ忘れ、break文のつけ忘れを起こしていませんか？<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_window == true){
            document.getElementById("input_in").innerHTML="open windowで開けていますか？<br>書いてない可能性があります。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }
          if(error_curve == true){
            document.getElementById("input_in").innerHTML="curve文のエラーです。<br>endにしていませんか？curve文はcloseです。<br>"+"エラーは"+ '<strong style="font-size: 20px; color:#f00;">'+ kode_num_len+"</strong>" +"<ruby>行目<rt>ぎょうめ</rt></ruby>にあります。";
          }

        }
      }
    }
  });//confirmおわり
}//if文おわり
sosin();//関数にvuを送信させる
});

//vuを受け取った
function sosin(){
  console.log(vu[0]);//ちゃんと取得できているか確認
  return vu[0];//bcralnit.jsに渡したいreturnを使用
}

//------------------------------------------------------------------------------実行ボタン
$("#run").on("click",function(){　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//実行ボタンを押した時
  const source_data = $("textarea.source").val();
  socket.emit("source",source_data);                                            //sorce(sorce_data)を送信(app2.jsにある)
  const str=source_data;
  let ret;
  const siki = /input/.test(str);                                               //テキスト内の文字列(今回はinput)を識別(成功はtrue,失敗はfalseを返す)するため正規表現を用いた。
  const siki2 = /clear screen/.test(str);
  const siki3 = /error/.test(str);
  //console.log(siki);
  if(siki == true){
    //console.log("input取得しました")
    document.getElementById("input_in").innerHTML="input文が実行されたので、右下の端末をクリックして直接入力してください(半角入力じゃないとエラーがでるよ)"
  }
  else if(siki2 == true){
    document.getElementById("input_in").innerHTML="clear screen文が実行されました。端末をクリックし、Enterキーを押すと終了します。"
  }
  else if(siki3 == true){
    document.getElementById("input_in").innerHTML="error文が実行されました。勝手にエラーメッセージがでますが無視してokです。"
  }
  else{
    document.getElementById("input_in").innerHTML=default2_text;
  }
  //console.log("入力したものは"+ret+"です");
  return false;                                                                 //クリックした際にページ上部に飛ばないようにする
});


//------------------------------------------------------------------------------saveボタン
var current_file_name;                                                          //saveとloadで使用する定数のためvarを使った
$("#save").on("click",function(){
  const a = document.createElement("a");　　　　　　　　　　　　　　　　　　　　　　　　//document.createElementは指定の要素名の要素を生成
  a.download= current_file_name || "yabasic_program.yab";                       //保存するためのテキストファイル作成
  const source_data = $("textarea.source").val();                               //読み込み
  a.href = 'data:text/plain;base64,'+ window.btoa(unescape(encodeURIComponent(source_data)));       //文字コードをbase64にしてテキストをその文字コードに変換,日本語対応しました
  document.body.appendChild(a);                                                 //指定した要素の子ノードのリストの最後にノードを挿入。elementは親となる要素。
  a.click();                                                                    //リンクをクリック
  a.parentElement.removeChild(a);                                               //要素を削除。elementは親ノード。childは子ノード
  return false;
});


//------------------------------------------------------------------------------開くボタン
$("#aload").on("click",function(){
  const input = document.createElement("input");                                //input要素を追加
  input.type = 'file';
  input.addEventListener("change", function(e) {
    const file = e.target.files[0];
    current_file_name = file.name;                                              //fileの名前を読み込み
    const reader = new FileReader();　　　　　　　　　　　　　　　　　　　　　　　　　　 //ファイルリーダー読み込み
    reader.addEventListener("load", function(e){                                //reader
      document.test.textare.value = reader.result;                                 //text上に表示。document.formのname.textareaのname.value
    });
    reader.readAsText(file);                                                    //file表示
  });
  document.body.appendChild(input);
  input.click();
  input.parentElement.removeChild(input);
  return false;
});

//------------------------------------------------------------------------------テキストエリア
$("textarea.source").bcralnit({                                                 //テキスト内背景色、大きさを指定
  width: '50px',
  background:'#01DFA5', //'#0B243B',                                            //テキストエリア全体背景色。初期値(#75BAFF) 背景を画像にするとアレンジ性が増しそう
  color: '#000',                                                              //テキストエリア行数番号の色(初期値は白)
});


//------------------------------------------------------------------------------チュートリアル
function startIntro(){                                                          //intro.jsを使ったチュートリアル設定
  var intro = introJs();
  intro.setOptions({
    steps:[
      {
        intro:"ようこそ！BASIC言語の学習ページへ"
      },
      {
        intro:"まずはチュートリアルの説明から入りましょう"
      },
      {
        intro:"<b>次へ</b>で次の説明に、<b>戻る</b>で前の説明に移動できます"
      },
      {
        intro:"<b>スキップ</b>ですべて飛ばすことができます"
      },
      {
        intro:"途中から見たいならば、下の丸い所をクリックすることで、任意の説明に移動できます"
      },
      {
        element:"#midasi1-1",
        intro:"<b>実行結果画面・プログラムを書く</b>について説明します"
      },
      {
        element:"#sub",
        intro:"ここはプログラムを書いて、実行ができます"
      },
      {
        element:"#textare",
        intro:"ここはプログラムを入力できるところです<br>今回は何も入力せずに'次へ'を押して下さい"
      },
      {
        element:'#run',
        intro:"ここは書いたプログラムを実行するボタンです"
      },
      {
        element:'#run',
        intro:"クリックしてみましょう<br>(クリックしたら'次へ'を押して下さい)"
      },
      {
        element:"#terminal",
        intro:"クリックするとここにプログラムの結果が表示されます"
      },
      {
        element:"#save",
        intro:"クリックすると、プログラムの保存ができます"
      },
      {
        element:"#save",
        intro:"クリックしてみましょう(クリックしたら次へを押してね)"
      },
      {
        element:"#save",
        intro:"（OKボタンがでているなら)OKボタンをクリックしてください。このパソコンのフォルダに保存されています"
      },
      {
        element:"#aload",
        intro:"このボタンはさっき保存したプログラムを表示してくれるボタンです"
      },
      {
        element:"#aload",
        intro:"クリックしてみましょう(次へを押した後に開くボタンをクリックすることを推奨)"
      },
      {
        element:"#aload",
        intro:"そうすると何か開くはずです。そこにさっき保存したファイルを見つけてOKボタンをクリックしてください(yabasic_program.yabという名前のファイル)"
      },
      {
        element:"#aload",
        intro:"表示できましたか？分からなくてもいろいろ試してみると良いでしょう"
      },
      {
        element:"#flip",
        intro:"ここは便利ツールのあるメニューバーです。活用してもらえたら幸いです"
      },
      {
        element:"#hint",
        intro:"ここはプログラムを学習するときにヒントが表示されます<br>必要ないと思ったら便利ツールから非表示にもできます"
      },
      {
        element:"#wakaru",
        intro:"ここは学習ページと連動しています。<br>問題を選択したり、用語も必要だと思ったものを載せてます。活用してください"
      },
      {
        element:"#inudayo",
        intro:"犬です。意外と重要です。<br>ちょっとしたひとことやエラーメッセージを教えてくれます。賢いです。"
      },
      {
        intro:"お疲れ様でした、チュートリアルは以上です"
      },
      {
        intro:"いろいろ試しながらプログラミングを楽しみましょう。(<b>終了</b>を押すと閉じます)"
      }
    ]
  });
  intro.start();
}

//------------------------------------------------------------------------------フローチャート
function showFlotyato(){
  var wObjballoon1	= document.getElementById("tyato0");
  if (wObjballoon1.className == "tyato0"){
  wObjballoon1.className = "balloon";
  }else{
  wObjballoon1.className = "tyato0";
  }
}

// $("tyato0").draggable();  //ドラッグ・アンド・ドロップできるかテスト



//------------------------------------------------------------------------------ページを閉じる時
                                                                                //テキスト保存されてない場合、メッセージを表示し確認させる
$(function(){

  $(window).on("beforeunload", function(){
    if(isChanged){
      return "このページを離れようとしています";
    }
  });

  $("textarea").on("keyup change", function(){
    let text_num = 0;                                                           //constは再代入不可能なためletを使った

    for (let i=0; i< $("textarea").length; i++) {
      text_num += $("textarea").eq(i).val().length;
    }

    if(text_num>0){
      isChanged = true;
    }else{
      isChanged = false;
    }
  });

  $("#save").on("click", function(){                                            //保存したらメッセージ表示しない
    isChanged = false;
  })

  $("[type=submit]").on("click", function(){　　　　　　　　　　　　　　　　　　　　   //別ページに移るだけではメッセージを表示しないようにする
    isChanged = false;
  });
});

//------------------------------------------------------------------------------reset
function reset(){

  var reset_target = document.getElementById("textare");

  $.confirm({
    icon: 'fas fa-exclamation-triangle',
    title: 'ソースコードをすべて消去します',
    content: '保存されていない場合、ソースコードは残らないので気をつけて下さい<br><br>',
    boxWidth: '30%',
    useBootstrap: false,
    type: 'red',
    typeAnimated: true,
    buttons: {
        tryAgain: {
            text: 'リセットします',
            btnClass: 'btn-red',
            action: function(){
              if(reset_target.value == ''){
                  alert('すでにリセットされています。');
              }else{
                  reset_target.value = '';
              }
            }
        },
        リセットしない: function () {
        }
    }
});
};
  window.onload = function(){
    var btn = document.getElementById('reset');//resetIdのボタンにbtnという関数を付与。
    btn.addEventListener('click',function(){
      reset();
    },false);
  };

//------------------------------------------------------------------------------できたら、できなかったら消す
$("#textare").overlay([
  {
    match :/\B\/\/([\x01-\x7E]||[^\x01-\x7E]).+/g,                     //スラッシュ二回のコメント文打った時に色が変わる仕様
    css:{'background-color' : '#F6CEE3'}
  }
]);

//------------------------------------------------------------------------------空白が全角になっているときに半角にするボタン
function zenkaku_hankaku() {

  var TA = document.getElementById("textare");
    var TAhankaku = TA.value;
    var flag2 = "";

    TAhankaku = TAhankaku.replace(/[\u3000\x20]/g, '\x20');

    mat4 = new RegExp('[' + flag2 + ']', "g");
    ta2 = TAhankaku.replace(mat4, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
    TA.value = ta2;

    $.confirm({
      title: '全角になっている空白を半角にしました',
      content: 'プログラムの文章の全角を半角にしているわけではありません。あくまで空白の部分のみです。<br><br>',
      boxWidth: '30%',
      useBootstrap: false,
      type: 'red',
      typeAnimated: true,
      buttons: {
          ok : function(){
          }
      }
  });
}

//------------------------------------------------------------------------------

function hint_kesu() {

  var HK=document.getElementById("hint556");
  var OSI=document.getElementById("osirase556");

  if(HK.style.visibility=="visible"){
    HK.style.visibility="hidden";
    OSI.innerHTML="＊非表示中です<br><br>また表示させたいときは非表示のときと同じボタンを押して下さい";
  }else{
    HK.style.visibility="visible";
    OSI.innerHTML="";
  }

}

//------------------------------------------------------------------------------

function window_reload(){
  location.reload();
}
