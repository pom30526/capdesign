<?php
?>
<!DOCTYPE HTML>
<head>
<script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>

</head>
<BODY>
<center>
<hr size=5>
<h1>Hypergeometric Distribution</h1>
<i>JavaScript</i>
<hr size=5>
From a population of size N, containing a subpopulation of size m, a sample 
of size n is drawn at random without replacement.  The number, X, 
of the sample that were drawn from the subpopulation 
is said to have a Hypergeometric distribution, H(N,m,n).

<hr>

<FORM>
<pre>
      Enter the population sizes, the sample size and the cutoff point.

       Population size N: <INPUT TYPE="text" NAME="pop1" Value="1600" SIZE=15>
    Subpopulation size m: <INPUT TYPE="text" NAME="pop2" Value="400" SIZE=15>
           Sample size n: <INPUT TYPE="text" NAME="sample" Value="300" SIZE=15>
                 x-value: <INPUT TYPE="text" NAME="argument" Value="75" SIZE=15>
</pre>

<BR>
P(X <= x|N,m,n) :
<INPUT TYPE="text" NAME="result" SIZE=20>
<INPUT TYPE="button" VALUE="Calculate" ONCLICK="hyper(this.form)">
<BR>
</FORM>
<hr>
The exact probability is calculated.  For example, 
P( X<= 75|1600,400,300) = .53252.<br>
Computation time is proportional to x+min(m,n,N-m,N-n).


</center>
</BODY>
</HTML>