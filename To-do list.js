let input = prompt('what would you like to do?');
const toDos = ['To-do1','To-do2'];
while(input !== 'quit' && input !== 'q') {
    if (input === 'new') {
        const newToDo = prompt('Enter new to-do list.');
        toDos.push(newToDo);
        console.log(`${newToDo} is added to to-do list`);
    } else if (input === 'list'.toLowerCase()) {
        console.log('*****')
        for (let i = 0; i < toDos.length; i ++) {
            console.log(`${i}:${toDos[i]}`);
        }
        console.log('*****')
    } else if (input === 'delete'.toLowerCase()) {
        const indexToDelete = parseInt(prompt('Enter the index of to-do to delete'));
        if(!Number.isNaN(indexToDelete)) {       const deleted = toDos.splice(indexToDelete,1);
        console.log(`Ok, deleted ${deleted[0]}`);
        } else {console.log('not valid');}
    } else {
        console.log('Unknown Index');
    }
    input = prompt('what would you like to do?')
} console.log('OK You quit!');
