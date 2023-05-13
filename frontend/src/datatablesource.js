export const EmployeeColoumns =[
    //{ field: 'id', headerName: 'ID', width: 70 },
       
    {
        field:"employeeID",
        headerName:"Employee ID", 
        width:110 ,
        unique:true,
    },
    {
        field:"employeeName",
        headerName:"Employee Name", 
        width:140 ,
    },
    {
        field:"dateOfBirth",
        headerName:"Date of Birth", 
        width:120 ,
    },
    {
        field:"gender",
        headerName:"Gender", 
        width:90 ,
    },
    {
        field:"phoneNumber",
        headerName:"Phone Number", 
        width:130,

    },
    {
        field:"address",
        headerName:"Address", 
        width:215 ,
    },
    {
        field:"employeeTitle",
        headerName:"Employee Title", 
        width:160,
    },
    {
        field:"salary",
        headerName:"Salary", 
        width:100 ,
    },
];

export const EmployeeSalaryColoumns =[
    //{ field: 'id', headerName: 'ID', width: 70 },
       
    {
        field:"employeeid",
        headerName:"Employee ID", 
        width:140 ,
        unique:true,
    },
    {
        field:"basicSalary",
        headerName:"Basic Salary", 
        width:150 ,
    },
    {
        field:"allowance",
        headerName:"Allowance", 
        width:150 ,
    },
    {
        field:"overtime",
        headerName:"OverTime", 
        width:135 ,
    },
    {
        field:"attendance",
        headerName:"Attendence", 
        width:140,

    },
    {
        field:"totalSalary",
        headerName:"Total Salary", 
        width:160 ,
    },
];
