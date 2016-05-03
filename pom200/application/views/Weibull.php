<?php
?>
<!DOCTYPE HTML>
<head>
<script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>

</head>
<BODY>
<center>
<hr size=5>
<h1>Weibull Distribution Function</h1>
<i>JavaScript</i>
<hr size=5>

<FORM>
<pre>
      Enter Weibull Distribution Arguments

          x-value: <INPUT TYPE="text" NAME="argument" Value="1" SIZE=15>
            alpha: <INPUT TYPE="text" NAME="gamma" Value="1" SIZE=15>
  scale parameter: <INPUT TYPE="text" NAME="sigma" Value="1" SIZE=15>
</pre>

<BR>
 Weibull Probability :
<INPUT TYPE="text" NAME="result" SIZE=20>
<INPUT TYPE="button" VALUE="Calculate" ONCLICK="Weibull(this.form)">
<BR>
</FORM>
<hr>
If  M<sub>n</sub> is the mimimum of a sample of size n from the beta<br>
distribution, Be(alpha,1), then the distribution of  
n<sup>1/alpha</sup>M<sub>n</sub><br>
converges to the Weibull(alpha,1) distribution with scale parameter 1.<br>
The Weibull(alpha,1) distribution has density
<p>
f(x) = alpha exp{-x<sup>alpha</sup>} x<sup>alpha-1</sup> for x > 0
<p>
and distribution function,
<p>
F(x,alpha,1) = 1 - exp{-x<sup>alpha</sup>}  for x > 0.
<p>
For example, F(1,1,1) = 1 - 1/e = .63212
 
</center>
</BODY>
</HTML>
