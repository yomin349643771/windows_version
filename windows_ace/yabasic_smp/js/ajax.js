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
    url: 'samples/term1.yab',
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
  opt_defo[6].selected = true;  //HTMLのoptionが増えたら数を変えよう!!!
  opt_defo[10].selected = true;
  //opt_defo[15].selected = true;
  return;
  });
