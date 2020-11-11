var drawscatterPlot = function(classData)
    var svg = d3.select("#actualgraph1")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);
{ d3.select("svg")
    var circles = svg.selectAll("circle")
                .data(classData)
                .enter()
                .append("circle");
        circles.attr("cx", function(classData)
              {
    return getHomeworkgrade(classData);
}
              )
         .attr("cy", function(classData)
              {
    return getFinalgrade(classData);
}
              )
         .attr("r", 5)};

var drawScatterplot2 = function(classData)
   var svg = d3.select("#actualgraph2")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);
{ d3.select("svg")
    var circles = svg.selectAll("circle")
                .data(classData)
                .enter()
                .append("circle");
        circles.attr("cx", function(classData)
              {
    return getHomeworkgrade(classData);
}
              )
         .attr("cy", function(classData)
              {
    return getQuizgrade(classData);
}
              )
         .attr("r", 5)};

var retrievePromise = d3.json("classData.json");
var successFCN = function(classData) {
    console.log("data", classData);
    drawScatterplot(classData);
    drawScatterplot2(classData);
}


var failFCN = function(errMessage) {
    console.log("failure", errMessage);
}
retrievePromise.then(successFCN, failFCN);

var getGrade = function(item){
            return item.grade;
        };
            var getFinalgrade = function(student){
        var final = student.final;
        var finalScores = final.map(getGrade);
        var avg = d3.mean(finalScores);
        return avg;
            };
            var getHomeworkgrade = function(student){
            var homework = student.homework;
            var homeworkScores = homework.map(getGrade);
            var avg = d3.mean(finalScores);
                return avg;};
            var getQuizgrade = function(student){
                var quiz = student.homework;
                var quizScores = quiz.map(getGrade);
                var avg = d3.mean(finalScores);
                return avg;
            };
     var xscale = d3.scalelinear()
            .domain(10,490)
            .range(10,390);
    var yscale = d3.scalelinear()
            .domain(10,490)
            .range(10,390);

    var getImage = function(item)
    {
        return item.picture;
    }
    d3.select("svg")
.on("mouseover", function(d){
    var xposition = parseFloat(d3.select(this).attr("cx"));
    parseFloat(d3.select(this).attr("cy"));
    
svg.append("img")
    .attr("id", "tooltip")
    .attr("x", xposition)
    .attr("y", yposition)
    getImage(classData);
            });             
.on("mouseout", function(){
    d3.select("#tooltip").remove();
})
    d3.select("graph1")
    .on("click",function())
    .selectall("#actualgraph1")
    .remove("#actualgraph1")
    .selectall("#actualgraph2")
    .append("#actualgraph2")
                
    d3.select("graph2")
    .on("click",function())
    .selectall("#actualgraph2")
    .remove("#actualgraph2")
    .selectall("#actualgraph1")
    .append("#actualgraph1")
