1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

3 Javascript methods that don't produce side effects are .map() .filter() and .concat(), .map() is the method we use to create anew object while extending the properties of the previous object

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions role in redux is to manage the state of the action that's going to be executed. it creates a copy of the original state, and updates it.

reducers role in redux is determine what the state should look like for each case that the actions state attempts to execute. 

stores role in redux is to manage the state tree it's known as a single source of truth because every state that the app will go through is managed there.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

the difference between application state and component state is that application state is used over the entire application, where as component state is just relevent to the component that's rendering at the particuar moment. 

1.  What is middleware?

Middlewear is a dependecy that allows multiple proccesses to be run.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk is a middlewear dependecy that allows smoother programing in our redux applications. It helps our action creators execute their actions on the api


1.  Which `react-redux` method links up our `components` with our `redux store`?

The connect method is what allows our components to be linked to the redux-store.
