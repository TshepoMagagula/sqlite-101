import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

console.log('start')

const  db = await sqlite.open({
    filename:  './101.db',
    driver:  sqlite3.Database
});

await db.migrate()

//call the query using an await
//create a function that returns all the greetings from the db

export async function getGreetings() {
    const result = await db.all(`SELECT * FROM greetings`);
    return result;
}

const result = await getGreetings()
console.log(result);

//create a function that deletes a specific greeting
export async function deleteGreeting(id) {
    //sql statement type- insert
    const sql = `DELETE FROM greetings WHERE id = ?`;
    await db.run(sql, [id]);
}


//create a function that adds a new greeting
export async function addGreeting (language, greeting) {
    //sql statement type- insert
    const sql = `INSERT INTO greetings(language, greeting) VALUES (?, ?)`
    await db.run(sql, [language, greeting])
}

/* const result1 = await getGreetings()
console.log(result1); */
// console.log('==================')

/* await deleteGreeting(8);
await deleteGreeting(7);
await deleteGreeting(5);

console.log('================')

const result2 =await getGreetings()
console.log(result2); */

/* await addGreeting('Sepedi', 'Dumela');
console.log('====================')
const result2 = await getGreetings();
console.log(result2) */

// call the query using an await
/* const result = await db.all(`SELECT * FROM greetings`);
console.log(result); */

// call the query using a promise
/* db
    .all(`SELECT * FROM greetings`)
    .then(result => {
        console.log(result)
    })

const countResult = await db.get(`SELECT COUNT(*) AS count FROM greetings`);
console.log(countResult) */

// end   

//Update
export async function updateGreeting(language, greeting, id) {
    const sql = `UPDATE greetings SET language = ?, greeting = ? WHERE id = ?`;
    await db.run(sql, [language, greeting, id])
}

/* await updateGreeting('Sepedi', 'Thobela', 21)
console.log('=====================')

const result2 =await getGreetings()
console.log(result2); */



console.log('end')