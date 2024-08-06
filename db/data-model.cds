namespace my.bookshop;
using { managed } from '@sap/cds/common';

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

entity Login {
  key EmpID : Integer;
  EmpName:String(50);
  EmpAge:String(50);
}

entity Employee:managed {
  key ID : UUID;
}