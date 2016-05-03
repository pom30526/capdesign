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

<!-- <P><A TARGET = "Gloss"
   HREF = "../GLOSSARY.HTM#ChiSquare">Chi-square</A>
is the best known
<A TARGET = "Gloss"
   HREF = "../GLOSSARY.HTM#GoodnessOfFit">goodness of fit</A>
statistic.  Chi-square is a way to numerically compare two
<A TARGET = "Gloss"
   HREF = "../GLOSSARY.HTM#Sample">sampled</A>
<A TARGET = "Gloss"
   HREF = "../GLOSSARY.HTM#Distribution">distributions</A>:

   <OL>
   <LI>Some number of "bins" is selected, each typically covering
       a different but similar range of values.
   <LI>Some much larger number of independent observations are taken.
       Each is measured and classified in some bin, and a count for
       that bin is incremented.
   <LI>Each resulting bin count is compared to an expected value
       for that bin, based on the expected distribution.  Each
       expectation is subtracted from the corresponding bin count,
       the difference is squared, then divided by the expectation:
<PRE>
   X<SUP>2</SUP> = SUM( (Observed[i] - Expected[i])<SUP>2</SUP> / Expected[i] )
         i
</PRE>
   </OL>

<P>The sum of all the squared normalized differences is the chi-square
<A TARGET = "Gloss"
   HREF = "../GLOSSARY.HTM#Statistic">statistic</A>,
and the distribution depends upon the number of bins through the
<A TARGET = "Gloss"
   HREF = "../GLOSSARY.HTM#DegreesOfFreedom"><I>degrees of freedom</I></A>
or <I>df.</I>  The df value is normally one less than the number of
bins (though this will vary with different test structures).
Ideally, we choose the number of bins and the number of samples to
get at least ten counts in each bin.  For distributions which trail
off, it may be necessary to collect the counts (and the expectations)
for some number of adjacent bins.

<P>The chi-square
<A TARGET = "Gloss"
   HREF = "../GLOSSARY.HTM#cdf">c.d.f.</A> tells us how often a
particular value or
lower would be seen when sampling the expected distribution.
Ideally we expect to see chi-square values on the same order as
the df value, but often we see huge values for which there really
is little point in evaluating a precise probability.
 -->

<FORM NAME=Chi METHOD=POST>
<H3>The Cumulative Chi-Square</H3>
<PRE>

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


<P><INPUT TYPE="button" VALUE="Run Tests"
       onClick="ChiSqTests();">
</PRE>
</INPUT>
</FORM>
</PRE>
</body>
</html>
