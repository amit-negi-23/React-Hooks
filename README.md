# React-Hooks

Hooks are special functions, that allow us to use state and other React feature in functional components.

Hooks allow function components to have access to state and other React features. 

Hooks allow us to "hook" into React features such as state and lifecycle methods.

Hooks were added to React in version 16.8.

Earlier, When we used to create react app using Functional component, then we didn't have access to the
state management and lifecycle method.
To access these features we had to add class components.
So this was the problem with functional component.

But after introducing React hooks from version 16.8 we can now use state management and other react features
without writing class components.

In other words , Hooks are the functions that make functional components work like class components.

Developers prefer functional components over class components.

# Hook Rules
There are 3 rules for hooks:

1) Hooks can only be called inside React function components.
2) Hooks can only be called at the top level of a component.
3) Hooks cannot be conditional

# Benefits of React Hooks

React hooks simplify the code, improves the readability, reusability and overall performance of the application.

## Hooks
useState
useEffect
useRef
useMemo
useCallback
useContext
useReducer
useLayoutEffect



# 2: useEffect()
The useEffect Hook allows you to perform side effect in your components.

## Some exaple of side effects are:
1) Fetching data from Api
2) Directly updating the DOM.
3) Timer like setTimeout and setInterval 

## Key Points 
useEffect hook takes two arguments:
1) Callback function :  A function that contains the code for the side effect. 
2) Dependency Array : An optional array of dependencies that determine when the effect should be re-run.

## Dependency Array
1) No Array: The effect runs after every render.
2) Empty Array ([]): The effect runs only once, when the component mounts, and the cleanup function (if provided) runs when the component unmounts.
3) Array with Dependencies: The effect runs only when one of the dependencies has changed.

## Cleanup Function
The function returned by the effect function is the cleanup function. It's executed before the component unmounts and before the effect runs again on subsequent renders.

The cleanup function in the useEffect hook is used to clean up side effects to prevent memory leaks and other issues. It is executed in two main scenarios:

1) Before the component unmounts: This is useful for cleaning up any persistent side effects like subscriptions or timers.
2) Before the effect runs again: If the effect has dependencies and those dependencies change, the cleanup function runs before the effect is re-executed.