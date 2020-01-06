const socket=io.connect("http://" + location.host);

var term = new Terminal();                                                      //ターミナルを起動
//var socket = io();
term.open(document.getElementById('terminal'));                                 //htmlのところにターミナルを開かせる(javascriptでは開いて見えないので、htmlで見える化させるため)　
term.on('data', d => socket.emit('data', d));                                   //ターミナルのデータをソケット通信
socket.on('data', d => term.write(d));

socket.on("data",function(d){
  document.getElementById("text").style.color="#000";                          //正常に実行できたら文字の色を黒に
  console.log(d);
});


$("#run").on("click",function(){　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//実行ボタンを押した時
  const source_data = $("textarea.source").val();
  socket.emit("source",source_data);                                            //sorce(sorce_data)を送信(app2.jsにある)
  const str=source_data;
  let ret;
  const siki = /input/.test(str);                                               //テキスト内の文字列(今回はinput)を識別(成功はtrue,失敗はfalseを返す)するため正規表現を用いた。
  //console.log(siki);
  if(siki == true){
    //console.log("input取得しました")
    document.getElementById("input_in").innerHTML="input文が実行されたので、上の端末をクリックして直接入力してください(半角入力じゃないとエラーがでるよ)"
  }
  else{
    document.getElementById("input_in").innerHTML=default2_text;
  }
  //console.log("入力したものは"+ret+"です");
  return false;                                                                 //クリックした際にページ上部に飛ばないようにする
});

// $("textarea.source").bcralnit({                                                 //テキスト内背景色、大きさを指定
//   width: '50px',
//   background:'#01DFA5', //'#0B243B',                                            //テキストエリア全体背景色。初期値(#75BAFF) 背景を画像にするとアレンジ性が増しそう
//   color: '#000',                                                              //テキストエリア行数番号の色(初期値は白)
//
// });
