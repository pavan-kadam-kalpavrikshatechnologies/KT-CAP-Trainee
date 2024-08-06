const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {
  const { Login } = this.entities; // Define the entity
  const service = await cds.connect.to('db');

  this.on("CREATE", "Login", async (req) => {
    const { EmpID, EmpName, EmpAge } = req.data;     
    try {
      const result = await service.run(
        INSERT.into(Login).entries({ EmpID, EmpName, EmpAge }));      

    } catch (error) {
      console.error("Error inserting data:", error);
      req.reject(500, "Internal Server Error");
    }
  });

  this.on("READ","Login",async(req)=>{
    try {
      return service.run(req.query)
    }catch(error){
      console.log(error);
    }
  })

  this.on("CREATE", "Employee", async (req) => {
    // const { EmpID} = req.data;     
    try {
      const result = await service.run(
        INSERT.into(Login).entries(req.data));      

    } catch (error) {
      console.error("Error inserting data:", error);
      req.reject(500, "Internal Server Error");
    }
  });
});
