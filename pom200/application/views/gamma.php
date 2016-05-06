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

<img src="data:image/png;base64,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"><br>


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
