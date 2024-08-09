namespace my.bookshop;


entity Books {
      key ID    : Integer;
          title : String;
          stock : Integer;
}

// entity Login {
//   key EmpID    : String(20);
//       EmpName  : String(50);
//       EmpAge   : String(50);
//       employee : Composition of Employee on employee.login = $self;
// }
// employee : Composition of Employee on employee.EmpID = $self.EmpID;

// entity Employee {
//   key EmpID     : String(20);
//       firstName : String(50);
//       lastName  : String(50);
//       login : Association to Login;
// }

// login : Association to Login on login.EmpID = EmpID;


entity Login {
      key EmpID    : String(10);
          EmpName  : String(50);
          EmpAge   : String(50);
          employee : Composition of Employee
                           on employee.EmpID = $self.EmpID;
}

entity Employee {
      key EmpID     : String(10);
          firstName : String(50);
          lastName  : String(50);
          login     : Association to Login;
}
