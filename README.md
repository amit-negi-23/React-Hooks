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

1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional

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

# 1: useState()

useState is a react hook, which creates an "state variable". Which helps us to track state in components & updates
the user interface when state changes.

<!-- useState is a react hook, which is used to create "state variable" to manage state  -->

## Key Points

1) Whenever we call useState hook , it returns an array of two elements: the current state value and a function to update that state.

   First Value - State Variable 
   Second Value - setter Function 

2) default value of state variable -- undefined

3) if you want to set initial value of state variable you need to pass initial value as an argument inside useState hook.



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

# 3: useRef()

useRef is a React Hook that lets you reference a value that’s not needed for rendering.

useRef hook is used to create reference to dom element and to manupulate it.

useRef hook return an object with a current property .

useRef is a versatile hook that can be useful in various scenarios, from interacting with the DOM to managing mutable state that doesn’t need to trigger a re-render.

useRef is a hook in React that provides a way to persistently store a mutable value across renders. It is primarily used to access and interact with DOM elements directly, but it can also be used to keep track of mutable values without causing re-renders.

useRef is a React hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object persists for the full lifetime of the component. This hook is primarily used for accessing and interacting with DOM elements directly, storing mutable values that do not cause re-renders when updated, and maintaining values across renders without causing re-renders.

function MyComponent() {  
  // ...  
  // 🚩 Don't write a ref during rendering  
  myRef.current = 123;  
  // ...  
  // 🚩 Don't read a ref during rendering  
  return <span>{myOtherRef.current}</span>;  
}

### Note : Sometimes, you may want to let the parent component manipulate the DOM inside of your component. For example, maybe you’re writing a MyInput component, but you want the parent to be able to focus the input (which the parent has no access to). You can use a combination of useRef to hold the input and forwardRef to expose it to the parent component.