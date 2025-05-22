// Function to store an object in local storage
function storeObject(key, obj) {
    const jsonString = JSON.stringify(obj);
    localStorage.setItem(key, jsonString);
    console.log(`Stored: ${key} = ${jsonString}`);
}

// Function to retrieve an object from local storage
function getObject(key) {
    const jsonString = localStorage.getItem(key);
    if (jsonString) {
        const obj = JSON.parse(jsonString);
        console.log(`Retrieved: ${key} =`, obj);
        return obj;
    } else {
        console.log(`No value found for key: ${key}`);
        return null;
    }
}

// Example usage
storeObject('task1', { title: 'Buy groceries', completed: false });
storeObject('task2', { title: 'Clean the house', completed: true });

const task1 = getObject('task1');
const task2 = getObject('task2');