using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly
    entity Books    as projection on my.Books;

    entity Login    as projection on my.Login;
    entity Employee as projection on my.Employee;
    function LoginData()   returns array of Login;
    action LoginAction(EmpID: String(20), EmpName: String(50), EmpAge: String(30)) returns array of Login;
}
