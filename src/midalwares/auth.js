const authfunc = (req,res,next)=>{
    const token ="xyz";
    const autorizefun = token === "xyz";
    if( autorizefun){
        res.send("hello from Admin");
    }
    else{
        res.status(401).send("autorization not successful");
    }
    
};

module.exports = {
    authfunc
}