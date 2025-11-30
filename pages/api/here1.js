import {pool} from '../../lib/db';
export default async function handler(req,res){
   const method = req.method;
   const action =req.query.action;
    if(method==="POST"){
        if(action === "register"){
            const {name,email} = req.body
            const INSERTQUERY = `INSERT INTO "user"(name,email) values($1,$2)`
            const values=[name,email]
            await pool.query(INSERTQUERY,values)
            res.status(200).json({user:req.body,message:"User Registered Successfully"})
        }
       else if(action === "login"){
            res.status(200).json({message:"POST METHOD WITH LOGIN ACTION REQUESTED "})
        }
    }
    else  if(method === "GET"){
        
        const {userid}= req.query;
         const SELECTQUERY = `SELECT * FROM "user" where id=$1`;
        const array=[userid];
        const result = await pool.query(SELECTQUERY,array);
       // query(string,array) query(string)
        res.status(200).json({users:result.rows})
    }
}