$(function() {
  $('.contactForm').validator({focus: false}).on('submit', function (e) {
    var $form = $(this);
    if (e.isDefaultPrevented()) {
      // handle the invalid form...
    } else {
      e.preventDefault();
      $form.find("[type=submit]").prop("disabled", true).button('loading'); //prevent submit behaviour and display preloading

       // get values from FORM
      var form               = $form.find('[type=submit]').val(),
          name               = $form.find('[name=name]').val(),
          email              = $form.find('[name=email]').val(),
          phone              = $form.find('[name=phone]').val(),
          message            = $form.find('[name=message]').val(),
          time               = $form.find('[name=time]').val(),
          method             = $form.find('[name=method]').val(),
          range1             = $form.find('[name=range1]').val(),
          range2             = $form.find('[name=range2]').val(),
          range3             = $form.find('[name=range3]').val(),
          range4             = $form.find('[name=range4]').val(),
          range5             = $form.find('[name=range5]').val(),
          range6             = $form.find('[name=range6]').val(),
          range7             = $form.find('[name=range7]').val(),
          range8             = $form.find('[name=range8]').val(),
          range9             = $form.find('[name=range9]').val(),
          period             = new Array(),
          material           = new Array(),
          skeleton           = new Array(),
          foundation         = new Array(),
          facade             = new Array(),
          overlap            = new Array(),
          roofskeleton       = new Array(),
          roof               = new Array();

      $form.find("[name^=\"period\"]:checked").each(function() {
        if ($(this).prop("checked")) {
          var radioText = $(this).siblings().text();

          period.push($.trim(radioText));
        }
      });

      $form.find("[name^=\"material\"]:checked").each(function() {
        if ($(this).prop("checked")) {
          var radioText = $(this).siblings().text();

          material.push($.trim(radioText));
        }
      });

      $form.find("[name^=\"foundation\"]:checked").each(function() {
        if ($(this).prop("checked")) {
          var radioText = $(this).siblings().text();

          foundation.push($.trim(radioText));
        }
      });

      $form.find("[name^=\"skeleton\"]:checked").each(function() {
        if ($(this).prop("checked")) {
          var radioText = $(this).siblings().text();

          skeleton.push($.trim(radioText));
        }
      });

      $form.find("[name^=\"facade\"]:checked").each(function() {
        if ($(this).prop("checked")) {
          var radioText = $(this).siblings().text();

          facade.push($.trim(radioText));
        }
      });

      $form.find("[name^=\"overlap\"]:checked").each(function() {
        if ($(this).prop("checked")) {
          var radioText = $(this).siblings().text();

          overlap.push($.trim(radioText));
        }
      });

      $form.find("[name^=\"roofskeleton\"]:checked").each(function() {
        if ($(this).prop("checked")) {
          var radioText = $(this).siblings().text();

          roofskeleton.push($.trim(radioText));
        }
      });

      $form.find("[name^=\"roof\"]:checked").each(function() {
        if ($(this).prop("checked")) {
          var radioText = $(this).siblings().text();

          roof.push($.trim(radioText));
        }
      });

      $.ajax({
        url: "./mail/mail.php",
        type: "POST",
        data: {
          form: $.trim(form),
          name: $.trim(name),
          phone: $.trim(phone),
          email: $.trim(email),
          method: $.trim(method),
          message: $.trim(message),
          time: $.trim(time),
          period: period,
          material: material,
          range1: range1,
          range2: range2,
          range3: range3,
          range4: range4,
          range5: range5,
          range6: range6,
          range7: range7,
          range8: range8,
          range9: range9,
          fondation: foundation,
          skeleton: skeleton,
          facade: facade,
          overlap: overlap,
          roofskeleton: roofskeleton,
          roof: roof,
        },
        cache: false,
        success: function(response) {
          // Success message
          $form.find('.success').html("<div class='alert alert-success'>");
          $form.find('.success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $form.find('.success > .alert-success')
            .append("<strong>Cообщение успешно отправлено.</strong>");
          $form.find('.success > .alert-success')
            .append('</div>');
          // remove prevent submit behaviour and disable preloading
          $form.find("[type=submit]").prop("disabled", false).button('reset');  
          document.location.href="./success.html";
          //clear all fields
          $form.trigger("reset");
        },
        error: function() {
          // Fail message
          $form.find('.success').html("<div class='alert alert-danger'>");
          $form.find('.success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $form.find('.success > .alert-danger').append("<strong>Письмо не отправлено. Пожалуйста, проверьте ваше интернет соединения и попробуйте еще раз!");
          $form.find('.success > .alert-danger').append('</div>');

          // remove prevent submit behaviour and disable preloading
          $form.find("[type=submit]").prop("disabled", false).button('reset'); 

          //clear all fields
          //$form.trigger("reset");
        },
      });
    }
  }); 
});
