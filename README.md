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


# 3: useRef()

useRef is a React Hook that lets you reference a value that’s not needed for rendering.

useRef hook is used to create reference to dom element and to manupulate it.

useRef hook return an object with single a property, current .


useRef is a React hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object persists for the full lifetime of the component. This hook is primarily used for accessing and interacting with DOM elements directly, storing mutable values that do not cause re-renders when updated, and maintaining values across renders without causing re-renders.