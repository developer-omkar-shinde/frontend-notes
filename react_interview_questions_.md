### 🚀 What is React JS ✅

### 🚀 Lifecycle methods vs Hooks

componentDidMount - on component mount  
componentDidUpdate - dependacy array  
componentWillUnmount - on component unmounted

### 🚀 What is unidirectional data flow in react.js

### 🚀 What is the react Memo.

### 🚀 How data flow in react.js

### 🚀 What is the HOC? any use case.

### 🚀 What Are Child Props in React?

### 🚀 What is mounting and rendring.

### 🚀 How to pass data from child to parent component?

### 🚀 How to optimize react app? any example?

### 🚀 What are the diffrent ways to call API in react?

### 🚀 What is the React Context api

### 🚀 What is Redux and how it works?

### 🚀 What are the middlewares?

### 🚀 Stateful vs Stateless Components in React

### 🚀 Redux Thunk vs Saga?

### 🚀 What is the Virtual DOM, and how does it improve performance? ✅

- The Virtual DOM (VDOM) is a lightweight JavaScript representation of the actual DOM (Document Object Model). Instead of making direct changes to the real DOM, React updates the Virtual DOM first, calculates the differences, and then applies only the necessary changes to the real DOM.

Think of the Virtual DOM as a blueprint of the UI that React maintains in memory.

### 🚀 Describe the key differences between functional and class components in React. ✅

### 🚀How can you prevent unnecessary re-renders in React functional components? ✅

### 🚀 Explain React's Strict Mode and its impact on development. ✅

### 🚀 What is the significance of the React Fiber architecture? ✅

### 🚀 How does React handle side effects, and how can you manage them effectively?

### 🚀 Explain the differences between `useMemo()` and `useCallback()` in React. ✅

### 🚀 What is lazy loading in React, and how does it improve application performance? ✅

### 🚀 How would you handle errors in a React app, and what is the role of error boundaries? ✅

### 🚀 What are the benefits of server-side rendering (SSR) in React applications? ✅

### 🚀 How would you pass data between sibling components in React without using Redux? ✅

### 🚀 Explain the use case of `useEffect()` for fetching data from an API. ✅

### 🚀 Describe how React Context API can be used for state management in an app. ✅

### 🚀 . How would you optimize React app performance when handling large lists or grids?

### 🚀 How would you implement custom hooks to abstract logic in React? ✅

### 🚀 How would you implement a search feature with debouncing in React? ✅

### 🚀 How many instances of VDOM always exist in React? ✅

### 🚀 How to pass state between two components, not related to each other, without using any state library and local storage? ✅

### 🚀 Which is created and rendered first? Real DOM or VDOM? And why? ✅

### 🚀 Is there any difference between browser paint and rendering?

### 🚀 What causes rerendering in React? ✅

### 🚀 When and why to use a state management library? ✅

### 🚀 Is using the map to render children components with "i" as an index in key a safe method? ✅

### 🚀 Can you create a custom hook? If yes, in which cases to use it? ✅

### 🚀 When and why do you go for Redux or other third-party tools? Why it couldn't be solved with useReducer, Context API? ✅

### 🚀 What is React Fiber, and how does it improve React performance? ✅

### 🚀 Explain React's Reconciliation process. ✅

### 🚀 What are Suspense and Concurrent Mode in React?✅

### 🚀 How would you handle localization and internationalization in a frontend application?

### 🚀 What are the different types of frontend testing?

<details>
1. Unit Testing
2. Integration Testing
3. End-to-End (E2E) Testing
4. Functional Testing (Validates that each feature of the application works as intended.)
5. Performance Testing
6. Security Testing
</details>

### 🚀 How the Virtual DOM Works in React?

React follows a three-step Reconciliation process to update the UI efficiently:

- Step 1 : Render Phase (Create Virtual DOM)  
  When the state or props change, React re-renders the component and creates a new Virtual DOM.
- Step 2 : Reconciliation (Diffing Algorithm)  
  React compares the new Virtual DOM with the previous one using a diffing algorithm to identify changes.
- Step 3 : Commit Phase (Update Real DOM)  
  React batch updates only the changed elements in the real DOM instead of re-rendering the entire page.

#### 💡Key Points:

- React does not modify the entire DOM; it updates only the differences.
- React batches updates to optimize performance.
- Fiber Architecture powers this process in modern React (from React 16 onwards).

---

### 🚀 Explain the difference between controlled and uncontrolled components.

### 🚀 What are keys in React, and why are they important?

- In React, keys are special attributes used to identify elements in a list. They help React efficiently update the UI by tracking which items have changed, been added, or removed.

---

---

# ------ Advance Questions ------

### 🚀 How does dependency injection work in frontend development?

### 🚀 What is the difference between monolithic and microservices architecture in frontend applications? ✅

### 🚀 How does WebSockets work compared to long polling?

### 🚀 How do you prevent XSS (Cross-Site Scripting) in React applications?

- Always sanitize and validate any user input before rendering it. Use libraries like DOMPurify to clean HTML content and remove malicious scripts.
- Avoid dangerouslySetInnerHTML - The dangerouslySetInnerHTML prop can introduce XSS vulnerabilities if used improperly. Only use it when you fully trust the content and have sanitized it.
- If we are accepting any URL in input, validate is is valid URL.

```javascript
import DOMPurify from "dompurify";
const userInput = '<script>alert("XSS")</script>';
const safeHTML = DOMPurify.sanitize(userInput);
```

### 🚀 What are Module Federation and Webpack's role in micro-frontends?

### 🚀 What are the benefits of Micro Frontends, and when should they be used? ✅

### 🚀 How does GraphQL work, and how is it different from REST?




-------------------------------------



1. What is React and why is it popular?
2. What are the limitations of React?
3. Key advantages of using React in large-scale apps?
4. Explain Strict Mode in React,when do you use it?
5. Can React Hooks replace Redux in all scenarios?
6. Difference between useState() and useReducer().
7. How does useEffect() work? List real use cases.
8. How do you prevent unnecessary re-renders in React?
9. What’s the Virtual DOM and why does it matter?
10. Controlled vs uncontrolled components,when to use each?
11. Handling forms and form validation in React.
12. How do refs work? When should you use them?
13. Error boundaries,how and why to use them?
14. React context API,how does it help with prop drilling?
15. useCallback() vs useMemo(),when and why?
16. SSR vs CSR,benefits and trade-offs in React.
17. What is lazy loading in React? Give practical examples.
18. Code splitting in React,how do you implement it?
19. How do you manage global state in React apps?
20. Redux vs Context API,when to choose what?
21. What’s the purpose of keys in lists? Why are they needed?
22. Fragment vs div,how and when to use each?
23. Portals in React,what are they, and why would you use one?
24. useRef(),how does it differ from createRef()?
25. useLayoutEffect() vs useEffect().
26. Best practices for side effects in React apps.
27. Debouncing and throttling in React,where and how?
28. How do you handle component communication (parent-child, siblings)?
29. Prop drilling,problems and solutions.
30. React Router,how do you manage navigation and params?
31. Dynamic routing,how do you set it up?
32. How do you test React components? (unit, integration, e2e)
33. How does React handle events? Custom vs native events.
34. How do you optimize React performance in large apps?
35. What is reconciliation? How does React diff trees?
36. Mounting, updating, and unmounting phases,what happens when?
37. How do you fetch data on mount? (show code)
38. When should you use class components over function components (if ever)?
39. HOCs vs render props,differences, use cases, gotchas.
40. Lifting state up,what is it and when do you do it?
41. Memoization,how do you actually use React.memo()?
42. How to handle browser resize or scroll events in React.
43. How to secure a React app? (common vulnerabilities)
44. Integrating third-party libraries in React (charts, maps, etc.)
45. Common pitfalls with useEffect() and how to avoid them.
46. How do you handle authentication in React?
47. Accessibility in React,what do you do for a11y?
48. How do you manage environment variables in a React app?
49. Deployment strategies for React apps (static, server-side, etc.)
50. Debugging tools and techniques for React developers. 51. What happens during the React rendering lifecycle?
52. How does React handle state batching in event handlers vs async code?
53. What is the difference between React 17 and React 18 features (e.g., automatic batching, concurrent mode)?
54. Explain the concept of Server Components in React and how they differ from client components.
55. How does React differ from frameworks like Angular or Vue?
56. What are React Server Actions? How do they work in Next.js?
57. What are Parallel Routes and Intercepting Routes in Next.js App Router?
58. How do Suspense boundaries work in React?
59. What is the role of key prop in diffing algorithm and what happens if you forget it?
60. How do you handle performance bottlenecks in a React-heavy UI (e.g., large lists)?
61. When would you avoid using useEffect()? What are some common anti-patterns?
62. What’s the purpose of dangerouslySetInnerHTML and what are its risks?
63. What is hydration in React and when does it occur?
64. Explain hydration errors in SSR and how to fix them.
65. How does React Native differ from React for web, and what concepts stay the same?
