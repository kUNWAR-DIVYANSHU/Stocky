/**
 *  The main sketch for plotting the actual graph on screen
 *  there are other associated files used together with this file in this same directory
 *  there are some json configuration associated with this in config directory
 */

// get size of parent div for resizing and mapping
var padding = 5
var parentDiv = document.getElementById("graph")
var parentDivWidth = parentDiv.getBoundingClientRect().width - padding
var parentDivHeight = parentDiv.getBoundingClientRect().height - padding 

// updated in accordance with theme colors
var backgroundColor = "#000055"
var foregroundColor = "#ffffff"

let graphCanvas
// setup default params
// function setup(){
//     graphCanvas = createCanvas(parentDivWidth, parentDivHeight)
//     loadData();
// }

// updated after every frames actual plotting begins here
// function draw(){
//     background(backgroundColor)

//     loadData()
//     calculatePlotAndSubPlot()
//     calculateScaleAndTransformation()
//     plotGraph()
//     plotIndicators()
//     saveConfiguration()

// }

// auto resize canvas on window resize
// function windowResized() {
//     parentDivWidth = parentDiv.getBoundingClientRect().width - padding
//     parentDivHeight = parentDiv.getBoundingClientRect().height - padding
//     resizeCanvas(parentDivWidth , parentDivHeight)
//   }
  
  // function that is to be added to the different files 
  function loadData() {}
  function calculatePlotAndSubPlot() {}
  function calculateScaleAndTransformation() {}
  function plotGraph() {}
  function plotIndicators() {}
  function saveConfiguration() {}

  new TradingView.widget(
    {
    "width": parentDivWidth,
    "height": parentDivHeight,
    "symbol": "BSE:ACC",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "autosize": true,
    "locale": "in",
    "toolbar_bg": "#f1f3f6",
    "withdateranges": true,
    "hide_side_toolbar": false,
    "allow_symbol_change": true,
    "show_popup_button": true,
    "popup_width": "1000",
    "popup_height": "650",
    "container_id": "tradingview_873b4"
  }
    );