1. What problem does the context API help solve?

context helps solving passing props down from components

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 store is read only
store keep track of state is data in one place
dispatch actions describe  what is happening to the reducer so it know what to update

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. Describe `redux-thunk`, what does it allow us to do? How does it 
change our `action-creators`?

thunk is middleware thunk a function in a function, middleware intercepts every action that is dispatch before it get to reducer.
1. What is your favorite state management system you've learned and this sprint? Please explain why!'

I'm in the middle I dont like props so I like that Context takes care of that but I can see when u want to use redux and Im kinda understanding it better so yeah that where I at with it
