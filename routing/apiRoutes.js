var path = require("path");
var friendsData = require("../app/data/friends");

//matching algorithm===================
function checkMatch(data) {
    var current = data[data.length - 1].scores;
    var total = 0
    var checkTotal = 40;
    var match
    //loop throught people
    for (var i = 0, n = data.length - 1; i < n; i++) {
        //loop through score and add up the difference of each score
        for (var j = 0, x = data[i].scores.length - 1; j < x; j++) {
            // console.log('current',current[j]);
            // console.log('next',data[i].scores[j])
            total += Math.abs(parseInt(current[j]) - parseInt(data[i].scores[j]));
        }
        console.log('total', total);
        if (total < checkTotal) {
            match = data[i]//.name;
            checkTotal = total;
            console.log('Total', total);
            console.log('Match', match);
            total = 0;
        } else {
            total = 0;
        }
        console.log('match at 253', match);
    }
    console.log('match at 256', match);
    return match;
}
//=======================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    })

    app.post("/api/friends", function (req, res) {

        friendsData.push(req.body);
        res.json(checkMatch(friendsData));

    })
}


