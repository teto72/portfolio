$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    let speed = 2000;
    //リンク元を取得
    let href= $(this).attr("href");
    //リンク先を取得
    let target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    let position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position});
    return false;
  });
});

// 'use strict';
// {
//   const open = document.getElementById('open');
//   const modal = document.getElementById('modal');
//   const mask = document.getElementById('mask');

//   open.addEventListener('click', function(){
//     modal.classList.remove('hidden');
//     mask.classList.remove('hidden');
//   });
// }

$(function(){
  $('#open').click(function(){
    
  })
})
