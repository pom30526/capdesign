
<script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>
<H2>Normal distribtion</H2>
<pre>
<br>
<img src ="https://upload.wikimedia.org/math/b/8/5/b8525313480be649bed306ba81018709.png">
<FORM NAME=Normal METHOD=POST>
insert number<input type ="textArea-1" NAME="number" hint="use ," width="200px">
<br>
데이터 구분자는 , 입니다.
<div id="feedback"></div>
<br>
avg       <input type ="text"  NAME="avg">
sigma     <input type ="text"  NAME="sigma">
std       <input type ="text"   NAME="std">
<br>
<INPUT TYPE="button" VALUE="get avg and sigma"
       onClick="Getavg(this.form);">
</FORM>

<FORM NAME=Norm METHOD=POST>
<H3>Convert to Standard Z</H3>
<PRE>
<B>  mean</B> <INPUT TYPE=TEXT NAME="mean"
SIZE=10>  <B>variance</B> <INPUT TYPE=TEXT NAME="vari" SIZE=10
onChange="GotVari(this.form);">  <B>std. dev.</B> <INPUT TYPE=TEXT
NAME="sdev" SIZE=10 onChange="GotSdev(this.form);">

<B>     y</B> <INPUT TYPE=TEXT NAME="y" SIZE=10>       <INPUT
TYPE="button" VALUE="Convert" onClick="DoNormConv(this.form);">

</PRE>

<H3>The Cumulative Normal</H3>
<PRE>
<P><B>         z</B> <INPUT TYPE=TEXT NAME="z" SIZE=10>   <INPUT
TYPE="button" VALUE="Find P(z)" onClick="DoNorm(this.form);">

<P><B>cdf(z) = P</B> <INPUT TYPE=TEXT NAME="pz"
SIZE=10>    <B>Q = 1-P</B> <INPUT TYPE=TEXT NAME="qz" SIZE=10>



<H3>Values of Z for Various P</H3>
<PRE>
   0.01 <INPUT TYPE=TEXT NAME="p01" SIZE=10>   0.05 <INPUT TYPE=TEXT NAME="p05" SIZE=10>   0.10 <INPUT TYPE=TEXT NAME="p10" SIZE=10>
   0.25 <INPUT TYPE=TEXT NAME="p25" SIZE=10>   0.50 <INPUT TYPE=TEXT NAME="p50" SIZE=10>   0.75 <INPUT TYPE=TEXT NAME="p75" SIZE=10>
   0.90 <INPUT TYPE=TEXT NAME="p90" SIZE=10>   0.95 <INPUT TYPE=TEXT NAME="p95" SIZE=10>   0.99 <INPUT TYPE=TEXT NAME="p99" SIZE=10>

</PRE>

<H3>The Inverse Normal</H3>
<PRE>
<B>P or Q</B> <INPUT TYPE=TEXT NAME="porq" SIZE=10>   <INPUT
TYPE="button" VALUE="Given P(z) Find z"
onClick="DoNormIP(this.form);">     <INPUT TYPE="button"
VALUE="Given Q(z) Find z" onClick="DoNormIQ(this.form);">

<B>     z</B> <INPUT TYPE=TEXT NAME="invz" SIZE=10>


<P><INPUT TYPE="button" VALUE="Run Tests"
       onClick="NormalTests();">
</PRE>
</PRE>
</FORM>
