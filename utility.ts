// utility : in type script there are built in types that helps  to transform  or manipulate other types in a convient way;

// types of utltiy:
// 1. partial - means not all the property are required to be there
// 2. required - means the thing which are optional they are also need to be filled
// 3. readonly -
// 4. pick - to pick the property which we need
// 5.omit - to omit the proeprty which we dont need
// 6.exculde - same to excule the the thing
// 7.nonNullable
// 8.record

// 1;
interface College {
  name: string;
  location: string;
  students: number;
  branch?: number;
}

let collegeData: Partial<College> = {
  name: "medicpas",
  location: "indore",
  students: 15000,
};

// same in function also
function getcollegedata(data: Partial<College>) {
  console.log(data);
}
getcollegedata({ name: "medooc" });

function getcollegedata2(data: Required<College>) {
  console.log(data);
}
getcollegedata2({
  name: "medooc",
  location: "indore",
  students: 15000,
  branch: 100,
});

let collegeData3: Pick<College, "name" | "location"> = {
  name: "medicpas",
  location: "indore",
  // students: 15000,
};
