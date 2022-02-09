alert('Welcome to Todo list app');
alert('First some instructions!');
alert('Type "new" and then type what you want to add on the next step!');
alert('Type "list" to view the list, "delete" to delete the recently added todo!');
alert('If you want to exit the app type "quit"!');
let input = prompt('Type new to create a Todo:');
const list = [];
let i = 0;
while (true) {
    if (input.toLowerCase() !== 'new') {
        input = prompt('Type new to create a Todo');
    } else {
        let todo = prompt('What do you want to add?');
        list.push(todo);
        i++;
        console.log(`${todo} is the work no. ${i} successfully added to the list!`);
        let action = prompt('What do you want to do now?');
        while (true) {
            if (action === 'new') {
                todo = prompt('What do you want to add?');
                list.push(todo);
                i++;
                console.log(`${todo} is the work no. ${i} successfully added to the list!`);
                action = prompt('What do you want to do now?');
            } else if (action === 'delete') {
                let deletedAssignment = list.pop();
                i--;
                console.log(`${deletedAssignment} work successfully deleted from the list!`);
                action = prompt('What do you want to do now?');
            } else if (action === 'list') {
                console.log('#########################');
                console.log('List:');
                for (let item of list) {
                    console.log(`# ${item}`);
                }
                console.log('#########################');
                action = prompt('What do you want to do now?');
            } else if (action === 'quit') {
                console.log('App succefully exited!');
                break;
            } else {
                action = prompt('Choose the right option!');
            }
        }
        if (action === 'quit') {
            break;
        }
    }
}


