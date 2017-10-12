<?php

  if (is_file('lib/class.phpmailer.php')) {
    require_once("lib/class.phpmailer.php");
  }
  
  if (is_file('lib/class.smtp.php')) {
    require_once("lib/class.smtp.php");
  }
  
  if (is_file('lib/newsletter.php')) {
    require_once("lib/newsletter.php");
  }

  $http_host = $_SERVER["HTTP_HOST"];
  $body = "";
  $data = array();

  if ( substr($http_host, 0, 4)=="www.") {
    $host_name = substr($http_host, 4);
  } else {
    $host_name = $http_host;
  }
  if (isset($_SERVER["HTTP_REFERER"])) {
    $http_referer = $_SERVER["HTTP_REFERER"];
  } else {
    $http_referer = "";
  }
  define ("HTTP_SERVER", "http://" . $http_host . "/");
  define ("HOST_NAME", $host_name);
  define ("HTTP_REFERER", $http_referer);
  $post = array( 
    "host_name"     => HOST_NAME,
    "host_dir"      => HTTP_SERVER,
    "host_referer"  => HTTP_REFERER
  );

  $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

  if (!$_POST) {
    echo "Форма пустая!";
    exit;
  }
  
  //header("Content-Type: text/html; charset=utf-8");
  //echo "<pre>";
  //var_dump($_POST);
  //echo "</pre>";
  //exit;

  if ( (!empty($_POST["form"])) && (isset($_POST["form"])) ) {
    $post["user_form"] = $_POST["form"];

    $stack = array(
      "key"   => "Форма: ",
      "value" => $post["user_form"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["email"])) && (isset($_POST["email"])) ) {
    $post["user_email"] = $_POST["email"];
    $stack = array(
      "key"   => "Email: ",
      "value" => $post["user_email"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["phone"])) && (isset($_POST["phone"])) ) {
    $post["user_phone"] = $_POST["phone"];
    $stack = array(
      "key"   => "Телефон: ",
      "value" => $post["user_phone"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["name"])) && (isset($_POST["name"])) ) {
    $post["user_name"] = $_POST["name"];
    $stack = array(
      "key"   => "Имя: ",
      "value" => $post["user_name"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["message"])) && (isset($_POST["message"])) ) {
    $post["user_message"] = $_POST["message"];
    $stack = array(
      "key"   => "Сообщение: ",
      "value" => $post["user_message"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["method"])) && (isset($_POST["method"])) ) {
    $post["user_method"] = $_POST["method"];
    $stack = array(
      "key"   => "Как связаться: ",
      "value" => $post["user_method"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["time"])) && (isset($_POST["time"])) ) {
    $post["user_time"] = $_POST["time"];
    $stack = array(
      "key"   => "Удобное время: ",
      "value" => $post["user_time"]
    );
    array_push($data, $stack);
  }

  if ( !empty($_POST["period"])  && (isset($_POST["period"])) ) {
    if (is_array($_POST['period'])) {
      $post["period"] = implode(", ", $_POST["period"]);
    } else {
      $post["period"] = $_POST["period"];
    }
    $stack = array(
      "key"   => "Когда позвонить: ",
      "value" => $post["period"]
    );
    array_push($data, $stack);
  }





  if ( !empty($_POST["fondation"])  && (isset($_POST["fondation"])) ) {
    if (is_array($_POST['fondation'])) {
      $post["fondation"] = implode(", ", $_POST["fondation"]);
    } else {
      $post["fondation"] = $_POST["fondation"];
    }
    $stack = array(
      "key"   => "Тип фундамента: ",
      "value" => $post["fondation"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["range1"])) && (isset($_POST["range1"])) ) {
    $post["user_range1"] = $_POST["range1"];
    $stack = array(
      "key"   => "Квадратура фундамента: ",
      "value" => $post["user_range1"]
    );
    array_push($data, $stack);
  }

  if ( !empty($_POST["skeleton"])  && (isset($_POST["skeleton"])) ) {
    if (is_array($_POST['skeleton'])) {
      $post["skeleton"] = implode(", ", $_POST["skeleton"]);
    } else {
      $post["skeleton"] = $_POST["skeleton"];
    }
    $stack = array(
      "key"   => "Материал каркаса: ",
      "value" => $post["skeleton"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["range2"])) && (isset($_POST["range2"])) ) {
    $post["user_range2"] = $_POST["range2"];
    $stack = array(
      "key"   => "Квадратура каркаса: ",
      "value" => $post["user_range2"]
    );
    array_push($data, $stack);
  }


  if ( !empty($_POST["facade"])  && (isset($_POST["facade"])) ) {
    if (is_array($_POST['facade'])) {
      $post["facade"] = implode(", ", $_POST["facade"]);
    } else {
      $post["facade"] = $_POST["facade"];
    }
    $stack = array(
      "key"   => "Материал фасада: ",
      "value" => $post["facade"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["range3"])) && (isset($_POST["range3"])) ) {
    $post["user_range3"] = $_POST["range3"];
    $stack = array(
      "key"   => "Квадратура фасада: ",
      "value" => $post["user_range3"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["range4"])) && (isset($_POST["range4"])) ) {
    $post["user_range4"] = $_POST["range4"];
    $stack = array(
      "key"   => "Площадь первого этажа: ",
      "value" => $post["user_range4"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["range5"])) && (isset($_POST["range5"])) ) {
    $post["user_range5"] = $_POST["range5"];
    $stack = array(
      "key"   => "Площадь второго этажа: ",
      "value" => $post["user_range5"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["range6"])) && (isset($_POST["range6"])) ) {
    $post["user_range6"] = $_POST["range6"];
    $stack = array(
      "key"   => "Высота этажа: ",
      "value" => $post["user_range6"]
    );
    array_push($data, $stack);
  }

  if ( !empty($_POST["overlap"])  && (isset($_POST["overlap"])) ) {
    if (is_array($_POST['overlap'])) {
      $post["overlap"] = implode(", ", $_POST["overlap"]);
    } else {
      $post["overlap"] = $_POST["overlap"];
    }
    $stack = array(
      "key"   => "Тип перекрытия: ",
      "value" => $post["overlap"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["range7"])) && (isset($_POST["range7"])) ) {
    $post["user_range7"] = $_POST["range7"];
    $stack = array(
      "key"   => "Площадь перекрытия: ",
      "value" => $post["user_range7"]
    );
    array_push($data, $stack);
  }

  if ( !empty($_POST["roofskeleton"])  && (isset($_POST["roofskeleton"])) ) {
    if (is_array($_POST['roofskeleton'])) {
      $post["roofskeleton"] = implode(", ", $_POST["roofskeleton"]);
    } else {
      $post["roofskeleton"] = $_POST["roofskeleton"];
    }
    $stack = array(
      "key"   => "Тип каркаса кровли: ",
      "value" => $post["roofskeleton"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["range8"])) && (isset($_POST["range8"])) ) {
    $post["user_range8"] = $_POST["range8"];
    $stack = array(
      "key"   => "Площадь каркаса кровли: ",
      "value" => $post["user_range8"]
    );
    array_push($data, $stack);
  }
  
  if ( !empty($_POST["roof"])  && (isset($_POST["roof"])) ) {
    if (is_array($_POST['roof'])) {
      $post["roof"] = implode(", ", $_POST["roof"]);
    } else {
      $post["roof"] = $_POST["roof"];
    }
    $stack = array(
      "key"   => "Вид покрытия кровли: ",
      "value" => $post["roof"]
    );
    array_push($data, $stack);
  }

  if ( (!empty($_POST["range9"])) && (isset($_POST["range9"])) ) {
    $post["user_range9"] = $_POST["range9"];
    $stack = array(
      "key"   => "Площадь покрытия кровли: ",
      "value" => $post["user_range9"]
    );
    array_push($data, $stack);
  }

  $stack = array(
    "key"   => "Форма отправлена с сайта: ",
    "value" => $post["host_referer"]
  );
  array_push($data, $stack);

  foreach ($data as $key => $value) {
    $body .= $value['key'] . $value['value'] . chr(10) . chr(13);
  }

  $mail = new PHPMailer();
  $mail->CharSet = "UTF-8";
  $mail->IsSendmail();

  $from = "no-repeat@" . HOST_NAME;
  $mail->SetFrom($from, HOST_NAME);
  $mail->AddAddress("sk-adsk@ukr.net");
  $mail->AddAddress("website4you.dp@gmail.com");
  $mail->isHTML(true);
  $mail->Subject      = HOST_NAME;
  $NewsLetterClass    = new NewsLetterClass();
  $mail->Body         = $NewsLetterClass->generateHTMLLetter($data);
  $mail->AltBody      = $body;

  if(!$mail->send()) {
    echo "Что-то пошло не так. " . $mail->ErrorInfo;
    return false;
  } else {
    header("Location: ../success.html");
    return true;
  }
?>
