const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {
  const { Login } = this.entities; 
  const service = await cds.connect.to('db');

  this.on("CREATE", "Login", async (req) => {
    const { EmpID, EmpName, EmpAge } = req.data;     
    try {
      const result = await service.run(INSERT.into(Login).entries({ EmpID, EmpName, EmpAge }));      
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  });

  this.on("READ","Login",async(req)=>{
    try {
      return service.run(req.query)
    }catch(error){
      console.log(error);
    }
  })

  this.on('DELETE', 'Login', async (req) => {
    const { EmpID } = req.data;
    try {    
      const affectedRows = await cds.run(DELETE.from(Login).where({ EmpID: EmpID }));
    } catch (error) {
      console.error('Error deleting Login entry:', error);
    }
  });

  this.on("CREATE","Login",async(req)=>{
    try {
      return service.run(req.query)
    }catch(error){
      console.log(error);
    }
  })

  this.on('UPDATE', 'Login', async (req) => {
    const { EmpID, EmpName, EmpAge } = req.data;
    const data = {
      EmpName: EmpName,
      EmpAge: EmpAge
    };
    try {
      const affectedRows = await UPDATE(Login).set(data).where({ EmpID: EmpID });   
    } catch (error) {
      console.error('Error updating employee details:', error);
    }
  });

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

  this.on("LoginData", async (req) => {
    try {
      const result = await service.read(Login);     
      return result;
    } catch (error) {
      console.error("Error reading Login data:", error);
    }
  });

  this.on('LoginAction', async (req) => {
    const { EmpID, EmpName, EmpAge } = req.data;
    try {
        const result = await service.run(INSERT.into(Login).entries({ EmpID, EmpName, EmpAge }));      
        return result;
    } catch (error) {
       console.log(error);
    }
});
  
});
