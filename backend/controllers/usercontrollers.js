export const getusers = async(req,res)=>{
    try{

    }catch{error}{
        console.log("Error in getusers controller: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
}