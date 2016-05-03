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
        <li><a href="./poi" class="ui-btn-active" data-icon="star">poi</a></li>
        <li><a href="./home" data-icon="home" >Back Button</a></li>
        </ul>
</div>

   &nbsp;&nbsp;&nbsp;e = 2.71828...
and <I> u </I> is:
   u = n p
<FORM NAME=Poi METHOD=POST>
<P><B>&nbsp;&nbsp;&nbsp;⋋</B> 
<INPUT TYPE=TEXT NAME="u" SIZE=10>   
<B>&nbsp;&nbsp;&nbsp;k</B> 
<INPUT TYPE=TEXT NAME="k" SIZE=10>
<P>
<INPUT TYPE="button" VALUE="포아송(u,k)"
 onClick="DoPoi(this.form);">
<P><B>&nbsp;&nbsp;&nbsp;값 추출</B> <INPUT TYPE=TEXT NAME="tnk" SIZE=10>

 

<P><B>&nbsp;&nbsp;&nbsp;누적분포함수 = P(0..k)</B> <INPUT TYPE=TEXT NAME="puk" SIZE=10>   
<B>&nbsp;&nbsp;&nbsp;Q = 1-P</B> <INPUT TYPE=TEXT NAME="quk" SIZE=10>



</body>
</html>