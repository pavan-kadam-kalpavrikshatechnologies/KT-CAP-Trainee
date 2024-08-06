using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;
    entity Login as projection on my.Login;
    entity Employee as projection on my.Employee;
}
