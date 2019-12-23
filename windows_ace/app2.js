//&cls&node %0 %1&pause > nul&exit
 var express = require("express");
 var app = express();
 var http = require("http").Server(app);
 http.listen(8080);
const io = require("socket.io")(http);                                            //ソケット通信。v2.0.3。vはversionのこと
// const exec = require('child_process').exec;                                       //execのシェルコマンドを用いるためのモジュール
const fs = require("fs");                                                         //ファイルの読み書きを行うためのモジュール
//const expressWs = require("express-ws")(app);
// const pty = require("pty.js");
// const pty = require("node-pty");
//var child_process = require('child_process');
var os = require('os');
var out_text;

var os_hanbetu = os.platform();
console.log(os_hanbetu);
// console.log(os_hanbetu);
//osを識別するために使用
if(os_hanbetu=="win32"){
  console.log("windowsに接続しています");
}else if(os_hanbetu=="darwin"){
  console.log("macに接続しています");
}else if(os_hanbetu=="linux"){
  console.log("linuxに接続しています");
}else{
  console.log("その他のOSに接続しています");
}

io.sockets.on("connection",socket => {
  console.log("webpage_connection");                                            //サイトにつながった時、表示

socket.on("source",function(d){
  fs.writeFile("source.yab",d,function(err){                             //テキストエリアに書いたプログラムをdataに格納。source.yabに書き込ませる。
    if(err!=null)console.log(err);                                          //なにも書いていなければエラー
  });

  if(os_hanbetu=="linux"){
    const pty = require("node-pty");
    var term =pty.spawn('./yabasic',["source.yab"],{
      name:"xterm-256color",
      cols:80,
      rows:24,
      cwd: process.env.PWD,
      env: process.env
    });
    term.on('data', d => socket.emit('data', d));
    socket.on('data', d => term.write(d));
    socket.on('disconnect', () => term.destroy());
  }else if(os_hanbetu=="win32"){
    var pty = require("node-pty");
    var term = pty.spawn('C:\\Users\\student\\Downloads\\windows_version-master\\windows_ace\\yabasic.exe',["source.yab"],{//use名書き換える(studentの部分)
      handleFlowControl: true,
      name:"xterm-256color",
      cols:80,
      rows:24,
      cwd: process.env.HOME || process.cwd(),
      env: process.env
    });
    term.on('data', d => socket.emit('data', d));
    socket.on('data', d => term.write(d));
    socket.on('disconnect', () => term.destroy());
  }else if(os_hanbetu=="darwin"){
    const pty = require("pty.js");
    var term =pty.spawn('./yabasic',["source.yab"],{
      name:"xterm-256color",
      cols:80,
      rows:24
    });
    term.on('data', d => socket.emit('data', d));
    socket.on('data', d => term.write(d));
    socket.on('disconnect', () => term.destroy());
  }
  else{
    console.log("そのOSに対応していません");
  }
});

});
// app.use(express.static(__dirname));
// app.get("/", function(req, res) {               // ルートへのアクセス要求があったら
  // res.sendFile(__dirname + "/yabasic_smp/index3.html");      // index.html を配信
// });
  //socket.on("source",function(data){
    //console.log(data);
      //fs.witeはここの位置

       //exec('./yabasic source.yab', (err, stdout, stderr) => {                  //err[エラー]、stdout[標準出力文字列]、stderr[標準エラー出力文字列]
      //io.on("conect", socket=>{
      //let term = pty.fork(
        //process.env.SHELL || 'sh',[],{
          //name : fs.existsSync('/usr/share/terminfo/x/xterm+256color')
            //? 'xterm+256color'
            //: 'xterm',
          //cols : 80,
          //rows : 24,
          //cwd : process.env.HOME
        //});
        //let term=pty.spawn(shell,[],{
          //name:'xterm-color',
          //cols:80,
          //rows:30,
          //cwd:process.env.HOME,
          //env:process.env
        //});
        //term.on("date",date => socket.emit("date",date));
        //console.log(date);
        //console.log(process.env.SHELL);
        //console.log(process.env.HOME);
        //console.log(process.env.NODE_YABASIC);                                  //NODE_YABASIC='/home/yoshiga/web_basic/yoshiga/yabasic'
        //console.log(process.env.NODE_FILE);                                     //NODE_FILE='/home/yoshiga/web_basic/yoshiga'

       //if (err) {
        //console.log(err);
        //term.on('compile_err', stderr => socket.emit('compile_err', stderr));
        //socket.on('disconnect', () => term.destroy())
        //socket.emit("compile_err",stderr)
        //}
        //else{
          //console.log("エラー無し");
          //out_text=stdout;
          //console.log(out_text);
          //term.on('source_out', out_text => socket.emit('source_out', out_text));
          //socket.emit("source_out",out_text);

        //}
      //});
      //});
　//});

// x11を制御したい、できない
// var x11 = require('x11');
//
// var Exposure = x11.eventMask.Exposure;
// var PointerMotion = x11.eventMask.PointerMotion;
//
// x11.createClient(function(err, display) {
//   if (!err) {
//     var X = display.client;
//     var root = display.screen[0].root;
//     var wid = X.AllocID();
//     X.CreateWindow(
//       wid,
//       root, // new window id, parent
//       0,
//       0,
//       500,
//       500, // x, y, w, h
//       0,
//       0,
//       0,
//       0, // border, depth, class, visual
//       { eventMask: Exposure | PointerMotion } // other parameters
//     );
//     X.MapWindow(wid);
//     var gc = X.AllocID();
//     X.CreateGC(gc, wid);
//     var white = display.screen[0].white_pixel;
//     var black = display.screen[0].black_pixel;
//     var cidBlack = X.AllocID();
//     var cidWhite = X.AllocID();
//     X.CreateGC(cidBlack, wid, { foreground: black, background: white });
//     X.CreateGC(cidWhite, wid, { foreground: white, background: black });
//     X.on('event', function(ev) {
//       if (ev.type == 12) {
//         X.PolyFillRectangle(wid, cidWhite, [0, 0, 500, 500]);
//         X.PolyText8(wid, cidBlack, 50, 50, ['Hello, Node.JS!']);
//       }
//     });
//     X.on('error', function(e) {
//       console.log(e);
//     });
//   } else {
//     console.log(err);
//   }
// });


//io.on("conect", socket=>{
//let term = pty.spawn('bash',[],{
//name: 'xterm-256color',
//cols: 80,
//rows: 24
//});
//term.on('data', data => socket.emit('data', data));
//socket.on('data', data => term.write(data));
//socket.on('disconnect', () => term.destroy())
//});
