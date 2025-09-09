// utility : in type script there are built in types that helps  to transform  or manipulate other types in a convient way;
var collegeData = {
    name: "medicpas",
    location: "indore",
    students: 15000,
};
// same in function also
function getcollegedata(data) {
    console.log(data);
}
getcollegedata({ name: "medooc" });
function getcollegedata2(data) {
    console.log(data);
}
getcollegedata2({
    name: "medooc",
    location: "indore",
    students: 15000,
    branch: 100,
});
