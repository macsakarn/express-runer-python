const express = require("express")
let { PythonShell } = require("python-shell")
const app = express()
const cors = require('cors')
const port = 3000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/", (req, res) => {
  let script = req.body.script
  PythonShell.runString(script, null, function (err, results) {
      if (err){
          res.json({
              status:true,
              message:err.traceback
           })
      }else{
          res.json({
              status:true,
              message:results
           })
      }
    })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
