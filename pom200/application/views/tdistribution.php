<?php
?>
<!DOCTYPE HTML>
<head>
<script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>

</head>
<BODY>
<center>
<hr size=5>
<h1>t Distribution Function</h1>
<i>JavaScript</i>
<hr size=5>

<FORM>
<pre>
      Enter t-Distribution Function Arguments

            x-value: <INPUT TYPE="text" NAME="argument" Value="1" SIZE=15>
 Degrees of freedom: <INPUT TYPE="text" NAME="df" Value="1" SIZE=15>
</pre>

<BR>
 t-Distribution Probability :
<INPUT TYPE="text" NAME="result" SIZE=20>
<INPUT TYPE="button" VALUE="Calculate" ONCLICK="compute1(this.form)">
<BR>
</FORM>
<hr>
(Student's) t-distribution with f degrees of freedom<br>
is defined to be the distribution of T = Y/(Z/f)<sup>1/2</sup>,<br>
where Y has the normal(0,1) distribution, Z has the<br>
chi-square distribution with f degrees of freedom,<br>
and Y and Z are independent.<p>

The t-distribution with 1 degree of freedom is the Cauchy distribution.

<p>For example, t(1,1)=.75
 
</center>
</BODY>
</HTML>