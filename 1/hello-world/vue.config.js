let data=require("./src/mock/data")
console.log(data)
module.exports={
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get("/api",(req,res)=>{
        res.json({
          list:data
        })
      })
    }
  }
}