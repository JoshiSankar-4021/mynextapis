export default function handler(req,res){
    if(req.method === 'POST'){
        res.status(200).json({message:"POST request received"})
        res.status(200).json({message:"this is second response"})
    }

    else if(req.method === "GET"){
        res.status(200).json({message:"GET request received"})
    }

    else if(req.method === "PUT"){
        res.status(200).json({message:"PUT request received"})
    }

    else if(req.method === "DELETE"){
        res.status(200).json({message:"DELETE request received"})
    }

}