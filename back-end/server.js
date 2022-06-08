const express = require('express');
const graphQL = require('./graphql')
const app  = express();
const PORT = process.env.PORT || 8080

// Intialize graphQL API endpoint 
graphQL(app)

app.use('/',(req,res)=>{
  res.status(200).json({message:"API's main endpoint"})
})

// bootstrapping project
function bootstrap(){
  app.listen(PORT,(err)=>{
    if(err){
      console.log(`Failed to run server - ${err}`)
    }else{
      console.log(`Server running on port ${PORT}`)
    }
  })
}

bootstrap()