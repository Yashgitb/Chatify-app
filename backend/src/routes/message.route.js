import express from "express"

const router = express.Router();

router.get("/send",(req,res)=>{
    res.send("Send Input");
})

router.get("/recieve",(req,res)=>{
    res.send("Recieve Input");
})

export default router;


