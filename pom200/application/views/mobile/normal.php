<?php
?>
<!DOCTYPE html>
<meta charset="utf-8" />
<html>
<head>
  <!--   <link href="/pom200/include/js/jquery.mobile-1.4.5.js" rel="javascript">
    <link href="/pom200/include/css/jquery.mobile-1.4.5.min.css" rel="stylesheet"> -->
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
 <script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>
<title>mobile page</title>
</head>
<body> 
<div data-role="navbar">
    <ul>
        <li><a href="./normal" class="ui-btn-active" data-icon="star">normal distribution</a></li>
        <li><a href="./home" data-icon="home" >Back Button</a></li>
        </ul>
</div>
<FORM NAME=Normal METHOD=POST>

<textarea name="number"></textarea>
<br>
데이터 구분자는 , 입니다.(if you read NaN that means Not a Number so check your input)
<div id="feedback"></div>
<br>
avg       <input type ="text"  NAME="avg">
sigma     <input type ="text"  NAME="sigma">
std       <input type ="text"   NAME="std">
<br>
<INPUT TYPE="button" VALUE="get avg and sigma"
       onClick="Getavg(this.form);">
 </INPUT>
</FORM>
</pre>
</body>
</html>
