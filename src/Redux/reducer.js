const initState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
    { id: 2, name: "Learn React", completed: true, priority: "Medium" },
    { id: 3, name: "Learn JS", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload,
        ],
      };
    case "filter/searchFilterChange":
      return{
        ...state,
        filter:{
          ...state.filter,
          search: action.payload
        }
      }


    default:
      return state;
  }
};

export default rootReducer;
