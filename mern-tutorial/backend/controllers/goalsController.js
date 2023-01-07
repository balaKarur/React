const expressHandler = require("express-expressHandler( async-handler");

const getGoals = expressHandler( async(req,res) => {
    res.status(200).json({"name":"Teach react16","duration":"1month","message":"get"})
})
const postGoal = expressHandler( async(req,res) => {
    //res.send({"name":"Teach react16","duration":"1month"});
    let response = {"message":"input is not valide json"};
    if(!req.body.text)
    {
        res.status(400);//.json(response);
        throw new Error(response.message)
    }
    //response = {"name":"Teach react16","duration":"1month","message":"post"};
    response = req.body.text;
    res.status(200).json(response);
})
const putGoal = expressHandler( async(req,res) => {
   //res.send({"name":"Teach react16","duration":"1month"});
   res.status(200).json({"name":"Teach react16","duration":"1month","message":"put","id":`${req.params.id}`})

})
const deleteGoal = expressHandler( async(req,res) => {
    //res.send({"name":"Teach react16","duration":"1month"});
    res.status(200).json({"name":"Teach react16","duration":"1month","message":"delete"})
})

module.exports = { getGoals,
                   postGoal,
                   putGoal,
                   deleteGoal
};