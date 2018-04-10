// Challenge 1
// Print all of the students and their cohort

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudents() {
    for (let student in students) {
        let name = students[student].name;
        let cohort = students[student].cohort;
        console.log("Name: " + name + ", " + "Cohort: " + cohort);
    }
};

printStudents();


// Challenge 2
// Print out the object to match the following ouput:
// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printUsers() {
    for (let key in users) {
        console.log(key.toUpperCase())
        let position = 0;

        for (user in users[key]) {
            ++position;
            let f_name = users[key][user].first_name.toUpperCase();
            let l_name = users[key][user].last_name.toUpperCase();
            let length = f_name.length + l_name.length;
            console.log(position + " - " + l_name + ", " + f_name + " - " + length);
        }
    };
};

printUsers();