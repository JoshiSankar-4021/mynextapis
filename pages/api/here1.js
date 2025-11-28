export default function handler(req,res){
   const method = req.method;
   const action =req.query.action;
    if(method==="POST"){
        if(action === "register"){
            res.status(200).json({message:"POST METHOD WITH REGISTER ACTION REQUESTED"})
        }
       else if(action === "login"){
            res.status(200).json({message:"POST METHOD WITH LOGIN ACTION REQUESTED "})
        }
    }
}