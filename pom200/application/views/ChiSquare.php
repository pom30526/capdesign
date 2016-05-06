<?php
?>
<!DOCTYPE html>
<meta charset="utf-8" />
<html>
<head>
  <!--   <link href="/pom200/include/js/jquery.mobile-1.4.5.js" rel="javascript">
    <link href="/pom200/include/css/jquery.mobile-1.4.5.min.css" rel="stylesheet"> -->
     
 <script type="text/javascript" src="/pom200/include/js/mainfunction.js"></script>
 </head>
 <body>
<A NAME = "ChiSquare"></A>
<P><HR><H2>Chi Square</H2>


<FORM NAME=Chi METHOD=POST>
<H3>The Cumulative Chi-Square</H3>
<PRE>
<img src="http://www.physics.csbsju.edu/stats/chi_def_2.gif">

<P><B>           df</B> <INPUT TYPE=TEXT NAME="df" SIZE=10
onChange="ChiCritDone=0;">   <B>  X<SUP>2</SUP> = x</B> <INPUT
TYPE=TEXT NAME="x" SIZE=10>   <INPUT TYPE="button" VALUE="Find P(df,x)"
onClick="DoChiSq(this.form);">

<P><B>cdf(df,x) = P</B> <INPUT TYPE=TEXT NAME="px"
SIZE=10>    <B>Q = 1-P</B> <INPUT TYPE=TEXT NAME="qx" SIZE=10>



<H3>Values of X<SUP>2</SUP> for Various P</H3>
<PRE>
   0.01 <INPUT TYPE=TEXT NAME="p01" SIZE=10>   0.05 <INPUT TYPE=TEXT NAME="p05" SIZE=10>   0.10 <INPUT TYPE=TEXT NAME="p10" SIZE=10>
   0.25 <INPUT TYPE=TEXT NAME="p25" SIZE=10>   0.50 <INPUT TYPE=TEXT NAME="p50" SIZE=10>   0.75 <INPUT TYPE=TEXT NAME="p75" SIZE=10>
   0.90 <INPUT TYPE=TEXT NAME="p90" SIZE=10>   0.95 <INPUT TYPE=TEXT NAME="p95" SIZE=10>   0.99 <INPUT TYPE=TEXT NAME="p99" SIZE=10>

</PRE>

<H3>The Inverse Chi-Square</H3>

<B>P or Q</B> <INPUT TYPE=TEXT NAME="porq" SIZE=10>   <INPUT
TYPE="button" VALUE="Given P(df,x) Find x"
onClick="DoChiIP(this.form);">     <INPUT
TYPE="button" VALUE="Given Q(df,x) Find x"
onClick="DoChiIQ(this.form);">

<B>     x</B> <INPUT TYPE=TEXT NAME="invx" SIZE=10>


<P>
<!-- <INPUT TYPE="button" VALUE="Run Tests"
       onClick="ChiSqTests();"> -->
</PRE>
</INPUT>
</FORM>
</PRE>
</body>
</html>
