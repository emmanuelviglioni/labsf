import axios from 'axios';

export async function fetchTasks() {
    try {
        const taskResponse = await axios.get('http://localhost:8080/api/task');
        const dateTaskResponse = await axios.get('http://localhost:8080/api/dateTask');
        const deadLineTaskResponse = await axios.get('http://localhost:8080/api/deadLineTask');
        console.log(taskResponse)
        console.log(dateTaskResponse)
        console.log(deadLineTaskResponse)
        return [...taskResponse.data, ...dateTaskResponse.data, ...deadLineTaskResponse.data];
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return []; // return an empty array in case of an error
    }
}