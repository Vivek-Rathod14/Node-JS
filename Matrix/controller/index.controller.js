exports.login= async(req,res)=>{
    try {
        return res.render("login")
    } catch (error) {
        console.log(error);
        res.redirect("/");
        
    }
}
exports.dashboard= async(req,res)=>{
    try {
        return res.render("dashboard")
    } catch (error) {
        console.log(error);
        res.redirect("/");
        
    }
}