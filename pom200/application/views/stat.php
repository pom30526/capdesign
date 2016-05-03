<?php
?>
 
 <script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>

<!DOCTYPE html>
<HTML>
<HEAD>
</HEAD>
<BODY BGCOLOR = "#B0E0E6"  TEXT = "#000000"  onLoad="init();">

<A NAME = "이항분포"  ></A>

<P><HR><H2>이항분포</H2>

<PRE> 
<img src="https://upload.wikimedia.org/math/3/4/1/341523d3ecab04a6ceb6b2530540a209.png">
    
</PRE>

<PRE>
<FORM NAME=Binom METHOD=POST>

<P><B>p</B> <INPUT TYPE=TEXT NAME="p" SIZE=10>  <B>n</B> <INPUT

TYPE=TEXT NAME="n" SIZE=10>  <B>k</B> <INPUT TYPE=TEXT NAME="k" SIZE=10>

 

<P><INPUT TYPE="button" VALUE="이항분포 찾기(p,n,k)"

          onClick="DoBinom(this.form);">

<P><B>    값 추출</B> <INPUT TYPE=TEXT NAME="tnk" SIZE=10>

<P><B> 누적분포함수 = P(0..k)</B> <INPUT TYPE=TEXT NAME="pnk"

SIZE=10>   <B>Q = 1-P</B> <INPUT TYPE=TEXT NAME="qnk" SIZE=10>
</INPUT>
 

<P><INPUT TYPE="button" VALUE="자주 사용되는 이항분포표"

       onClick="BinomialTests();">

</FORM>
</HR>
</INPUT>
</P>
</PRE>
</BODY>

</HTML>