let array1=[
    {name:"Alaa",age:23,id:1},
    {name:"Youssef",age:25,id:2},
    {name:"Bayan",age:24,id:3},
    {name:"Omar",age:26,id:4},
]

const express = require("express");
const app = express();

//1- get
app.get("/", (req, res) => {
  res.json(array1);
});
///////////////////////////////////////////////////////////////////////////
// 2-Add
  app.post("/addUser", express.json(), (req, res) => {
    let isExist = array1.find((elm) => elm.id == req.body.id);
    if (isExist) {
      res.json({ message: "id already exists" });
    } else {
      array1.push(req.body);
      res.json({ message: "user added successfully" });
    }
    res.send("add");
  });
//////////////////////////////////////////////////////////////////
//3-Sort
app.get("/getsorted", (req, res) => {
  let index = array1.sort((a,b)=>a.name>b.name?1:-1)
  res.json(index)
  });
  /////////////////////////////////////////////////////////////////
// 4-delete
  app.delete("/deleteUser", express.json(), (req, res) => {
    let { id } = req.body;
    console.log(id);
    let index = array1.findIndex((elm)=>elm.id==id)
    console.log(index);
    if (index < 0) {
      res.json({ message: "user not found" });
    } else {
      array2.splice(index, 1);
      res.json({ message: "deleted" });
    }
  });
/////////////////////////////////////////////////////////////////
// 5-update
  app.put('/update',express.json(),(req,res)=>{
    let{id,name}=req.body
    let index=array1.findIndex((elm)=>elm.id==id)
    array1[index].name=name
    res.json({message:"user updated"})
  })
  /////////////////////////////////////////////////////////////////
  // 6-Search by id
  app.post('/searchById',express.json(),(req,res)=>{
    let index = array1.findIndex((elm)=> elm.id==req.body.id)
    console.log(req.body.id)
    if(index == -1){
      res.json({message:"the post not found"})
    }else{
      res.json(array1[index])
    }
  })
///////////////////////////////////////////////////////////////////////
app.listen(3000, () => {
  console.log("Server running...");
});

/////////////////////////////////////////////////////////////////////
let array2=[
  {name:"Amera",Learn:"Html",id:"1"},
  {name:"Ahmed",Learn:"Css",id:"2"},
  {name:"Esraa",Learn:"Js",id:"3"},
  {name:"Mohammed",Learn:"ReactJs",id:"4"}
]

const app2 = express();
// 1-get
app2.get("/", (req, res) => {
  res.json(array2);
});
////////////////////////////////////////////////////////////////////
// 2-Add
app2.post("/addUser", express.json(), (req, res) => {
  let isExist = array2.find((elm) => elm.id == req.body.id);
  if (isExist) {
    res.json({ message: "id already exists" });
  } else {
    array1.push(req.body);
    res.json({ message: "user added successfully" });
  }
  res.send("add");
});
///////////////////////////////////////////////////////////////////
//3-Reverse
app2.get("/getreverse", (req, res) => {
  let index = array2.reverse((a,b)=>a.name>b.name?-1:1)
  res.json(index)
  });
  ///////////////////////////////////////////////////////////////////

// 4-Delete
app2.delete("/deleteUser", express.json(), (req, res) => {
  let { id } = req.body;
  console.log(id);
  let index = array2.findIndex((elm)=>elm.id==id)
  console.log(index);
  if (index < 0) {
    res.json({ message: "user not found" });
  } else {
    array2.splice(index, 1);
    res.json({ message: "deleted" });
  }
});
//////////////////////////////////////////////////////////////////////
// 5-update
app2.put('/update',express.json(),(req,res)=>{
  let{id,name}=req.body
  let index=array2.findIndex((elm)=>elm.id==id)
  array2[index].name=name
  res.json({message:"user updated"})
})
//////////////////////////////////////////////////////////////////////
// 6-Search by id
app2.post('/searchById',express.json(),(req,res)=>{
  let index = array2.findIndex((elm)=> elm.id==req.body.id)
  if(index == -1){
    res.json({message:"the post not found"})
  }else{
    res.json(array2[index])
  }
})
////////////////////////////////////////////////////////////////////
  app2.listen(3002, () => {
    console.log("Server running...");
  });