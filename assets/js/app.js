// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//make the scatter plot
// function buildScatter() {
//Read the data
d3.csv("../assets/data/data.csv").then(function (data) {

    // declare x axis
    var x = d3.scaleLinear()
        .domain([10, 50])
        .range([0, width]);
    //add to svg
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // declare y axis
    var y = d3.scaleLinear()
        .domain([0, 50])
        .range([height, 0]);
    //append y axis
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add dots
        // .append("g")
        svg.selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(Number(d.age)) })
        .attr("cy", function (d) { return y(Number(d.smokes)) })
        .attr("r", 8)
        .attr("stroke", "blue")
        .attr("stroke-width", 3)
        .attr("fill", "grey")

    //try to add the text in as well
    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("font-size", "11px")
        .attr("fill", "black")
        .text(function (d) { return d.abbr }) // state abbreviation
        .attr("x", function (d) { return x(Number(d.age)) }) // type cast into a number
        .attr("y", function (d) { return y(Number(d.smokes)) }) // type cast into a number

    console.log("Age:" + Number(data.age))
    console.log(typeof (data.age))//reads in a a string
    console.log("Smokers: " + data.smokes)
    console.log("Abbreviations:" + data.abbr)
    // console.log(type(data.age))
})
// }
// //make the scatter plot
// buildScatter();