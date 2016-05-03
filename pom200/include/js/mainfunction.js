
// UTILITIES

 

// Test Window

 

var testWin;

var testWinOpen = 0;  // avoids repeated titles on page

   // 3.0 seems to have problems with true/false Booleans

 

function OpenTestWin() {

   // window may have been closed and need opening again!

   if ((testWinOpen < 1) || testWin.closed ) {

      testWinOpen = 2;

      testWin = window.open( "", "testWin", "toolbar=0,menubar=1,scrollbars=1" );

      testWin.document.writeln( "<HTML><HEAD><TITLE>Statistics Function Tests</TITLE></HEAD><BODY>" );

      testWin.document.writeln( "<H1 ALIGN = CENTER>Statistics Function Tests</H1><P>" );

      testWin.document.writeln( "<PRE>\n" );

      }

   }

 

 

// NUMERIC FORMATTING

 

function Fixed( s, wid, dec ) {

   // many combinations of possibilities
   // maybe prepare for upcoming truncate

   var z = 1

   if (dec > 0) {

      z /= Math.pow( 10, dec );

      if (s < -z)  s -= 0.5 * z;

      else

         if (s > z)  s += 0.5 * z;

         else

            s = 0;

      }

   // assure a string
   s = "" + s;
   // chop neg, if any
   var neg = 0;

   if (s.charAt(0) == "-") {

      neg = 2;

      s = s.substring( 1, s.length );

      }

 

   // chop exponent, if any

   var exp = "";

   var e = s.lastIndexOf( "E" );

   if (e < 0)  e = s.lastIndexOf( "e" );

   if (e > -1) {

      exp = s.substring( e, s.length );

      s = s.substring( 0, e );

      }

 

   // if dec > 0 assure "."; dp == index of "."

   var dp = s.indexOf( ".", 0 );

   if (dp == -1) {

      dp = s.length;

      if (dec > 0) {

         s += ".";

         dp = s.length - 1;

         }

      }

 

   // assure leading digit

   if (dp == 0) {

      s = '0' + s;

      dp = 1;

      }

 

   // not enough dec pl?  add 0's

   while ((dec > 0) && ((s.length - dp - 1) < dec))

      s += "0";

 

   // too many dec pl?  take a substring

   var places = s.length - dp - 1;

   if (places > dec)

      if (dec == 0)

         s = s.substring( 0, dp );

      else

         s = s.substring( 0, dp + dec + 1 );

 

   // recover exponent, if any

   s += exp;

 

   // recover neg, if any

   if (neg > 0)

      s = "-" + s;

 

   // if not enough width, add spaces IN FRONT

   //    too many places?  tough!

   while (s.length < wid)

      s = " " + s;

 

   return s

   }

 

function Prb( x ) {

   if (x < 0)  x = 0;

   else

      if (x > 1)  x = 1;

   return x;

   }

 

function PosV( x ) {

   if (x < 0)  x = -x;

   return x;

   }

 

 

// FACTORIALS

 

function Fact( x ) {

   // x factorial

   var  t=1;

   while (x > 1)

      t *= x--;

   return t;

   }

 

function LnFact( x ) {

   // ln(x!) by Stirling's formula

   //   see Knuth I: 111

   if (x <= 1)  x = 1;

 

   if (x < 12)

      return Math.log( Fact(Math.round(x)) );

   else {

      var invx = 1 / x;

      var invx2 = invx * invx;

      var invx3 = invx2 * invx;

      var invx5 = invx3 * invx2;

      var invx7 = invx5 * invx2;

 

      var sum = ((x + 0.5) * Math.log(x)) - x;

      sum += Math.log(2*Math.PI) / 2;

      sum += (invx / 12) - (invx3 / 360);

      sum += (invx5 / 1260) - (invx7 / 1680);

 

      return sum;

      }

   }

 

 

// COMBINATIONS

 

function LnComb( n, k ) {

   if ((k == 0) || (k == n))  return 0;

   else

      if ((k > n) || (k < 0))  return -1E38;

      else

         return  (LnFact(n) - LnFact(k) - LnFact(n-k));

   }

 

 

// NORMAL

 

function NormalP( x ) {

   // Abramowitz & Stegun 26.2.19

   var

      d1 = 0.0498673470,

      d2 = 0.0211410061,

      d3 = 0.0032776263,

      d4 = 0.0000380036,

      d5 = 0.0000488906,

      d6 = 0.0000053830,

      a = Math.abs(x),

      t;

 

   t = 1.0 + a*(d1+a*(d2+a*(d3+a*(d4+a*(d5+a*d6)))));

 

   // to 16th power

   t *= t;  t *= t;  t *= t;  t *= t;

   t = 1.0 / (t+t);  // the MINUS 16th

 

   if (x >= 0)  t = 1-t;

   return t;

   }

 

 

// BINOMIAL

 

function g( x ) {

   // Peizer & Pratt 1968, JASA 63: 1416-1456

   var  switchlev = 0.1, z;

 

   if (x == 0)  z = 1;

   else

      if (x == 1)  z = 0;

      else {

 

         var d = 1 - x;

 

         if (Math.abs(d) > switchlev)

            z = (1 - (x * x) + (2 * x * Math.log(x))) / (d * d);

         else {

 

            z = d / 3;  // first term

            var di = d;  // d**1

 

            for (var i = 2; i <= 7; i++) {

               di *= d;  // d**i

               z += (2 * di) / ((i+1) * (i+2));

               }

            }

         }

   return z;

   }

 

function BinomialPF( p, n, k ) {

   // by Normal approximation }

   // Peizer & Pratt 1968, JASA 63: 1416-1456

   var  inv2 = 1/2, inv3 = 1/3, inv6 = 1/6;

 

   if (k >= n)  z = 1;

   else {

      var q = 1 - p;

 

      var s = k + inv2;

      var t = n - k - inv2;

 

      var d1 = s + inv6 - (n + inv3) * p;

      var d2 = q /(s+inv2)  -  p/(t+inv2)  +  (q-inv2)/(n+1);

      d2 = d1 + 0.02 * d2;

 

      var num = 1  +  q * g(s/(n*p))  +  p * g(t/(n*q));

      var den = (n + inv6) * p * q;

      var z = num / den;

      z = d2 * Math.sqrt(z);

      z = NormalP( z );

      }

 

   return z;

   }

 

function BinomTerm( p, n, k ) {

   // for success probability p and n trials

   //     probability of exactly k successes

   return Math.exp( LnComb(n,k)

                    + k * Math.log(p)

                    + (n-k) * Math.log(1-p) );

   }

 

function BinomialP( p, n, k ) {

   if (n >= 1000)  return BinomialPF( p, n, k );

   else {

      // term-by-term

      if ((k > n) || (p >= 1))  return 1;

      else {

         var  q = 1 - p;

         var  n1p = (n+1) * p;

 

         var  t = n * Math.log(q);  // k = 0

         var  r = Math.exp(t);

         var  j = 1;

         while (j <= k) {

            t += Math.log( 1 + (n1p - j) / (j * q) );

            r += Math.exp(t);

            j++;

            }

 

         return  r;

         }

      }

   }

 

function DoBinom( aform ) {

   var p = Prb(parseFloat(aform.p.value));

   aform.p.value = Fixed(p,10,4);

   var n = PosV(parseInt(aform.n.value));

   aform.n.value = Fixed(n,8,0);

   var k = PosV(parseInt(aform.k.value));

   if (k > n)  k = n;

   aform.k.value = Fixed(k,8,0);

   aform.tnk.value = Fixed(BinomTerm( p, n, k ),8,4);

   var t = BinomialP( p, n, k );

   aform.pnk.value = Fixed(t,8,4);

   aform.qnk.value = Fixed(1-t,8,4);

   }

 

function DoBiChgs( aform ) {

   var w = PosV(parseInt(aform.w.value));

   var s = PosV(parseInt(aform.s.value));

 

   aform.chgs.value += "\n\n Table Width: " + w + "   Samples: " + s;

   aform.chgs.value += "\n Bits     Probability        Expected";

   var k, p;

   for (k = 0; k <= w; k++) {

      p = BinomTerm( 0.5, w, k );

      aform.chgs.value += "\n" + Fixed(k,5,0) + Fixed(p,16,8) +

                                 Fixed(s*p,16,2);

      }

   }

 

function EntW( aform ) {

   var w = PosV(parseInt(aform.w.value));

   if (w < 2)  w = 2;

   aform.w.value = Fixed(w,8,0);

   var s = 1e6;

   if (w <= 12)  s = Math.pow(2,w+w);

   aform.s.value = Fixed(s,8,0);

   }

 

function EntS( aform ) {

   var s = PosV(parseInt(aform.s.value));

   aform.s.value = Fixed(s,8,0);

   }

 

function BinomTermTst( n, k, p, corr ) {

   var t = BinomTerm( p, n, k );

   testWin.document.writeln( Fixed(p,8,4) + Fixed(n,8,0) + Fixed(k,8,0) +

                             Fixed(t,16,8) + Fixed(corr,16,8) );

   }

 

function BinomialPTst( n, k, p, corr ) {

   var t = BinomialP( p, n, k );

   testWin.document.writeln( Fixed(p,8,4) + Fixed(n,8,0) + Fixed(k,8,0) +

                             Fixed(t,16,8) + Fixed(corr,16,8) );

   }

 

function BinomialTests() {

   OpenTestWin();

 

   testWin.document.writeln( "<H2>BinomTerm Tests</H2>" );

 

   testWin.document.writeln( "<B>     p         n       k         p(x)            corr</B>" );

   BinomTermTst( 10, 0, 0.2, 0.1074 );

   BinomTermTst( 10, 1, 0.2, 0.2684 );

   BinomTermTst( 10, 2, 0.2, 0.3020 );

   BinomTermTst( 10, 3, 0.2, 0.2013 );

   BinomTermTst( 10, 4, 0.2, 0.0880 );

   BinomTermTst( 10, 5, 0.2, 0.0264 );

   BinomTermTst( 10, 6, 0.2, 0.0055 );

 

   testWin.document.writeln( "\n\n<H2>BinomialP Tests</H2>" );

 

   testWin.document.writeln( "<B>     p         n       k         p(x)            corr</B>" );

 

   // Huntsberger, p.122

   BinomialPTst(   5,   0, 0.50,  1/32 );

   BinomialPTst(   5,   1, 0.50,  6/32 );

   BinomialPTst(   5,   2, 0.50, 16/32 );

   BinomialPTst(   5,   3, 0.50, 26/32 );

   BinomialPTst(   5,   4, 0.50, 31/32 );

   BinomialPTst(   5,   5, 0.50, 32/32 );

 

   // Huntsberger, p. 124

   BinomialPTst(   4,   0, 0.25,  81/256 );

   BinomialPTst(   4,   1, 0.25, 189/256 );

   BinomialPTst(   4,   2, 0.25, 243/256 );

   BinomialPTst(   4,   3, 0.25, 255/256 );

   BinomialPTst(   4,   4, 0.25, 256/256 );

 

   // Downing & Clark, p. 88

   BinomialPTst(  20,   0, 0.25, 0.003171212 );

   BinomialPTst(  20,   1, 0.25, 0.024312625 );

   BinomialPTst(  20,   2, 0.25, 0.091260432 );

 

   BinomialPTst( 362, 320, 0.95, 0.000000000 );

   BinomialPTst( 362, 340, 0.95, 0.202545629 );

   BinomialPTst( 362, 345, 0.95, 0.638473386 );

   BinomialPTst( 362, 350, 0.95, 0.951702817 );

   BinomialPTst( 362, 362, 0.95, 1.000000000 );

 

   testWin.document.writeln( "\n<B>     p         n       k         p(x)            corr</B>" );

   BinomialPTst( 100,  92, 0.95, 0.127960479 );

   BinomialPTst( 100,  95, 0.95, 0.564018699 );

   BinomialPTst( 100,  97, 0.95, 0.881737018 );

 

   BinomialPTst( 250, 230, 0.95, 0.027145366 );

   BinomialPTst( 250, 237, 0.95, 0.482470907 );

   BinomialPTst( 250, 245, 0.95, 0.995429264 );

 

   BinomialPTst( 100,  40, 0.50, 0.028443967 );

   BinomialPTst( 100,  50, 0.50, 0.539794619 );

   BinomialPTst( 100,  60, 0.50, 0.982399900 );

 

   BinomialPTst( 250, 100, 0.50, 0.000942 );

   BinomialPTst( 250, 125, 0.50, 0.525206 );

   BinomialPTst( 250, 150, 0.50, 0.999393 );

 

   BinomialPTst( 500, 225, 0.50, 0.014163 );

   BinomialPTst( 500, 250, 0.50, 0.517832 );

   BinomialPTst( 500, 275, 0.50, 0.988767 );

 

   testWin.document.writeln( "\n<B>     p         n       k         p(x)            corr</B>" );

   BinomialPTst( 100,   4, 0.05, 0.435981301 );

   BinomialPTst( 100,   5, 0.05, 0.615999128 );

   BinomialPTst( 100,   6, 0.05, 0.766013984 );

 

   BinomialPTst( 250,  10, 0.05, 0.290925415 );

   BinomialPTst( 250,  12, 0.05, 0.517529095 );

   BinomialPTst( 250,  14, 0.05, 0.728836313 );

 

   BinomialPTst( 500,  20, 0.05, 0.178850717 );

   BinomialPTst( 500,  25, 0.05, 0.552938857 );

   BinomialPTst( 500,  30, 0.05, 0.869147703 );

 

   BinomialPTst( 1000, 925, 0.95, 0.000411 );

   BinomialPTst( 1000, 950, 0.95, 0.520259 );

   BinomialPTst( 1000, 975, 0.95, 0.999976 );

 

 

   // starting extreme range tests

   BinomialPTst( 5000,  250, 0.05, 0.516817822 );

   BinomialPTst( 5000, 2500, 0.50, 0.505641627 );

   BinomialPTst( 5000, 4750, 0.95, 0.509060133 );

 

   BinomialPTst( 10000,  500, 0.05, 0.511895037 );

   BinomialPTst( 10000, 5000, 0.50, 0.503989356 );

   BinomialPTst( 10000, 9500, 0.95, 0.506406546 );

 

   BinomialPTst( 100000,  5000, 0.05, 0.503762466 );

   BinomialPTst( 100000, 50000, 0.50, 0.501258728 );

   BinomialPTst( 100000, 95000, 0.95, 0.501998289 );

 

   testWin.document.writeln( "\n" );

   }

 

 

// POISSON

 

function PoissonPD( u, k ) {

   // Peizer & Pratt 1968, JASA 63: 1416-1456

 

   var s = k + (1/2);

 

   var d1 = k + (2/3) - u;

   var d2 = d1 + 0.02/(k+1);

 

   var z = (1 + g(s/u)) / u;

   z = d2 * Math.sqrt(z);

   z = NormalP( z );

 

   return z;

   }

 

function PoissonTerm( u, k ) {

   // by logs

   return  Math.exp( (k * Math.log(u)) - u - LnFact(k) );

   }

 

function PoissonP( u, k ) {

   // term-by-term summation

   if (k >= 20) return  PoissonPD( u, k );

   else {

      var  sum = 0.0, j = 0;

      while (j <= k)

         sum += PoissonTerm( u, j++ );

      if (sum > 1)  sum = 1;

      return  sum;

      }

   }

 

function DoPoi( aform ) {

   var u = PosV(parseFloat(aform.u.value));

   aform.u.value = Fixed(u,10,4);

   var k = PosV(parseInt(aform.k.value));

   aform.k.value = Fixed(k,8,0);

   aform.tnk.value = Fixed(PoissonTerm( u, k ),8,4);

   var t = PoissonP( u, k );

   aform.puk.value = Fixed(t,8,4);

   aform.quk.value = Fixed(1-t,8,4);

   }

 

function PoissonTermTst( u, k, corr ) {

   var t = PoissonTerm( u, k );

   testWin.document.writeln( Fixed(u,8,2) + Fixed(k,8,0) +

                             Fixed(t,16,8) + Fixed(corr,16,8) );

   }

 

function PoissonPTst( u, k, corr ) {

   var t = PoissonP( u, k );

   testWin.document.writeln( Fixed(u,8,2) + Fixed(k,8,0) +

                             Fixed(t,16,8) + Fixed(corr,16,8) );

   }

 

function PoissonTests() {

   OpenTestWin();

   testWin.document.writeln( "<H2>PoissonTerm Tests</H2>" );

 

   testWin.document.writeln( "<B>      u        k          p(x)            corr</B>" );

 

   PoissonTermTst( 1.0, 0, 0.367879441 );

   PoissonTermTst( 1.0, 1, 0.367879441 );

   PoissonTermTst( 1.0, 2, 0.183939721 );

   PoissonTermTst( 1.0, 3, 0.061313240 );

 

   PoissonTermTst( 5.0,  0, 0.006737947 );

   PoissonTermTst( 5.0,  1, 0.033689735 );

   PoissonTermTst( 5.0,  2, 0.084224337 );

   PoissonTermTst( 5.0,  3, 0.140373896 );

   PoissonTermTst( 5.0,  4, 0.175467370 );

 

   PoissonTermTst( 5.0,  5, 0.175467370 );

   PoissonTermTst( 5.0,  6, 0.146222808 );

   PoissonTermTst( 5.0,  7, 0.104444863 );

   PoissonTermTst( 5.0,  8, 0.065278039 );

   PoissonTermTst( 5.0,  9, 0.036265577 );

   PoissonTermTst( 5.0, 10, 0.018132789 );

   PoissonTermTst( 5.0, 11, 0.008242177 );

   PoissonTermTst( 5.0, 12, 0.003434240 );

 

   testWin.document.writeln( "\n<B>      u        k          p(x)            corr</B>" );

   PoissonTermTst( 10.0,  0, 0.000045400 );

   PoissonTermTst( 10.0,  1, 0.000453999 );

   PoissonTermTst( 10.0,  2, 0.002269996 );

   PoissonTermTst( 10.0,  5, 0.037833275 );

   PoissonTermTst( 10.0, 10, 0.125110036 );

   PoissonTermTst( 10.0, 15, 0.034718070 );

   PoissonTermTst( 10.0, 20, 0.001866081 );

 

   PoissonTermTst( 100.0,   0, 0.0         );

   PoissonTermTst( 100.0,  10, 0.0         );

   PoissonTermTst( 100.0,  20, 0.0         );

   PoissonTermTst( 100.0,  50, 0.000000012 );

   PoissonTermTst( 100.0, 100, 0.039860997 );

   PoissonTermTst( 100.0, 200, 0.0         );

   PoissonTermTst( 100.0, 500, 0.0         );

 

   PoissonTermTst( 1000.0,    0, 0.0         );

   PoissonTermTst( 1000.0,   10, 0.0         );

   PoissonTermTst( 1000.0,  100, 0.0         );

   PoissonTermTst( 1000.0,  200, 0.0         );

   PoissonTermTst( 1000.0,  500, 0.0         );

   PoissonTermTst( 1000.0, 1000, 0.012614611 );

   PoissonTermTst( 1000.0, 2000, 0.0         );

 

   testWin.document.writeln( "\n\n<H2>PoissonP Tests</H2>" );

 

   testWin.document.writeln( "<B>      u        k          p(x)            corr</B>" );

   PoissonPTst( 0.7,  6, 0.999991116 );

   PoissonPTst( 0.7,  7, 0.999999231 );

   PoissonPTst( 0.7,  8, 0.999999941 );

   PoissonPTst( 0.7, 10, 1.0 );

   PoissonPTst( 0.7, 12, 1.0 );

 

   PoissonPTst( 1.0, 0, 0.367879441 );

   PoissonPTst( 1.0, 1, 0.735758882 );

   PoissonPTst( 1.0, 2, 0.919698603 );

   PoissonPTst( 1.0, 3, 0.981011843 );

 

   PoissonPTst( 5.0,  0, 0.006737947 );

   PoissonPTst( 5.0,  1, 0.040427682 );

   PoissonPTst( 5.0,  2, 0.124652019 );

   PoissonPTst( 5.0,  3, 0.265025915 );

   PoissonPTst( 5.0,  4, 0.440493285 );

   PoissonPTst( 5.0,  5, 0.615960655 );

   PoissonPTst( 5.0,  6, 0.762183463 );

   PoissonPTst( 5.0,  7, 0.866628326 );

   PoissonPTst( 5.0,  8, 0.931906365 );

   PoissonPTst( 5.0,  9, 0.968171943 );

   PoissonPTst( 5.0, 10, 0.986304731 );

   PoissonPTst( 5.0, 11, 0.994546908 );

   PoissonPTst( 5.0, 12, 0.997981148 );

 

   testWin.document.writeln( "\n<B>      u        k          p(x)            corr</B>" );

   PoissonPTst( 10.0,  0, 0.000045400 );

   PoissonPTst( 10.0,  1, 0.000499399 );

   PoissonPTst( 10.0,  2, 0.002769396 );

   PoissonPTst( 10.0,  5, 0.067085963 );

   PoissonPTst( 10.0, 10, 0.583039750 );

   PoissonPTst( 10.0, 15, 0.951259597 );

   PoissonPTst( 10.0, 20, 0.998411740 );

 

   PoissonPTst( 20.0,  0, 0.000000002 );

   PoissonPTst( 20.0,  1, 0.000000043 );

   PoissonPTst( 20.0,  5, 0.000071909 );

   PoissonPTst( 20.0, 10, 0.010811719 );

   PoissonPTst( 20.0, 20, 0.559092584 );

   PoissonPTst( 20.0, 30, 0.986525319 );

   PoissonPTst( 20.0, 40, 0.999974574 );

 

   PoissonPTst( 50.0,  10, 0.0         );

   PoissonPTst( 50.0,  25, 0.000071607 );

   PoissonPTst( 50.0,  40, 0.086070000 );

   PoissonPTst( 50.0,  50, 0.537516691 );

   PoissonPTst( 50.0,  75, 0.999628031 );

   PoissonPTst( 50.0, 100, 1.0         );

 

   testWin.document.writeln( "\n<B>      u        k          p(x)            corr</B>" );

   PoissonPTst( 100.0,   0, 0.0         );

   PoissonPTst( 100.0,  10, 0.0         );

   PoissonPTst( 100.0,  20, 0.0         );

   PoissonPTst( 100.0,  50, 0.000000024 );

   PoissonPTst( 100.0, 100, 0.526562199 );

   PoissonPTst( 100.0, 200, 1.0         );

 

   PoissonPTst( 200.0,   0, 0.0         );

   PoissonPTst( 200.0, 100, 0.0         );

   PoissonPTst( 200.0, 200, 0.518794310 );

   PoissonPTst( 200.0, 400, 1.0         );

 

   PoissonPTst( 500.0,    0, 0.0         );

   PoissonPTst( 500.0,  250, 0.0         );

   PoissonPTst( 500.0,  500, 0.511891121 );

   PoissonPTst( 500.0, 1000, 1.0         );

 

   PoissonPTst( 1000.0,    0, 0.0 );

   PoissonPTst( 1000.0,   10, 0.0 );

   PoissonPTst( 1000.0,  100, 0.0 );

   PoissonPTst( 1000.0,  200, 0.0 );

   PoissonPTst( 1000.0,  500, 0.0 );

   PoissonPTst( 1000.0, 1000, 0.508409367 );

   PoissonPTst( 1000.0, 2000, 0.999999997 );

 

   testWin.document.writeln( "\n" );

   }

 

 

 

// HANDLERS

 

function init() {

   window.document.Binom.p.value = 0.5;

   window.document.Binom.n.value = 128;

   window.document.Binom.k.value = 60;

 

   window.document.BiChgs.w.value = 8;

   window.document.BiChgs.s.value = 65536;

 

   window.document.Poi.u.value = 64;

   window.document.Poi.k.value = 60;

   }

  

 function Getavg( aform ){
   var str =aform.number.value;
   var strArray =str.split("," ||".");
   var sum=0; //for avg
   var sum2=0;//for sigma
   var avg =0;//for avg
   var avg2=0;//for sigma
   var sigma=0;
   var std =0;
   var elMsg=document.getElementById('feedback');
   if(strArray[strArray.length]==","){
      elMsg.textContent="input value check";
   }
 	for(var i=0; i<strArray.length; i++){
 		
      var p =parseFloat(strArray[i],10);
          sum +=p;
          sum2 +=Math.pow(p,2);
 		}

      avg = sum/(strArray.length);

 	   aform.avg.value =avg;

      avg2 =sum2/(strArray.length);


      sigma = avg2-(avg*avg);

      std=Math.sqrt(sigma);
      aform.sigma.value=sigma;
      aform.std.value=std;


 }
 function InvNormalP( p ) {
   // Odeh & Evans. 1974. AS 70. Applied Statistics. 23: 96-97
   var
      p0 = -0.322232431088,
      p1 = -1.0,
      p2 = -0.342242088547,
      p3 = -0.0204231210245,
      p4 = -0.453642210148E-4,
      q0 =  0.0993484626060,
      q1 =  0.588581570495,
      q2 =  0.531103462366,
      q3 =  0.103537752850,
      q4 =  0.38560700634E-2,
      pp, y, xp;

   // p: 0.0 .. 1.0 -> pp: 0.0 .. 0.5 .. 0.0
   if (p < 0.5)  pp = p;  else  pp = 1 - p;

   if (pp < 1E-12)
      xp = 99;
   else {
      y = Math.sqrt(Math.log(1/(pp*pp)));
      xp = y + ((((y * p4 + p3) * y + p2) * y + p1) * y + p0) /
               ((((y * q4 + q3) * y + q2) * y + q1) * y + q0);
      }

   if (p < 0.5)  return -xp;
   else  return  xp;
   }

var NormCritDone = 0;

function DoInvNorm( aform ) {
   NormCritDone = 2;
   aform.p01.value = Fixed(InvNormalP( 0.01 ),10,4);
   aform.p05.value = Fixed(InvNormalP( 0.05 ),10,4);
   aform.p10.value = Fixed(InvNormalP( 0.10 ),10,4);
   aform.p25.value = Fixed(InvNormalP( 0.25 ),10,4);
   aform.p50.value = Fixed(InvNormalP( 0.50 ),10,4);
   aform.p75.value = Fixed(InvNormalP( 0.75 ),10,4);
   aform.p90.value = Fixed(InvNormalP( 0.90 ),10,4);
   aform.p95.value = Fixed(InvNormalP( 0.95 ),10,4);
   aform.p99.value = Fixed(InvNormalP( 0.99 ),10,4);
   }

function GotVari( aform ) {
   var v = parseFloat(aform.vari.value);
   aform.vari.value = Fixed(v,10,4);
   var s = Math.sqrt(v);
   aform.sdev.value = Fixed(s,10,4);
   }

function GotSdev( aform ) {
   var s = parseFloat(aform.sdev.value);
   aform.sdev.value = Fixed(s,10,4);
   var v = s * s;
   aform.vari.value = Fixed(v,10,4);
   }

function DoNormConv( aform ) {
   var m = parseFloat(aform.mean.value);
   aform.mean.value = Fixed(m,10,4);
   var v = parseFloat(aform.vari.value);
   aform.vari.value = Fixed(v,10,4);
   var s = parseFloat(aform.sdev.value);
   aform.sdev.value = Fixed(s,10,4);
   var y = parseFloat(aform.y.value);
   aform.y.value = Fixed(y,10,4);
   var z = (y - m) / s;
   aform.z.value = Fixed(z,10,4);
   }

function DoNorm( aform ) {
   var z = parseFloat(aform.z.value);
   aform.z.value = Fixed(z,10,4);
   var t = NormalP( z );
   aform.pz.value = Fixed(t,10,4);
   aform.qz.value = Fixed(1-t,10,4);
   if (NormCritDone < 1)
      DoInvNorm( aform );
   }

function DoNormIP( aform ) {
   var pq = parseFloat(aform.porq.value);
   aform.porq.value = Fixed(pq,10,4);
   var t = InvNormalP( pq );
   aform.invz.value = Fixed(t,10,4);
   }

function DoNormIQ( aform ) {
   var pq = parseFloat(aform.porq.value);
   aform.porq.value = Fixed(pq,10,4);
   var t = InvNormalP( 1-pq );
   aform.invz.value = Fixed(t,10,4);
   }

function NormalTst( x, corr ) {
   var t = NormalP( x );
   var i = InvNormalP( corr );
   testWin.document.writeln( Fixed(x,16,8) + Fixed(t,16,8) +
                             Fixed(corr,16,8) + Fixed(i,16,8) );
   }

function NormalTsts( x, corr ) {
   NormalTst( x, corr );
   NormalTst( -x, 1.0 - corr );
   }

function NormalTests() {
   OpenTestWin();
   testWin.document.writeln( "<H2>Normal Tests</H2>" );

   testWin.document.writeln( "<B>           x             p(x)            corr          inv(corr)</B>" );
   NormalTsts( 0.00, 0.5 );
   NormalTsts( 0.20, 0.579259709439103 );
   NormalTsts( 0.50, 0.691462461274013 );
   NormalTsts( 1.00, 0.841344746068543 );
   NormalTsts( 1.20, 0.884930329778292 );
   NormalTsts( 1.30, 0.903199515414390 );
   NormalTsts( 1.50, 0.933192798731142 );
   NormalTsts( 1.60, 0.945200708300442 );
   NormalTsts( 2.00, 0.977249868051821 );
   NormalTsts( 2.50, 0.993790334674224 );
   NormalTsts( 3.00, 0.998650101968370 );
   NormalTsts( 4.00, 0.999968328757859 );
   NormalTsts( 5.00, 0.999999713348188 );
   NormalTsts( 6.00, 0.999999999013198 );

   testWin.document.writeln( "\n<B>           x             p(x)            corr          inv(corr)</B>" );
   NormalTsts(  0.25334710313579979879, 0.600 );
   NormalTsts(  0.52440051270804078403, 0.700 );
   NormalTsts(  0.84162123357291420517, 0.800 );

   testWin.document.writeln( "\n<B>           x             p(x)            corr          inv(corr)</B>" );
   NormalTsts( -0.67448975019608174320, 2.5E-01 );
   NormalTsts( -1.28155156554460046696, 1.0E-01 );
   NormalTsts( -2.32634787404084110088, 1.0E-02 );
   NormalTsts( -3.09023230616781354154, 1.0E-03 );
   NormalTsts( -3.71901648545568056439, 1.0E-04 );
   NormalTsts( -4.26489079392282462849, 1.0E-05 );
   NormalTsts( -4.75342430882289894819, 1.0E-06 );
   NormalTsts( -5.19933758219281693158, 1.0E-07 );
   NormalTsts( -5.61200124417478873154, 1.0E-08 );
   NormalTsts( -5.99780701500768687156, 1.0E-09 );
   NormalTsts( -6.36134090240405620469, 1.0E-10 );
   NormalTsts( -6.70602315549513628726, 1.0E-11 );
   NormalTsts( -7.03448382530113192980, 1.0E-12 );

   testWin.document.writeln( "\n<B>           x             p(x)            corr          inv(corr)</B>" );
   NormalTsts( -3.090232306167814,  0.001 );
   NormalTsts( -9.262340089798408,  1E-20 );

   testWin.document.writeln( "\n" );
   }


// CHI SQ

function ChiSqPN( degfree, x2 ) {
   // Peizer & Pratt from Ling, 1978, JASA 73: 274-283 }
   var  d, z, s = degfree - 1;

   if (Math.abs(x2 - s) < 0.1) {
      z = (1/3) + (0.08/degfree);
      z = -z / Math.sqrt(s+s);
      }
   else {
      d = x2 - degfree + (2/3) - (0.08/degfree);
      z = Math.sqrt((s * Math.log(s/x2)) + x2 - s);
      z = (d * z) / Math.abs(x2-s);
      }

   return NormalP( z );
   }

function ChiSqP( degfree, x2 ) {
   // found on a web page
   var  p, t, df, k, a;

   df = Math.round( degfree );
   if (df >= 50)  return ChiSqPN( degfree, x2 );
   else {

      p = Math.exp( -x2 / 2 );

      if ((df & 1) > 0)
         p *= Math.sqrt( (x2+x2) / Math.PI );

      k = df;
      while (k >= 2) {
         p *= x2 / k;
         k -= 2;
         }

      t = p;  a = df;
      while (t > (1E-7 * p)) {
         a += 2;
         t *= x2 / a;
         p += t;
         }

      return p;
      }
   }

function InvChiSq( degfree, p ) {
   // find x such that f(x) ~= p

   // basic range protection
   if (p < 0)  p = 0;
   else
      if (p > 1)  p = 1;
   if (degfree < 0)  degfree = 0;

   var a = 0, b = degfree + 0.1, loopct = 0;
   var fc = ChiSqP( degfree, b ), c;

   // hop b until f(b) == fc is above p
   //    fc < 0 is unified error exit
   while ((fc >= 0) && (fc <= p) && (loopct++ < 10)) {
      a = b;  b *= 2;
      fc = ChiSqP( degfree, b );
      }

   // x is bracketed by a and b, so squeeze...
   loopct = -loopct;
   while ((fc >= 0) && (Math.abs(fc-p) > 1E-6) && (loopct++ < 30)) {
      c = a + (b - a) / 2;  // bisection
      fc = ChiSqP( degfree, c );
      if (fc < p)  a = c;
      else  b = c;
      }

   if ((fc < 0) || (loopct >= 30))  return -2;
   else  return c;
   }

var ChiCritDone = 0;

function DoInvChi( aform, df ) {
   ChiCritDone = 2;
   aform.p01.value = Fixed(InvChiSq( df, 0.01 ),10,4);
   aform.p05.value = Fixed(InvChiSq( df, 0.05 ),10,4);
   aform.p10.value = Fixed(InvChiSq( df, 0.10 ),10,4);
   aform.p25.value = Fixed(InvChiSq( df, 0.25 ),10,4);
   aform.p50.value = Fixed(InvChiSq( df, 0.50 ),10,4);
   aform.p75.value = Fixed(InvChiSq( df, 0.75 ),10,4);
   aform.p90.value = Fixed(InvChiSq( df, 0.90 ),10,4);
   aform.p95.value = Fixed(InvChiSq( df, 0.95 ),10,4);
   aform.p99.value = Fixed(InvChiSq( df, 0.99 ),10,4);
   }

function DoChiSq( aform ) {
   var df = PosV(parseInt(aform.df.value));
   aform.df.value = Fixed(df,8,0);
   var x2 = PosV(parseFloat(aform.x.value));
   aform.x.value = Fixed(x2,10,4);
   var t = ChiSqP( df, x2 );
   aform.px.value = Fixed(t,8,4);
   aform.qx.value = Fixed(1-t,8,4);
   if (ChiCritDone < 1)
      DoInvChi( aform, df );
   }

function DoChiIP( aform ) {
   var df = PosV(parseInt(aform.df.value));
   aform.df.value = Fixed(df,8,0);
   var pq = parseFloat(aform.porq.value);
   aform.porq.value = Fixed(pq,10,4);
   var t = InvChiSq( df, pq );
   aform.invx.value = Fixed(t,10,4);
   }

function DoChiIQ( aform ) {
   var df = PosV(parseInt(aform.df.value));
   aform.df.value = Fixed(df,8,0);
   var pq = parseFloat(aform.porq.value);
   aform.porq.value = Fixed(pq,10,4);
   var t = InvChiSq( 1-pq );
   aform.invx.value = Fixed(t,10,4);
   }

function ChiSqTst( df, x2, corr ) {
   var t = ChiSqP( df, x2 );
   var i = InvChiSq( df, corr );
   testWin.document.writeln( Fixed(df,5,0) + Fixed(x2,16,8) + Fixed(t,14,8) +
                             Fixed(corr,14,8) + Fixed(i,16,8) );
   }


   function LogGamma(Z) {
   with (Math) {
      var S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
      var LG= (Z-.5)*log(Z+4.5)-(Z+4.5)+log(S*2.50662827465);
   }
   return LG
}

function Gcf(X,A) {        // Good for X>A+1
   with (Math) {
      var A0=0;
      var B0=1;
      var A1=1;
      var B1=X;
      var AOLD=0;
      var N=0;
      while (abs((A1-AOLD)/A1)>.00001) {
         AOLD=A1;
         N=N+1;
         A0=A1+(N-A)*A0;
         B0=B1+(N-A)*B0;
         A1=X*A0+N*A1;
         B1=X*B0+N*B1;
         A0=A0/B1;
         B0=B0/B1;
         A1=A1/B1;
         B1=1;
      }
      var Prob=exp(A*log(X)-X-LogGamma(A))*A1;
   }
   return 1-Prob
}

function Gser(X,A) {        // Good for X<A+1.
    with (Math) {
      var T9=1/A;
      var G=T9;
      var I=1;
      while (T9>G*.00001) {
         T9=T9*X/(A+I);
         G=G+T9;
         I=I+1;
      }
      G=G*exp(A*log(X)-X-LogGamma(A));
    }
    return G
}

function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
   var T=1/(1+.2316419*Math.abs(X));
   var D=.3989423*Math.exp(-X*X/2);
   var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
   if (X>0) {
      Prob=1-Prob
   }
   return Prob
}

function Gammacdf(x,a) {
   var GI;
   if (x<=0) {
      GI=0
   } else if (a>200) {
      z=(x-a)/Math.sqrt(a)
      y=normalcdf(z)
      b1=2/Math.sqrt(a)
      phiz=.39894228*Math.exp(-z*z/2)
      w=y-b1*(z*z-1)*phiz/6  //Edgeworth1
      b2=6/a
      u=3*b2*(z*z-3)+b1*b1*(z^4-10*z*z+15)
      GI=w-phiz*z*u/72        //Edgeworth2
   } else if (x<a+1) {
      GI=Gser(x,a)
   } else {
      GI=Gcf(x,a)
   }
   return GI
}

function compute(form) {
    X=eval(form.argument.value)
    A=eval(form.alpha.value)
    B=eval(form.beta.value)
   if (A<=0) {
      alert("alpha must be positive")
   } else if (B<=0) {
      alert("beta must be positive")
   } else {
      Prob=Gammacdf(X/B,A)
   }
   Prob=Math.round(Prob*100000)/100000;
    form.result.value = Prob;
}
function Weibull(form) {
    X=eval(form.argument.value)
    Gamma=eval(form.gamma.value)
    B=eval(form.sigma.value)
    with (Math) {
      if (Gamma<=0) {
         alert("gamma must be positive")
      } else if (B<=0) {
         alert("Scale parameter must be positive")
      } else if (X<=0) {
         weibcdf=0
      } else {
         Z=X/B;
         W=pow(Z,Gamma);
         weibcdf=1-exp(-W);
         weibcdf=round(weibcdf*100000)/100000;
      }
   }
    form.result.value = weibcdf;
}
function LogGamma(Z) {
   with (Math) {
      var S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
      var LG= (Z-.5)*log(Z+4.5)-(Z+4.5)+log(S*2.50662827465);
   }
   return LG
}

function Betinc(X,A,B) {
   var A0=0;
   var B0=1;
   var A1=1;
   var B1=1;
   var M9=0;
   var A2=0;
   var C9;
   while (Math.abs((A1-A2)/A1)>.00001) {
      A2=A1;
      C9=-(A+M9)*(A+B+M9)*X/(A+2*M9)/(A+2*M9+1);
      A0=A1+C9*A0;
      B0=B1+C9*B0;
      M9=M9+1;
      C9=M9*(B-M9)*X/(A+2*M9-1)/(A+2*M9);
      A1=A0+C9*A1;
      B1=B0+C9*B1;
      A0=A0/B1;
      B0=B0/B1;
      A1=A1/B1;
      B1=1;
   }
   return A1/A
}
//compute1 == calc T distribution
function compute1(form) {
    X=eval(form.argument.value)
    df=eval(form.df.value)
    with (Math) {
      if (df<=0) {
         alert("Degrees of freedom must be positive")
      } else {
         A=df/2;
         S=A+.5;
         Z=df/(df+X*X);
         BT=exp(LogGamma(S)-LogGamma(.5)-LogGamma(A)+A*log(Z)+.5*log(1-Z));
         if (Z<(A+1)/(S+2)) {
            betacdf=BT*Betinc(Z,A,.5)
         } else {
            betacdf=1-BT*Betinc(1-Z,.5,A)
         }
         if (X<0) {
            tcdf=betacdf/2
         } else {
            tcdf=1-betacdf/2
         }
      }
      tcdf=round(tcdf*100000)/100000;
   }
    form.result.value = tcdf;
}
function LogGamma(Z) {
   with (Math) {
      var S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
      var LG= (Z-.5)*log(Z+4.5)-(Z+4.5)+log(S*2.50662827465);
   }
   return LG
}

function Betinc(X,A,B) {
   var A0=0;
   var B0=1;
   var A1=1;
   var B1=1;
   var M9=0;
   var A2=0;
   var C9;
   while (Math.abs((A1-A2)/A1)>.00001) {
      A2=A1;
      C9=-(A+M9)*(A+B+M9)*X/(A+2*M9)/(A+2*M9+1);
      A0=A1+C9*A0;
      B0=B1+C9*B0;
      M9=M9+1;
      C9=M9*(B-M9)*X/(A+2*M9-1)/(A+2*M9);
      A1=A0+C9*A1;
      B1=B0+C9*B1;
      A0=A0/B1;
      B0=B0/B1;
      A1=A1/B1;
      B1=1;
   }
   return A1/A
}

function Betacdf(Z,A,B) {
    var S;
    var BT;
    var Bcdf;
   with (Math) {
      S=A+B;
      BT=exp(LogGamma(S)-LogGamma(B)-LogGamma(A)+A*log(Z)+B*log(1-Z));
      if (Z<(A+1)/(S+2)) {
         Bcdf=BT*Betinc(Z,A,B)
      } else {
         Bcdf=1-BT*Betinc(1-Z,B,A)
      }
   }
   return Bcdf
}

function F(form) {
    X=eval(form.argument.value)
    f1=eval(form.f1.value)
    f2=eval(form.f2.value);
   if (f1<=0) {
      alert("Numerator degrees of freedom must be positive")
   } else if (f2<=0) {
      alert("Denominator degrees of freedom must be positive") 
   } else if (X<=0) {
      Fcdf=0
   } else {
      Z=X/(X+f2/f1);
      Fcdf=Betacdf(Z,f1/2,f2/2);
   }
   Fcdf=Math.round(Fcdf*100000)/100000;
    form.result.value = Fcdf;
}



 

// STOP HIDING FROM OTHER BROWSERS -->


