$("#samp").on("change", function() {                                                                                            //changeでセレクトボックス内選択より実行できる
  var obj=$(this);                                                                                                              //省略させたいため
  if(obj.val()=="1"){                                                                                                           //optionのvalueが1のとき
  $.ajax( {                                                                                                                     //ローカルファイル呼び出しに便利なajaxを用いた
    url: 'samples/demo.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'point/point1.html',
    dataType : 'html',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {                                                                     //ここはinput_inの中に表示
    url: 'point/input1.html',
    dataType : 'html',
    success: function( data ) {
      $( "#input_in" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

  if(obj.val()=="2"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/print1.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'point/point2.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

  if(obj.val()=="3"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/asc.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'point/point3.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="4"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/purasu.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'point/point4.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

  if(obj.val()=="5"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/helloworld.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'point/point5.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

  if(obj.val()=="6"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/foo_test.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'point/point6.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="7"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/foo_test2.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="8"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/loop.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="9"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/open2.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="10"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/dim.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="11"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/left1.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="12"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/sin1.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="13"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/system1.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="14"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/test_sample.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="15"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/clearscreen.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="16"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/openwindow.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="17"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/circle.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="18"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/box.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="19"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/triangle.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="20"){                                                                                                           //optionのvalueが2のとき
  $.ajax( {
    url: 'samples/color.yab',
    dataType : 'text',
    success: function( data ) {
      $( "#textare" ).val( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

  });


$("#kousiki").on("change",function(){
  var obj=$(this);                                                                                                              //黒板のようなものに表示する
  if(obj.val()=="a"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki1.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-1.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

  if(obj.val()=="b"){                                                                                                                 //b
  $.ajax( {
    url: 'kousiki/kousiki2.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-2.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

  if(obj.val()=="c"){                                                                                                               //c
  $.ajax( {
    url: 'kousiki/kousiki3.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-3.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

  if(obj.val()=="d"){                                                                                                                 //d
  $.ajax( {
    url: 'kousiki/kousiki3-1.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-3.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="e"){                                                                                                                 //e
  $.ajax( {
    url: 'kousiki/kousiki4.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-4.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="f"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki5.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-5.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="g"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki6.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-6.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="h"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki6-1.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-6.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="i"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki7.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-7.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="j"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki8.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-8.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="k"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki9.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-9.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="l"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki10.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-10.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="m"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki11.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-11.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="n"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki12.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-12.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="o"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki13.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-13.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="p"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki14.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-14.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="q"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki15.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-15.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="r"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki16.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-16.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="s"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki17.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-17.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="t"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki18.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-18.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="u"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki19.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-19.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="v"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki20.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-20.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="w"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki20-1.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-20.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="x"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki21.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-21.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="y"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki22.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-22.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="z"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki23.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-23.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="aa"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki24.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-24.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="bb"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki25.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-25.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="cc"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki26.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-26.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="dd"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki27.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-27.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }
  if(obj.val()=="ee"){                                                                                                           //公式集のようなものを表示
  $.ajax( {
    url: 'kousiki/kousiki28.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kousiki/point1-28.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

  });


  $("#kadai").on("change",function(){                                                                                     //問題を表示
    var obj=$(this);
    if(obj.val()=="a"){                                                                                                   //a
    $.ajax( {
      url: 'kadai/kadai1.txt',
      dataType : 'text',
      success: function( data ) {
        $( "#osierun" ).html( data );
        $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
      },
      error: function( data ) {
        $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
      }
    });
    $.ajax( {
      url: 'kadai/point1_1.txt',
      dataType : 'text',
      success: function( data ) {
        $( "#hint556" ).html( data );
        $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
      },
      error: function( data ) {
        $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
      }
    });
  }

  if(obj.val()=="b"){                                                                                                     //b
  $.ajax( {
    url: 'kadai/kadai2.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#osierun" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  $.ajax( {
    url: 'kadai/point1_2.txt',
    dataType : 'text',
    success: function( data ) {
      $( "#hint556" ).html( data );
      $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
    },
    error: function( data ) {
      $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
    }
  });
  }

    if(obj.val()=="c"){                                                                                                     //c
    $.ajax( {
      url: 'kadai/kadai3.txt',
      dataType : 'text',
      success: function( data ) {
        $( "#osierun" ).html( data );
        $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
      },
      error: function( data ) {
        $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
      }
    });
    $.ajax( {
      url: 'kadai/point1_3.txt',
      dataType : 'text',
      success: function( data ) {
        $( "#hint556" ).html( data );
        $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
      },
      error: function( data ) {
        $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
      }
    });
  }
  });

  $("#radio").on("click", function() {                                                                                            //changeでセレクトボックス内選択より実行できる                                                                                                           //optionのvalueが1のとき
    $.ajax( {                                                                                                                     //ローカルファイル呼び出しに便利なajaxを用いた
      url: 'samples/term1.yab',
      dataType : 'text',
      success: function( data ) {
        $( "#purog" ).html( data );
        $( '#sample-result' ).html( '<hr/><font color="blue">読み込みOK(IE,FireFox,SafariはOK)</font><hr/>' );
      },
      error: function( data ) {
        $( '#sample-result' ).html( '<font color="red">読み込みNG(ChromeではNG)</font>' );
      }
    });
  });


  window.addEventListener('DOMContentLoaded', function () {                     //サイト読み込み時、select optionの”サンプルを表示”をデフォにする
  let opt_defo = document.getElementsByTagName('option');                       //DOMContentLoadedはonloadと同じ。早く動作できるので使用
  opt_defo[0].selected = true;                                                  //[0]はoptionの配列中の最初のため
  opt_defo[36].selected = true;  //HTMLのoptionが増えたら数を変えよう!!!
  opt_defo[40].selected = true;
  //opt_defo[15].selected = true;
  return;
  });
