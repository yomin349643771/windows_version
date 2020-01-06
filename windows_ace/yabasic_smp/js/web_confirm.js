//多くなりそうだったので分ける

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
$("#key_han").click(function(){
  $.confirm({
      title: 'キーボードのキーを<ruby>確認<rt>かくにん</rt></ruby>しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '<strong>ここではこのキーを<ruby>押<rt>お</rt></ruby>しても<ruby>反応<rt>はんのう</rt></ruby>しません</strong>　テキスト<ruby>画面<rt>がめん</rt></ruby>で<ruby>試<rt>ため</rt></ruby>しましょう<br>' +
               '※※このページでは<ruby>半角<rt>はんかく</rt></ruby>(a,i,u,e,o)で<ruby>使<rt>つか</rt></ruby>います。<ruby>全角<rt>ぜんかく</rt></ruby>(あ、い、う、え、お)はコメントで<ruby>使用<rt>しよう</rt></ruby>しましょう<br><br>'+
               'この<ruby>画面<rt>がめん</rt></ruby>は"閉じる"をクリックで<ruby>閉<rt>と</rt></ruby>じます <br> ',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['win'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'ボタンが押されました.',
                });
              }
          },
          閉じる: {
              keys: [''],

          },
      }
  });
});
$("#key_1").click(function(){
  $.confirm({
      title: 'キーボードのキーを<ruby>確認<rt>かくにん</rt></ruby>しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '<ruby>太字<rt>ふとじ</rt></ruby>で<ruby>指定<rt>してい</rt></ruby>しているキーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい <br><br>' +
               '<strong style="font-size: 20px;">1</strong>キーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい<br><br>'+
               'この<ruby>画面<rt>がめん</rt></ruby>は"閉じる"をクリックで<ruby>閉<rt>と</rt></ruby>じます <br> ',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['1'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>1</strong>キーが<ruby>押<rt>お</rt></ruby>されました. <br><br>' +
                          '※※<ruby>shift<rt>しふと</rt></ruby>キーを<ruby>押<rt>お</rt></ruby>しながら1キーを<ruby>押<rt>お</rt></ruby>すと!(エクスクラメーションマーク)になります。',
                });
              }
          },
          閉じる: {
              keys: [''],


          },
      }
  });
});
$("#key_2").click(function(){
  $.confirm({
      title: 'キーボードのキーを<ruby>確認<rt>かくにん</rt></ruby>しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '<ruby>太字<rt>ふとじ</rt></ruby>で<ruby>指定<rt>してい</rt></ruby>しているキーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい <br><br>' +
               '<strong style="font-size: 20px;">2</strong>キーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい<br><br>'+
               'この<ruby>画面<rt>がめん</rt></ruby>は"閉じる"をクリックで<ruby>閉<rt>と</rt></ruby>じます <br> ',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['2'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>2</strong>キーが<ruby>押<rt>お</rt></ruby>されました. <br><br>'+
                          '※※<ruby>shift<rt>しふと</rt></ruby>キーを<ruby>押<rt>お</rt></ruby>しながら2キーを<ruby>押<rt>お</rt></ruby>すと"(ダブルクォーテーション)になります。',
                });
              }
          },
          閉じる: {
              keys: [''],

          },
      }
  });
});
$("#key_3").click(function(){
  $.confirm({
      title: 'キーボードのキーを<ruby>確認<rt>かくにん</rt></ruby>しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '<ruby>太字<rt>ふとじ</rt></ruby>で<ruby>指定<rt>してい</rt></ruby>しているキーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい <br><br>' +
               '<strong style="font-size: 20px;">3</strong>キーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい<br><br>'+
               'この<ruby>画面<rt>がめん</rt></ruby>は"閉じる"をクリックで<ruby>閉<rt>と</rt></ruby>じます <br> ',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['3'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>3</strong>キーが<ruby>押<rt>お</rt></ruby>されました. <br><br>'+
                          '※※<ruby>shift<rt>しふと</rt></ruby>キーを<ruby>押<rt>お</rt></ruby>しながら3キーを<ruby>押<rt>お</rt></ruby>すと#(シャープ)になります。',
                });
              }
          },
          閉じる: {
              keys: [''],

          },
      }
  });
});
$("#key_4").click(function(){
  $.confirm({
      title: 'キーボードのキーを<ruby>確認<rt>かくにん</rt></ruby>しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '<ruby>太字<rt>ふとじ</rt></ruby>で<ruby>指定<rt>してい</rt></ruby>しているキーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい <br><br>' +
               '<strong style="font-size: 20px;">4</strong>キーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい<br><br>'+
               'この<ruby>画面<rt>がめん</rt></ruby>は"閉じる"をクリックで<ruby>閉<rt>と</rt></ruby>じます <br> ',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['4'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>4</strong>キーが<ruby>押<rt>お</rt></ruby>されました. <br><br>'+
                          '※※<ruby>shift<rt>しふと</rt></ruby>キーを<ruby>押<rt>お</rt></ruby>しながら4キーを<ruby>押<rt>お</rt></ruby>すと$(ドル)になります。',
                });
              }
          },
          閉じる: {
              keys: [''],

          },
      }
  });
});
$("#key_5").click(function(){
  $.confirm({
      title: 'キーボードのキーを<ruby>確認<rt>かくにん</rt></ruby>しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '<ruby>太字<rt>ふとじ</rt></ruby>で<ruby>指定<rt>してい</rt></ruby>しているキーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい <br><br>' +
               '<strong style="font-size: 20px;">5</strong>キーを<ruby>押<rt>お</rt></ruby>して<ruby>下<rt>くだ</rt></ruby>さい<br><br>'+
               'この<ruby>画面<rt>がめん</rt></ruby>は"閉じる"をクリックで<ruby>閉<rt>と</rt></ruby>じます <br> ',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['5'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>5</strong>キーが<ruby>押<rt>お</rt></ruby>されました. <br><br>'+
                          '※※<ruby>shift<rt>しふと</rt></ruby>キーを<ruby>押<rt>お</rt></ruby>しながら5キーを<ruby>押<rt>お</rt></ruby>すと%(パーセント)になります。',
                });
              }
          },
          閉じる: {
              keys: [''],

          },
      }
  });
});
$("#key_6").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">6</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['6'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>6</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながら6キーを押すと&(アンド)になります。',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_7").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">7</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['7'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>7</strong>ボタンが押されました.<br>'+
                          "(追加)shiftキーを押しながら7キーを押すと''(シングルクォーテーション)になります。",
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_8").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">8</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['8'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>8</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながら8キーを押すと(になります。',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_9").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">9</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['9'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>9</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながら9キーを押すと)になります。',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_0").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">0</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['0'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>0</strong>ボタンが押されました.<br>',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_haihun").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>'+
               '(追加)shiftキーを押しながら-キーを押すと=(イコール)になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['-'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>-</strong>ボタンが押されました.<br>',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_yama").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>'+
               '(追加)shiftキーを押しながら^キーを押すと~になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['^'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>^</strong>ボタンが押されました.<br>',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_enn").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>'+
               '(追加)shiftキーを押しながら￥キーを押すと|になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['\\'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>￥</strong>ボタンが押されました.<br>',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_back").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>' +
                '文字を消したいときに使います',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: [''],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'押すキーコマンドがない時用',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});

//次の行　aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

$("#key_q").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">Q</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['q'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>Q</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_w").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">W</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['w'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>W</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_e").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">E</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['e'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>E</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_r").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">R</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['R'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>R</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_t").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">T</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['t'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>T</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_y").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">Y</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['y'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>Y</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_u").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">U</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['u'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>U</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_i").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">I</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['i'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>I</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});$("#key_o").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">O</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['o'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>O</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_p").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">P</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['p'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>P</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_atto").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>'+
                '(追加)shiftキーを押しながら@キーを押すと`になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['@'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'押すキーコマンドがない時用',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_kagi_1").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>' +
                '(追加)shiftキーを押しながら[キーを押すと{になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['['],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'押すキーコマンドがない時用',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_enter").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">ENTER</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['enter'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>ENTER</strong>ボタンが押されました.',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});

//次の行　aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

$("#key_a").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">A</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['a'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>A</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_s").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">S</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['s'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>S</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_d").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">D</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['d'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>D</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_f").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">F</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['f'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>F</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_g").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">G</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['g'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>G</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_h").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">H</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['h'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>H</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_j").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">J</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['j'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>J</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_k").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">K</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['k'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>K</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_l").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">L</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['l'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>L</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_semicoron").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>' +
                '(追加)shiftキーを押しながら;キーを押すと+になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: [';'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>;</strong>ボタンが押されました.',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_coron").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>' +
                '(追加)shiftキーを押しながら:キーを押すと*になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: [':'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>:</strong>ボタンが押されました.',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_kagi_2").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>' +
                '(追加)shiftキーを押しながら]キーを押すと}になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: [']'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>]</strong>ボタンが押されました.',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});

//次の行　aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

$("#key_shift_1").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">SHIFT</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['shift'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>SHIFT</strong>ボタンが押されました.',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_z").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">Z</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['z'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>Z</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_x").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">X</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['x'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>X</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_c").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">C</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['c'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>C</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_v").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">V</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['v'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>V</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_b").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">B</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['b'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>B</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_n").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">N</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['n'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>N</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_m").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong style="font-size: 20px;">M</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['m'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>M</strong>ボタンが押されました.<br>'+
                          '(追加)shiftキーを押しながらキー入力で大文字になります',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_tenn").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>' +
                '(追加)shiftキーを押しながら,キーを押すと<になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: [','],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>,</strong>ボタンが押されました.<br>',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_dotto").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>' +
                '(追加)shiftキーを押しながら.キーを押すと>になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['.'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>.</strong>ボタンが押されました.<br>',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_surashu").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>' +
                '(追加)shiftキーを押しながら/キーを押すと?になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['/'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>/</strong>ボタンが押されました.<br>',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_backsurashu").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
                '<strong>ここではこのキーを押しても反応しません</strong>テキスト画面で試しましょう<br>' +
                '(追加)shiftキーを押しながら\\キーを押すと_になります。',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['\\'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>\\</strong>ボタンが押されました.<br>',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_shift_2").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">SHIFT</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['shift'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>SHIFT</strong>ボタンが押されました.',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});

//次の行　aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

$("#key_ctrl_1").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">CTRL</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['ctrl'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>CTRL</strong>ボタンが押されました.',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_space").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">SPACE</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['space'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>SPACE</strong>ボタンが押されました.',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
$("#key_ctrl_2").click(function(){
  $.confirm({
      title: '指定するキーボードのキーを入力しよう',
      boxWidth: '30%',
      useBootstrap: false,
      content: '指定するキーを入力して下さい。この画面を閉じたいなら下をクリックして下さい <br> ' +
               '<strong style="font-size: 20px;">CTRL</strong>ボタンを押して下さい',
      buttons: {
          yes: {
              isHidden: true, // hide the button
              keys: ['ctrl'],
              action: function () {
                $.alert({
                  title: false,
                  boxWidth: '30%',
                  useBootstrap: false,
                  content:'<strong>CTRL</strong>ボタンが押されました.',
                });
              }
          },
          no: {
              keys: [''],
              action: function () {
                  $.alert({
                    title: false,
                    boxWidth: '30%',
                    useBootstrap: false,
                    content: '終了します.'
                });
              }
          },
      }
  });
});
