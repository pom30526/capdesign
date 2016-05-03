
  <script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>

<PRE>
<P><HR><H2>포아송 분포</H2>

 포아송 분포 공식
<PRE>
<img src="https://upload.wikimedia.org/math/e/4/8/e48ad708a7de2f25d59d8d238ea38374.png">
</PRE>
<PRE>

   e = 2.71828...

</PRE>
and <I>u</I> is:
<PRE>
   u = n p
</PRE>
<PRE><FORM NAME=Poi METHOD=POST>

<P><B>⋋</B> <INPUT TYPE=TEXT NAME="u" SIZE=10>   <B>k</B> <INPUT TYPE=TEXT NAME="k" SIZE=10>
<P><INPUT TYPE="button" VALUE="포아송(u,k)"

          onClick="DoPoi(this.form);">
<P><B>    값 추출</B> <INPUT TYPE=TEXT NAME="tnk" SIZE=10>

 

<P><B>누적분포함수 = P(0..k)</B> <INPUT TYPE=TEXT NAME="puk" SIZE=10>   <B>Q = 1-P</B> <INPUT TYPE=TEXT NAME="quk" SIZE=10>

<P><INPUT TYPE="button" VALUE="자주 사용되는 포아송 분포표"

       onClick="PoissonTests();">

</FORM></PRE>
</BODY>

</HTML>