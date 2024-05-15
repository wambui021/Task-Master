// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add Task function
function addTask(task) {
    db.collection("tasks").add({
        task: task,
        completed: false
    })
    .then(() => {
        console.log("Task added successfully!");
        // Reload tasks
        loadTasks();
    })
    .catch((error) => {
        console.error("Error adding task: ", error);
    });
}

// Delete Task function
function deleteTask(taskId) {
    db.collection("tasks").doc(taskId).delete()
    .then(() => {
        console.log("Task deleted successfully!");
        // Reload tasks
        loadTasks();
    })
    .catch((error) => {
        console.error("Error deleting task: ", error);
    });
}

// Update Task function
function updateTask(taskId, task) {
    db.collection("tasks").doc(taskId).update({
        task: task
    })
    .then(() => {
        console.log("Task updated successfully!");
        // Reload tasks
        loadTasks();
    })
    .catch((error) => {
        console.error("Error updating task: ", error);
    });
}

// Mark Task as Completed function
function markTaskCompleted(taskId, completed) {
    db.collection("tasks").doc(taskId).update({
        completed: completed
    })
    .then(() => {
        console.log("Task marked as completed!");
        // Reload tasks
        loadTasks();
    })
    .catch((error) => {
        console.error("Error marking task as completed: ", error);
    });
}

// Load Tasks function
function loadTasks() {
    // Fetch tasks from Firestore
    db.collection("tasks").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const task = doc.data();
            // Display task in UI
            // You can manipulate the DOM to display tasks in the UI
        });
    })
    .catch((error) => {
        console.error("Error loading tasks: ", error);
    });
}

// Initialize the app by loading tasks
loadTasks();
