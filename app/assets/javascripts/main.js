// Animer les listes
$(function() {
  $('.card').hide();
  $('.tabs').each(function(){
    $(this).css('cursor','pointer').click(function(){
      $(this).next().toggle();
    })
  });
});