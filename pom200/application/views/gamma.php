<?php
?>
<!DOCTYPE HTML>
<head>
<script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>

</head>
<body>
<center>
<hr size=5>
<h1>Gamma Distribution Function</h1>
<i>JavaScript</i>
<hr size=5>

<FORM>
<pre>
      ENTER GAMMA CDF ARGUMENTS

          x-value: <INPUT TYPE="text" NAME="argument" Value="1" SIZE=15>
            alpha: <INPUT TYPE="text" NAME="alpha" Value="1" SIZE=15>
             beta: <INPUT TYPE="text" NAME="beta" Value="1" SIZE=15>
</pre>

<BR>
 Gamma Probability :
<INPUT TYPE="text" NAME="result" SIZE=20>
<INPUT TYPE="button" VALUE="Calculate" ONCLICK="compute(this.form)">
<BR>
</FORM>
<hr>
The Gamma distribution with shape parameter alpha <br> 
and scale parameter beta is denoted by G(alpha,beta).<br>  
The distribution function of the G(alpha, beta) <br>
distribution is denoted by G(x,alpha,beta).<br>
For example, G(1,1,1) = 1 - 1/e = .63212.
<p>
The density of the G(alpha,beta) distribution is
<p>
f(x) = G(alpha)<sup>-1</sup> beta<sup>-alpha</sup> e<sup>-x/beta,</sup> 
x<sup>alpha-1,</sup> 
<p> 
on the interval (0,infinity) where G(x) reprresents the gamma function.<br>
The G(1,beta) distribution is the exponential distribution, E(beta).<br>  
The sum of k independent E(beta) random variables <br>
has distribution G(k,beta)

</center>
</body>
</html>
