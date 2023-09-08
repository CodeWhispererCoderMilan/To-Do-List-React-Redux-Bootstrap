import { combineReducers } from 'redux';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETE_TASK = "COMPLETE_TASK";

export function addTask(task) {
    return {
        type: 'ADD_TASK',
        task,
    }
}
export function deleteTask(task) {
    return {
        type: 'DELETE_TASK',
        task,
    }
}
export function completeTask(task) {
    return {
        type: 'COMPLETE_TASK',
        task,
    }
}
const defaultTasks = [
];
function tasks(state = defaultTasks, action) {
    switch (action.type) {
        case ADD_TASK:
                return [
                    ...state,
                    {
                        id: action.task.id,
                        title: action.task.title,
                        category: action.task.category,
                        completed: false,
                    }
                ];
        case DELETE_TASK:
            return state.filter((task)=> task.id !==action.task.id);
        case COMPLETE_TASK:
            return state.map(todo =>
                (todo.id === action.task.id) 
                  ? {...todo, completed: !todo.completed}
                  : todo
              )
        default:
            return state;
    }
}
const stateApp = combineReducers({
    tasks
});

export default stateApp;