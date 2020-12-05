// import jQuery from "jquery";
function change_user_status() {
  var btn, user;
  btn = $('.btn-js');
  btn.on('click', function (event) {
    $(".monkey").css("display", "block");
    $(".error").css("display", "none");
    event.preventDefault();
    var btn = event.target;
    user = $('#user-js').val();
    $.ajax({
      type: "POST",
      url: 'http://127.0.0.1:8000/change_user_status/',
      data: {
        "user": user
      },
      success: function success(result) {
        if (result['response']['code'] == 200) {
          $(".monkey").css("display", "none");
          $('.results__description').css({
            'display': 'block'
          });
          $('.btn-js').html(result['response']['btn_summary'])
          $('#user-js').val(`${result['response']['username']}-${result['response']['status']}`)
          $('#results').html(`${result['response']['username']}: ${result['response']['status']}`);

        } else {
          $(".monkey").css("display", "none");
          $('.results__description').css({
            'display': 'block'
          });
          $('#user-js').val(`${result['response']['username']}-${result['response']['status']}`)
          $('#results').html(`${result['response']['username']}: ${result['response']['status']}`);
          $('.btn-js').html(result['response']['btn_summary'])
        }
      },
      error: function error(jqXHR, exception) {
        $(".monkey").css("display", "none");
        $(".error").css("display", "flex");
        $(".error__text").html('Возникла непредвиденная ошибка, пожалуйста, откройте консоль разработчика и отправьте ответ Аюру.');
      }
    });
    return false;
  });
}

change_user_status();