const express = require("express");
const router = express.Router();
//import getGoals from "../controllers/goalsController"
const { getGoals, postGoal, putGoal, deleteGoal} = require("../controllers/goalsController"); 

/*router.get("/",(req,res) => {
    //res.send({"name":"Teach react16","duration":"1month"});
    res.status(200).json({"name":"Teach react16","duration":"1month","message":"get"})
})*/

/*router.get("/",getGoals);
router.post("/",postGoal);
router.put("/:id",putGoal);
router.delete("/:id",deleteGoal);*/
router.route("/").get(getGoals).post(postGoal);
router.route("/:id").put(putGoal).delete(deleteGoal);
module.exports = router;
