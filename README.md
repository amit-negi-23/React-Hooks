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
