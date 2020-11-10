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
                return avg;
     var scale = d3.scalelinear()
            .domain([10,490])
            .range([10,390]);
                
                d3.select("body")
    .selectall("p")
    .data(classData)
    .enter()
    .append("p")
    .text(getHomeworkgrade);
    
var svg = d3.select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
var scatterPlot = d3.select("svg")
    svg.selectAll("circle")
                .data(dataset)
                .enter()
                .append("circle")
                .attr("cx", function(classData)
              {
    return getHomeworkgrade;
}
              )
         .attr("cy", function(classData)
              {
    return getFinalgrade;
}
              )
         .attr("r", 5);
    var scatterplotPromise = d3.json("classData.json");
var successFCN = function(classData) {
    console.log("data", classData);
    svg(classData);
    scatterPlot(classData);
}


var failFCN = function(errMessage) {
    console.log("failure", errMessage);
}
