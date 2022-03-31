export const todoListSelector = (state) => {
    const todosRemaining = state.todoList.filter((todo)=>{
        return todo.name.includes(state.filter.search);
    })

    return todosRemaining;
};

export const searchTextSelector = (state) => state.filter.search;
