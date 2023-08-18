const express = require('express');
const app = express();
const PORT = 3000;



// Greeting App
app.get("/greeting/:name", (req, res)=>{
    const name = req.params.name
    res.status(200).json ({
        message: `What's up, ${name}?`
    });

});

//Tip Calculator Express Application
app.get("/tip/:total/:tipPercentage", (req, res)=>{
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage / 100
    const tipTotal = total * tipPercentage
    res.status(200).json({message: `Please leave a tip of $${tipTotal}`})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});