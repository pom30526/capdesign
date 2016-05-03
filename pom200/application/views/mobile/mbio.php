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
        <li><a href="./binomial" class="ui-btn-active" data-icon="star">bionmial</a></li>
        <li><a href="./home" data-icon="home" >Back Button</a></li>
        </ul>
<!-- 
	      <img src="https://upload.wikimedia.org/math/3/4/1/341523d3ecab04a6ceb6b2530540a209.png"> -->

	</div>
	
	<FORM NAME=Binom METHOD=POST>

	<P>
	<B>&nbsp;&nbsp;&nbsp;p("p" value is 0<= p <=1)<B> 
	<INPUT TYPE="text" NAME="p" SIZE=5>  
	<B>&nbsp;&nbsp;&nbsp;n</B> 
	<INPUT TYPE="text" NAME="n" SIZE=10>
	<B>&nbsp;&nbsp;&nbsp;k("k" value must be low than n)</B> 
	<INPUT TYPE="text" NAME="k" SIZE=10>
	<P><INPUT TYPE="button" VALUE="이항분포 찾기(p,n,k)"
          onClick="DoBinom(this.form);">          
	<P><B>&nbsp;&nbsp;&nbsp;값 추출</B> 
	<INPUT TYPE=TEXT NAME="tnk" SIZE=10>
	<P><B>&nbsp;&nbsp;&nbsp;누적분포함수 = P(0..k)</B> 
	<INPUT TYPE=TEXT NAME="pnk" SIZE=10>   
	<B>&nbsp;&nbsp;&nbsp;Q = 1-P</B> 
	<INPUT TYPE=TEXT NAME="qnk" SIZE=10>
	</INPUT>
 

	<!-- <P><INPUT TYPE="button" VALUE="자주 사용되는 이항분포표"

       onClick="BinomialTests();"> -->
	</FORM>
	</HR>
	</INPUT>
	</P>
	</PRE>




</body>
</html>