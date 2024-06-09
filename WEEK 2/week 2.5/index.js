/*
const express = require("express")
function calculateSum(n){
    let ans = 0;
    for(let i=1; i<<n; i++){
        ans = ans + i;
    }
    return ans;
}
const app = express();
app.get("/", function(req,res){
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send(ans.toString());
})
app.listen(3000);
*/

const express = require("express");
const app = express();

function sum(n){
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.get("/", function(req, res){
    // res.send("Hello");
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi your answer is: "+ans);
});
app.listen(3000);