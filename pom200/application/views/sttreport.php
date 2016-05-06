<?php
?>
do not run in firefox
<!DOCTYPE html>
<html>
<head>
</head>
<script type="text/javascript" src="/pom200/include/js/statistics-functions.js"></script>
<body>
<!--
<style>
body{
    font-family: Arial;
	background-color: #f0f0f0;
	margin: 0px;
}
h2{	
	margin: 30px 0px 10px 0px;
}
input[type=submit], input[type=button]{
    padding: 8px 12px;
	font-size: 1.1em;
}
#wrapper{
}
#header {
	background-color: #202020;
    background-image: linear-gradient(180deg, #303030, #000000);
	color: #ffffff;
	padding: 20px;
	font-size: 2em;
}
.innerRow{
	max-width: 1200px;
    margin: 0px auto;
}
.cell{
	background-color: #ffffff;
	border: 1px solid #cccccc;
	padding: 10px;
}
.cellFloat {
    float:left;
	margin-right: 20px;
}
td {
 border-bottom: 1px solid #f0f0f0;
}
</style>
!-->


<div id="wrapper">
<div id="header">
<div class="innerRow">Statistics Report</div>
</div>
</div>


<div class="innerRow">
<h2>Data Set</h2>

	<p>
	Enter numbers separated by commas. Spaces and line breaks are ignored. Click "Calculate" to calculate statistics for the data.
	</p>
	
	<div id="data" contenteditable="true" class="cell">
	1,1,1,2,3,4,4,3,4,5,3,2,1,2,3,4,10,9,8
	</div>

	<form onsubmit="doCalc(); return false;" action="#">
	<input type="submit" value="Calculate" >
	<input type="button" value="Sort" onclick="doSort(); return false;">
	<span id="dataStatusMsg">Data OK</span>
	</form>

	<div class="cellFloat"> 
	<h2>Statistics</h2>

	<table class="cell" cellspacing="0" cellpadding="4">
	<tr><td>Count</td><td align="right"><span id="count"></span></td></tr>
	<tr><td>Sum</td><td align="right"><span id="sum"></span></td></tr>
	<tr><td>Max</td><td align="right"><span id="max"></span></td></tr>
	<tr><td>Min</td><td align="right"><span id="min"></span></td></tr>
	<tr><td>Mean</td><td align="right"><span id="mean"></span></td></tr>
	<tr><td>Median</td><td align="right"><span id="median"></span></td></tr>
	<tr><td>Mode</td><td align="right"><span id="mode"></span></td></tr>
	<tr><td>Range</td><td align="right"><span id="range"></span></td></tr>
	</table>
	</div>
	
	<div class="cellFloat" >
	<h2>Frequency Distribution</h2>
	<div class="cell" style="width:440px; overflow:auto;"> 
	<div>
	  <canvas id="freqDistCanvas"  width="400" height="200"></canvas>
	</div>
	</div>
	</div>

</div>

<script>
var dataSet = [1,1,1,2,3,4,4,3,4,5,3,2,1,2,3,4,10,9,8];
</script>

<!-- <script src="statistics-functions.js"></script>


<script>
function el(id){
	return document.getElementById(id);
}
function elText(id) {
    return el(id).innerText;
}
function elSet(id, html) {
    var elm = el(id);
	if(elm == null) {
		console.log("element is null");
	} else {
	    elm.innerHTML = html;
	}
}

function getData(el) {
   var dataObj = {};
   dataObj.dataStr = el.innerText;
   dataObj.dataStrArray = dataObj.dataStr.split(",");
   
   dataObj.dataArray = new Array();
   
   dataObj.statusMsg = "";

   for(var i=0; i<dataObj.dataStrArray.length; i++) {
	 var trimmedVal = dataObj.dataStrArray[i].trim();
	
	 if(trimmedVal.indexOf(" ") > -1) {
	   dataObj.statusMsg = "Error in data value: '" + trimmedVal + "'";
	 }
	 var val = parseFloat(trimmedVal);
	
	 if(isNaN(val)) {
	   dataObj.statusMsg = "Error in data value: " + trimmedVal;
	 }
	
	 dataObj.dataArray.push(val);
   }
   
   return dataObj;
}



function doSort() {
	var dataObj = getData(el("data"));
	sort(dataObj.dataArray);
	var dataStr = "";
	for(var i=0; i < dataObj.dataArray.length; i++){
	  if(i > 0) {
	    dataStr += ",";
	  }
	  dataStr += dataObj.dataArray[i];
	}
	elSet("data", dataStr);
}

function doCalc() {
  var dataObj = getData(el("data"));
  elSet("dataStatusMsg", dataObj.statusMsg == "" ? "Data OK": dataObj.statusMsg);

  calculateStatistics(dataObj);

  elSet("count", dataObj.count);
  elSet("sum"  , dataObj.sum);

  elSet("max", dataObj.max);
  elSet("min", dataObj.min);

  elSet("mean"  , dataObj.mean3);	  
  elSet("median", dataObj.median);
  elSet("mode"  , dataObj.mode);
  elSet("range" , dataObj.range);
  
  
  drawFreqDist(dataObj); 
}

function drawFreqDist(dataObj) {
  var canvas  = document.getElementById("freqDistCanvas");
  var context = canvas.getContext("2d");
	
  var width = parseInt(canvas.getAttribute("width"), 10);
  var height= parseInt(canvas.getAttribute("height"), 10);
  
  context.clearRect(0,0, width, height);

  var padding = 20;
	
  var histogramHeight = height - (padding * 2);
	
  var maxFreq = 0;
  var maxFreqSet = false;
  var freqCount = 0;
  for(var key in dataObj.freqDist) {
	var freq = dataObj.freqDist[key];
	
	if(!maxFreqSet || freq > maxFreq) {
	  maxFreqSet = true;
	  maxFreq = freq;
	}
	freqCount++;
  }
  console.log("maxFreq: " + maxFreq);
  
  
  var pixelsPer1Freq = histogramHeight / maxFreq;

  var barWidth = (width - (padding * 2)) / freqCount ;
  var minBarWidth = 20;
  if(barWidth < minBarWidth) {
    barWidth = minBarWidth; 
  } 

  if(freqCount * barWidth > width) {
    canvas.setAttribute("width", freqCount * barWidth + (2 * padding));
  }   
	
  var i = 0;
  context.textAlign = "center";
  for(var key in dataObj.freqDist){
	  console.log(key + " : " + dataObj.freqDist[key]);
	  var freq = dataObj.freqDist[key];
	  
	  var x = i*barWidth;
	  var y = histogramHeight - (pixelsPer1Freq * freq) + padding;
	  var width = barWidth - 2;
	  var height = pixelsPer1Freq * freq;
	  
      context.fillStyle = "#303f9f";  
	  context.fillRect(x+1, y, width, height);
	  
      context.fillStyle = "#000000";
      context.fillText("" + key , x+(barWidth/2), histogramHeight + padding + 10);	  
      context.fillText("" + freq, x+(barWidth/2), y - 4);	  
	  
	  i++;
  }
	
}

doCalc();


</script>
</body>
</html>