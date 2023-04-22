const router = require("express").Router();
let Employee = require("../models/Employee");

//add to db
router.route("/add").post((req,res)=>{
     
    const employeeID = req.body.employeeID;
    const employeeName = req.body.employeeName;
    const dateOfBirth = req.body.dateOfBirth;
    const gender = req.body.gender;
    const phoneNumber = Number(req.body.phoneNumber);
    const address = req.body.address;
    const employeeTitle = req.body.employeeTitle;
    const salary = Number(req.body.salary);


    const newEmployee = new Employee({

        employeeID,
        employeeName,
        dateOfBirth,
        gender,
        phoneNumber,
        address,
        employeeTitle,
        salary

    })

    newEmployee.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })


})

//fetch to db
router.route("/").get((req,res)=>{

    Employee.find().then((employee)=>{
        res.json(employee)
    }).catch((err)=>{
        console.log(err)
    })

})



//update to db
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {employeeID,employeeName,dateOfBirth,gender,phoneNumber,address,employeeTitle,salary} = req.body;

    const updateEmployee = {
        employeeID,
        employeeName,
        dateOfBirth,
        gender,
        phoneNumber,
        address,
        employeeTitle,
        salary
    }

    const update = await Employee.findByIdAndUpdate(userId,updateEmployee)
    .then(()=> {
        res.status(200).send({status:"User updated"})

    }).catch((err)=>{ 
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.message});

    })

})

//delete from db

router.route("/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Employee.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});

    })

})

//fetch single from db

router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;
   const user = await Employee.findById(userId)
    .then((employee)=>{
        res.status(200).send({status:"User fetched",employee})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error: err.message});
    })
})


module.exports = router;


