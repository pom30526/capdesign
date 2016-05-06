<?php
?>
<!DOCTYPE HTML>
<head>
<script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>

</head>
<BODY>
<center>
<hr size=5>
<h1>F Distribution Function</h1>


<FORM>
<pre>
      Enter F Distribution Function Arguments

          x-value: <INPUT TYPE="text" NAME="argument" Value="1.0" SIZE=15>
     Numerator df: <INPUT TYPE="text" NAME="f1" Value="2" SIZE=15>
   Denominator df: <INPUT TYPE="text" NAME="f2" Value="2" SIZE=15>
</pre>

<BR>
 F Probability :
<INPUT TYPE="text" NAME="result" SIZE=20>
<INPUT TYPE="button" VALUE="Calculate" ONCLICK="F(this.form)">
<BR>
</FORM>
<hr>
The F-distribution with f<sub>1</sub> and f<sub>2</sub> degrees of freedom<br>
is defined to be the distribution of the ratio  F = 
(X<sub>1</sub>/f<sub>1</sub>)/(X<sub>2</sub>/f<sub>2</sub>),<br>
where X<sub>1</sub> and X<sub>2</sub> are independent chi-square random variables<br> 
with f<sub>1</sub> and f<sub>2</sub> degrees of freedom 
respectively.<p>

For example, F(1,2,2)=.5

</center>
</BODY>
</HTML>
