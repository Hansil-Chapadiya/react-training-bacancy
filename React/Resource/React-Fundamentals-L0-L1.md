# React Fundamentals: Level 0 & Level 1

> **Target Audience**: Developers with advanced JavaScript and intermediate TypeScript knowledge seeking deep architectural understanding of React's core primitives.

---

## Table of Contents

1. [Why React Exists](#1-why-react-exists)
2. [Virtual DOM](#2-virtual-dom)
3. [Components](#3-components)
4. [State and useState](#4-state-and-usestate)
5. [Rendering Model](#5-rendering-model)

---

## 1. Why React Exists

### Problems with Manual DOM Manipulation

**Core Issue**: The DOM API is imperative and stateful. As application complexity grows, maintaining synchronization between application state and DOM state becomes exponentially difficult.

```javascript
// Manual DOM manipulation - imperative, error-prone
let count = 0;
const button = document.querySelector('#btn');
const display = document.querySelector('#display');

button.addEventListener('click', () => {
  count++;
  display.textContent = count; // Manual sync
  if (count > 5) {
    display.style.color = 'red'; // More manual sync
  }
  // What if we forget to update something?
  // What if update order matters?
  // What if multiple events affect the same DOM?
});
```

**Problem Characteristics**:
- **Scattered updates**: DOM mutations spread across event handlers
- **Implicit dependencies**: No clear data flow from state → UI
- **No single source of truth**: State lives in variables, DOM, and event handlers
- **Brittle**: Adding features requires precise coordination of when/where to mutate DOM

### Imperative vs Declarative Programming

**Imperative**: Describe **how** to achieve result (step-by-step mutations)
```javascript
// Tell the computer HOW to do it
const list = document.querySelector('#list');
const item = document.createElement('li');
item.textContent = 'New item';
list.appendChild(item);
```

**Declarative**: Describe **what** the result should be
```javascript
// Tell the computer WHAT you want
function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
}
```

With declarative code, the framework handles the "how" - you focus on mapping state to UI structure.

### UI = f(state) Explanation

React's core principle is treating UI as a **pure function** of state:

```
UI = render(state)
```

**Implications**:
- Given the same state, you always get the same UI
- No hidden mutations or side effects in render logic
- UI is deterministic and predictable
- Time-travel debugging becomes possible (replay state)

```typescript
// Conceptual model
type State = { count: number };
type UI = VirtualDOMNode;

function render(state: State): UI {
  // Pure function: same input → same output
  return <div>Count: {state.count}</div>;
}

// Any time state changes, re-render
// React handles the "diffing" and minimal real DOM updates
```

### Why State-Driven UI Matters

**Traditional Approach**: State scattered, UI manually synchronized
```
Events → State mutations → Manual DOM updates (you manage)
```

**React Approach**: Centralized state, automatic UI synchronization
```
Events → State update → Automatic re-render → Minimal DOM updates (React manages)
```

**Benefits**:
1. **Single source of truth**: State is explicit and centralized
2. **Predictability**: UI always reflects current state
3. **Testability**: Test state changes, not DOM mutations
4. **Developer experience**: Focus on "what" not "how"

### Why React Avoids Direct DOM Manipulation

**Technical Reasons**:
1. **DOM operations are slow**: Reflow/repaint cycles are expensive
2. **Batching impossible**: Direct mutations can't be batched/optimized
3. **No reconciliation**: Can't track what actually changed
4. **Breaks React's assumptions**: React tracks a virtual representation; direct DOM mutations desync it

**Architectural Reasons**:
1. **Control**: React needs to control rendering to optimize
2. **Consistency**: Direct mutations break the UI = f(state) model
3. **Predictability**: Hidden mutations make debugging impossible

```typescript
// ❌ Anti-pattern - breaks React's model
function BadComponent() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    ref.current!.textContent = 'Manual mutation'; // React doesn't know about this
  }, []);
  
  return <div ref={ref}>Original</div>;
}

// ✓ React's model - declarative
function GoodComponent({ text }: { text: string }) {
  return <div>{text}</div>; // React manages DOM
}
```

### Summary

- **Problem**: Imperative DOM manipulation doesn't scale with complexity
- **Solution**: Declarative, state-driven UI where `UI = f(state)`
- **Key insight**: Separate "what" (your code) from "how" (React's responsibility)
- **Trade-off**: Give React control of DOM for optimization and predictability
- **Mental model**: Write render as pure function; React handles efficient updates

---

## 2. Virtual DOM

### What Virtual DOM Actually Is

The Virtual DOM (VDOM) is a **lightweight JavaScript object tree** that mirrors the structure of the real DOM. It's React's in-memory representation of the UI.

```typescript
// React element (Virtual DOM node)
const vdom = {
  type: 'div',
  props: {
    className: 'container',
    children: [
      {
        type: 'h1',
        props: { children: 'Hello' }
      },
      {
        type: 'p',
        props: { children: 'World' }
      }
    ]
  }
};

// Created from JSX:
// <div className="container">
//   <h1>Hello</h1>
//   <p>World</p>
// </div>
```

**Key Properties**:
- Plain JavaScript objects (cheap to create)
- No real DOM API calls (fast)
- Serializable and inspectable
- Immutable snapshots

### Why Virtual DOM Exists

**Problem**: Real DOM operations are expensive
- Reflow: Browser recalculates layout
- Repaint: Browser redraws pixels
- Each DOM change can trigger cascading updates

**Solution**: Batch and minimize real DOM operations
1. Generate new VDOM (cheap)
2. Diff old VDOM vs new VDOM (cheap)
3. Calculate minimum changes needed (reconciliation)
4. Apply only necessary changes to real DOM (expensive, but minimized)

```
State change → New VDOM → Diff → Minimal DOM patches
```

**Performance Reasoning**:
- VDOM creation: O(n) in JavaScript (fast)
- Diffing: O(n) with heuristics (fast)
- DOM updates: Only changed nodes (minimized)

### Reconciliation (Diffing Algorithm Concept)

**Reconciliation** is React's diffing algorithm that compares two VDOM trees and determines minimal real DOM updates.

**Core Heuristics** (O(n) instead of O(n³)):

1. **Different types → Full replacement**
   ```jsx
   // Old
   <div>Content</div>
   // New
   <span>Content</span>
   // Result: Destroy div, create span (even if content same)
   ```

2. **Same type → Update props**
   ```jsx
   // Old
   <div className="old">Content</div>
   // New
   <div className="new">Content</div>
   // Result: Update className only, keep DOM node
   ```

3. **Keys for list items**
   ```jsx
   // Without keys - positional matching
   // [A, B, C] → [A, B, C, D]: Patch all + append D
   
   // With keys - identity matching
   // [A, B, C] → [A, B, C, D]: Append D only
   ```

**Algorithm Flow**:
```
┌─────────────────┐
│   Old VDOM      │
└────────┬────────┘
         │
         ├─────────► Compare (by type & key)
         │
┌────────▼────────┐
│   New VDOM      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Patch List     │
│  - Update X     │
│  - Remove Y     │
│  - Insert Z     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Real DOM      │
└─────────────────┘
```

### Render vs Real DOM

**Render**: Function execution that produces a VDOM tree
```typescript
function MyComponent({ name }: { name: string }) {
  // This is "render" - returning VDOM
  return <div>Hello {name}</div>;
}

// When called, produces:
// { type: 'div', props: { children: ['Hello ', 'Alice'] } }
```

**Real DOM**: Browser's actual DOM tree (expensive)
```javascript
// This is Real DOM manipulation
const div = document.createElement('div');
div.textContent = 'Hello Alice';
document.body.appendChild(div); // Triggers reflow/repaint
```

**Separation**:
- **Your code**: Returns VDOM (cheap, pure JS)
- **React's job**: Sync VDOM to Real DOM efficiently

### Why React Recreates Virtual DOM Every Render

**Conceptual Reason**: Immutability and purity
```typescript
// React's model - pure function
function render(state: State): VDOM {
  return createUI(state);
}

// Every state change = new VDOM tree
// Compare: oldVDOM vs newVDOM
```

**Why New Tree Every Time**:
1. **Simplicity**: No mutation tracking needed
2. **Correctness**: Always accurate representation of current state
3. **Functional approach**: Same state → same output (referential transparency)
4. **Cheap**: Creating JS objects is fast

**Alternative Would Be Worse**:
```typescript
// ❌ Mutating VDOM would be complex
// How do you know what changed?
// Need dirty tracking, subscriptions, observers
// More code, more bugs, more complexity
```

### Why Real DOM is NOT Fully Recreated

**Reason**: Real DOM operations are expensive

```javascript
// Expensive operations
element.appendChild(child);       // Reflow
element.style.color = 'red';      // Repaint
element.innerHTML = '<div>...</div>'; // Parse, reflow, repaint
```

**React's Strategy**:
1. Create new VDOM (cheap)
2. Diff old vs new VDOM (cheap)
3. Generate patch list (cheap)
4. Apply minimal patches to real DOM (expensive, but minimized)

```typescript
// Example
// Old VDOM
{ type: 'div', props: { className: 'old', children: ['Hello'] } }

// New VDOM
{ type: 'div', props: { className: 'new', children: ['Hello'] } }

// Diff result
[{ type: 'updateProp', node: divNode, prop: 'className', value: 'new' }]

// Real DOM operation
divNode.className = 'new'; // Only this operation
```

### Performance Reasoning

**Why This Architecture**:

```
Creating VDOM (O(n) JS)          ← Fast
    ↓
Diffing (O(n) comparison)        ← Fast
    ↓
Patch list (O(k) where k=changes) ← Minimal
    ↓
Real DOM updates (O(k))          ← Expensive but minimized
```

vs

```
Direct DOM manipulation          ← Expensive
    ↓
Every state change               ← Unoptimized
    ↓
Manual batching (if you're careful) ← Error-prone
```

**Trade-offs**:
- **Memory**: Keeps VDOM in memory (acceptable for UI scale)
- **CPU**: Diffing cost (O(n) is acceptable with optimizations)
- **Benefit**: Automatic batching and minimized DOM operations

**When VDOM Might Not Help**:
- Extremely large lists (use virtualization)
- Real-time high-frequency updates (consider direct Canvas/WebGL)
- Simple static pages (overhead not worth it)

### Summary

- **Virtual DOM**: Lightweight JS object tree mirroring real DOM structure
- **Purpose**: Batch and minimize expensive real DOM operations
- **Reconciliation**: Diffing algorithm (O(n)) to find minimal changes
- **New VDOM every render**: Simplicity and correctness (cheap in JS)
- **Real DOM reused**: Only patch changed nodes (expensive operations minimized)
- **Performance model**: Trade JS work (cheap) for less DOM work (expensive)
- **Mental model**: VDOM is React's "draft" before committing to real DOM

---

## 3. Components

### Function Components

Function components are **pure functions** that take props and return React elements (VDOM).

```typescript
// Minimal component
function Greeting() {
  return <h1>Hello</h1>;
}

// With props
interface GreetingProps {
  name: string;
  age?: number;
}

function Greeting({ name, age }: GreetingProps) {
  return (
    <div>
      <h1>Hello {name}</h1>
      {age && <p>Age: {age}</p>}
    </div>
  );
}
```

**Characteristics**:
- Pure functions (conceptually)
- No side effects in render logic
- Return VDOM (React elements)
- Reusable and composable

**Component Composition**:
```typescript
function App() {
  return (
    <div>
      <Header />
      <Main>
        <Article />
        <Sidebar />
      </Main>
      <Footer />
    </div>
  );
}
```

### How JSX Compiles (React.createElement)

JSX is **syntactic sugar** for `React.createElement` calls.

```jsx
// JSX
const element = <h1 className="title">Hello</h1>;

// Compiles to
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello'
);

// Which produces
const element = {
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello'
  },
  key: null,
  ref: null,
  $$typeof: Symbol.for('react.element')
};
```

**Nested JSX**:
```jsx
<div id="container">
  <h1>Title</h1>
  <p>Content</p>
</div>

// ↓ Compiles to

React.createElement(
  'div',
  { id: 'container' },
  React.createElement('h1', null, 'Title'),
  React.createElement('p', null, 'Content')
);
```

**Custom Components**:
```jsx
<Greeting name="Alice" />

// ↓ Compiles to

React.createElement(Greeting, { name: 'Alice' });

// Note: type is function reference, not string
{
  type: Greeting,  // Function reference
  props: { name: 'Alice' },
  ...
}
```

**Why This Matters**:
- JSX is not magic - it's function calls
- Components are identified by type (string for HTML, function for custom)
- Props are just function arguments (as object)
- Children are props (`props.children`)

**New JSX Transform** (React 17+):
```jsx
// Modern JSX (no React import needed)
import { jsx } from 'react/jsx-runtime';

<div>Hello</div>
// ↓
jsx('div', { children: 'Hello' });
```

### Component Re-execution Model

**Key Principle**: When a component re-renders, **the entire function runs again from top to bottom**.

```typescript
function Counter() {
  console.log('Function executing'); // Runs on every render
  
  const [count, setCount] = useState(0);
  
  const double = count * 2; // Recalculated every render
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Execution Flow**:
```
1. Initial render: Execute Counter() → VDOM₁
2. User clicks button → setCount(1)
3. React schedules re-render
4. Execute Counter() again → VDOM₂
5. Diff VDOM₁ vs VDOM₂ → Patch real DOM
```

**What Gets Recreated**:
- Variables
- Functions
- Objects/arrays (unless memoized)
- JSX expressions

**What Persists** (React manages):
- State values (useState)
- Refs (useRef)
- Effect cleanup (useEffect)

```typescript
function Component() {
  console.log('Component re-running');
  
  const [count, setCount] = useState(0); // State persists
  
  const obj = { value: count }; // ⚠️ New object every render
  const handler = () => setCount(count + 1); // ⚠️ New function every render
  
  return <button onClick={handler}>{obj.value}</button>;
}
```

**Why This Works**:
- React maintains state in separate memory (fiber node)
- Each render is a "snapshot" of component with current state values
- Closures capture state values from that render

### Why Components Are Pure Functions (Conceptually)

**Ideal Component**:
```typescript
// Pure: Same props + same state → same output
function PureComponent({ name }: { name: string }) {
  const [count] = useState(0);
  
  // No side effects, no mutations
  // Deterministic output
  
  return <div>{name}: {count}</div>;
}
```

**What "Pure" Means in React Context**:
1. **No mutations**: Don't mutate props, state, or external variables
2. **Deterministic**: Same inputs → same rendered output
3. **No side effects during render**: No API calls, timers, subscriptions in render body

**Impure Patterns** (avoid in render):
```typescript
function ImpureComponent({ items }: { items: string[] }) {
  items.push('new'); // ❌ Mutating prop
  
  let external = 0;
  external++; // ❌ Side effect
  
  fetch('/api'); // ❌ Side effect
  
  return <div>{items.length}</div>;
}
```

**Correct Approach**:
```typescript
function PureComponent({ items }: { items: string[] }) {
  // Derive new data, don't mutate
  const updatedItems = [...items, 'new'];
  
  // Side effects in effects
  useEffect(() => {
    fetch('/api');
  }, []);
  
  return <div>{updatedItems.length}</div>;
}
```

**Why Purity Matters**:
1. **Predictability**: Easier to reason about
2. **React's assumptions**: React may call render multiple times
3. **Concurrent features**: Strict Mode and concurrent rendering
4. **Optimizations**: React can skip renders if inputs unchanged

**Strict Mode Behavior**:
```typescript
// In development, React calls render twice to detect impurity
function Component() {
  console.log('Render'); // Logs twice in Strict Mode
  return <div>Hello</div>;
}

// If component has side effects, double-invocation reveals bugs
```

### Summary

- **Function components**: Pure functions taking props, returning VDOM
- **JSX compilation**: Sugar for `React.createElement` calls producing plain objects
- **Re-execution model**: Entire function runs on every render; variables recreated
- **Purity concept**: Avoid mutations and side effects during render
- **Mental model**: Component function is called repeatedly; React manages persistence (state/refs)
- **Key insight**: Separation between your function (stateless) and React's management (stateful)

---

## 4. State and useState

### Why Normal Variables Fail

Normal variables don't trigger re-renders and don't persist between renders.

```typescript
function Counter() {
  let count = 0; // ❌ Reset to 0 every render
  
  const increment = () => {
    count++; // ❌ Mutates local variable
    console.log(count); // Shows updated value
    // But component doesn't re-render
  };
  
  return (
    <div>
      <p>Count: {count}</p> {/* Always shows 0 */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

**Why This Fails**:
1. **No persistence**: Variable recreated on every function call
2. **No re-render**: Changing variable doesn't tell React to re-render
3. **Lost between renders**: Each render sees `count = 0`

### Why Global Variables Fail

Global variables persist but don't trigger re-renders and break component isolation.

```typescript
let globalCount = 0; // ❌ Outside component

function Counter() {
  const increment = () => {
    globalCount++; // Updates global
    // But React doesn't know to re-render
  };
  
  return (
    <div>
      <p>Count: {globalCount}</p> {/* Doesn't update on screen */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

**Why This Fails**:
1. **No re-render trigger**: React doesn't track global variables
2. **Shared state**: Multiple instances share same variable (breaks isolation)
3. **No React integration**: Can't use React's optimization features

**If You Force Re-render**:
```typescript
let globalCount = 0;

function Counter() {
  const [, forceUpdate] = useState(0); // Hack
  
  const increment = () => {
    globalCount++;
    forceUpdate(x => x + 1); // Manual re-render
  };
  
  return <div>Count: {globalCount}</div>; // Works but ugly
}
```

This works but defeats React's design. Multiple Counter instances still share state.

### State = Memory + Re-render Trigger

**State is React's primitive for**:
1. **Persistence**: Value survives between renders
2. **Re-render trigger**: Updating causes component re-render
3. **Isolation**: Each component instance has its own state

```typescript
function Counter() {
  const [count, setCount] = useState(0);
  //     ↑      ↑         ↑
  //   current  updater   initial
  //   value    function  value
  
  const increment = () => {
    setCount(count + 1); // Schedule re-render with new value
  };
  
  return (
    <div>
      <p>Count: {count}</p> {/* Shows current state */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

**Mental Model**:
```
┌─────────────────────────────────────┐
│  React's Internal Fiber Node        │
│                                      │
│  component: Counter                  │
│  hooks: [                            │
│    { state: 0, queue: [] }  ← Hook 0 │
│  ]                                   │
└─────────────────────────────────────┘
         ↓ useState() reads from here
┌─────────────────┐
│ Your Component  │
│ const [count,   │
│   setCount] =   │
│   useState(0)   │
└─────────────────┘
```

### How useState Works Internally (Conceptual Hook Array Model)

React maintains an array of hooks per component instance. Hook calls must occur in the same order every render.

```typescript
// Simplified conceptual model

let currentFiber = null; // Current component instance
let hookIndex = 0; // Current hook position

function useState<T>(initialValue: T): [T, (newValue: T) => void] {
  const fiber = currentFiber;
  const index = hookIndex++;
  
  // Initialize hook array if first render
  if (!fiber.hooks[index]) {
    fiber.hooks[index] = {
      state: initialValue,
      queue: [] // Pending updates
    };
  }
  
  const hook = fiber.hooks[index];
  
  // Setter function
  const setState = (newValue: T) => {
    hook.queue.push(newValue);
    scheduleRender(fiber); // Trigger re-render
  };
  
  return [hook.state, setState];
}

function render(component: Function) {
  hookIndex = 0; // Reset for this render
  currentFiber = getFiberFor(component);
  component(); // Call component function
}
```

**Key Insights**:
- Hooks stored in array on fiber node
- Array index is hook's identity
- hookIndex resets to 0 each render
- Hook order must be consistent

### Why Hooks Must Be Called in Same Order

React relies on **call order** to match hooks to their stored state.

```typescript
function Component({ condition }: { condition: boolean }) {
  // Render 1: condition = false
  // Hook 0
  const [a, setA] = useState('a');
  
  if (condition) {
    // Hook 1 (only if condition true)
    const [b, setB] = useState('b'); // ❌ Conditional hook
  }
  
  // Hook 1 or 2 depending on condition
  const [c, setC] = useState('c');
  
  return <div>{a} {c}</div>;
}
```

**What Happens**:
```
Render 1 (condition=false):
  hookIndex=0 → useState('a') → hooks[0]
  hookIndex=1 → useState('c') → hooks[1]

Render 2 (condition=true):
  hookIndex=0 → useState('a') → hooks[0] ✓
  hookIndex=1 → useState('b') → hooks[1] ❌ Expects 'c', gets 'b'
  hookIndex=2 → useState('c') → hooks[2] ❌ Wrong position

Hooks mismatch → State corruption
```

### Why Hooks Cannot Be Conditional

Hooks must be at top level, not in conditionals, loops, or nested functions.

```typescript
// ❌ Wrong
function Component({ show }: { show: boolean }) {
  if (show) {
    const [value, setValue] = useState(0); // Hook call is conditional
  }
  
  items.forEach(() => {
    const [item, setItem] = useState(0); // Hook in loop
  });
  
  const helper = () => {
    const [state, setState] = useState(0); // Hook in nested function
  };
}

// ✓ Correct
function Component({ show }: { show: boolean }) {
  const [value, setValue] = useState(0); // Always called
  
  const [items, setItems] = useState<number[]>([]);
  
  const [state, setState] = useState(0); // Top level
  
  // Use state conditionally, not hook itself
  return <div>{show && <span>{value}</span>}</div>;
}
```

**Rule**: Hooks must be called in the exact same order every render.

### Closure Behavior in State Updates

State setters capture values from their render's closure.

```typescript
function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1); // ⚠️ Captures count from this render
    setCount(count + 1); // Same count value
    setCount(count + 1); // Same count value
  };
  
  // Button clicked once: count goes from 0 → 1, not 3
  return <button onClick={handleClick}>+3</button>;
}
```

**Why Only +1**:
```
Initial render:
  count = 0
  handleClick captures count = 0
  
User clicks:
  setCount(0 + 1) → 1
  setCount(0 + 1) → 1 (overwritten)
  setCount(0 + 1) → 1 (overwritten)
  
Next render:
  count = 1
```

**Each render has its own closure**:
```typescript
function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setTimeout(() => {
      console.log(count); // Logs count from when this closure was created
      setCount(count + 1); // Uses stale count
    }, 3000);
  };
  
  // Click twice quickly, wait 3s → count becomes 1, not 2
  return <button onClick={handleClick}>Delayed +1</button>;
}
```

### Functional State Update vs Direct Value Update

**Functional update** uses previous state, not closure value.

```typescript
function Counter() {
  const [count, setCount] = useState(0);
  
  // Direct value (closure)
  const badIncrement = () => {
    setCount(count + 1); // Uses captured count
    setCount(count + 1); // Same count
  };
  
  // Functional update
  const goodIncrement = () => {
    setCount(prev => prev + 1); // Uses latest state
    setCount(prev => prev + 1); // Uses latest state
    setCount(prev => prev + 1); // Uses latest state
  };
  
  return (
    <>
      <button onClick={badIncrement}>Bad +3</button> {/* Only +1 */}
      <button onClick={goodIncrement}>Good +3</button> {/* Actually +3 */}
    </>
  );
}
```

**Functional Update Execution**:
```
Initial state: 0

goodIncrement called:
  setCount(prev => prev + 1) → queued: (0) => 1
  setCount(prev => prev + 1) → queued: (1) => 2
  setCount(prev => prev + 1) → queued: (2) => 3

React processes queue:
  Start: 0
  Apply (0) => 1 → 1
  Apply (1) => 2 → 2
  Apply (2) => 3 → 3
  
Next render: count = 3
```

**When to Use Each**:

| Scenario | Use |
|----------|-----|
| Setting to specific value | Direct: `setState(5)` |
| Based on previous state | Functional: `setState(prev => prev + 1)` |
| Multiple updates in handler | Functional |
| Async callbacks | Functional |
| Simple toggle | Either: `setState(!value)` or `setState(p => !p)` |

```typescript
function Examples() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // ✓ Direct: Setting specific value
  const reset = () => setCount(0);
  const setName = (newName: string) => setName(newName);
  
  // ✓ Functional: Based on previous state
  const increment = () => setCount(prev => prev + 1);
  const toggle = () => setIsOpen(prev => !prev);
  
  // ✓ Functional: Multiple updates
  const multiUpdate = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev * 2);
  };
}
```

### Batching Concept (Intro Only)

React **batches** multiple state updates into a single re-render for performance.

```typescript
function Component() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  
  const handleClick = () => {
    setCount(1);    // Doesn't render yet
    setFlag(true);  // Doesn't render yet
    // React batches these into single re-render
  };
  
  console.log('Render'); // Only logs once per click
  
  return <button onClick={handleClick}>Update</button>;
}
```

**Before React 18**: Batching only in event handlers
```typescript
const handleClick = () => {
  setCount(1);
  setFlag(true);
  // Batched ✓
};

setTimeout(() => {
  setCount(1);
  setFlag(true);
  // Not batched (2 renders) ❌
}, 1000);
```

**React 18+**: Automatic batching everywhere
```typescript
setTimeout(() => {
  setCount(1);
  setFlag(true);
  // Batched ✓
}, 1000);

fetch('/api').then(() => {
  setCount(1);
  setFlag(true);
  // Batched ✓
});
```

**Why Batching Matters**:
- Prevents unnecessary intermediate renders
- Better performance (single reconciliation)
- Consistent state (all updates visible together)

**Opting Out** (rare):
```typescript
import { flushSync } from 'react-dom';

flushSync(() => {
  setCount(1); // Immediate render
});
flushSync(() => {
  setFlag(true); // Another immediate render
});
// Two separate renders
```

### Summary

- **Normal variables**: Fail - reset each render, no re-render trigger
- **Global variables**: Fail - no re-render trigger, break component isolation
- **State**: React's primitive for persistence + re-render trigger
- **useState internals**: Hook array indexed by call order
- **Hook order**: Must be consistent - React uses index as identity
- **No conditional hooks**: Would break index-based identity
- **Closures**: Each render captures its state values; setters see that snapshot
- **Functional updates**: `setState(prev => ...)` uses latest state, not closure
- **Batching**: Multiple state updates → single re-render
- **Mental model**: State lives in React's fiber, not in your function; your function closes over state snapshot for that render

---

## 5. Rendering Model

### What Is Re-render

**Re-render**: React calls your component function again to get a new VDOM snapshot.

```typescript
function Component({ name }: { name: string }) {
  console.log('Component rendering'); // Logs on every re-render
  
  const [count, setCount] = useState(0);
  
  // All this code runs again
  const doubled = count * 2;
  
  return (
    <div>
      <p>{name}: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

**Re-render Phases**:
```
1. Trigger (state update, props change, parent re-render)
     ↓
2. Render Phase (call component function → new VDOM)
     ↓
3. Commit Phase (apply changes to real DOM)
     ↓
4. Browser paint (browser updates screen)
```

**What Happens During Re-render**:
- Component function executes completely
- All variables, functions, objects recreated
- New JSX/VDOM generated
- React compares new VDOM with previous VDOM

**What Persists**:
- State values (useState, useReducer)
- Refs (useRef)
- Effect cleanup functions
- Real DOM nodes (if structure unchanged)

### Re-render vs DOM Update

**Critical Distinction**: Re-render ≠ DOM update

```
┌───────────────┐
│   Re-render   │ = Call component function → New VDOM
└───────┬───────┘
        │ (Every state/props change)
        ▼
┌───────────────┐
│ Reconciliation│ = Diff old VDOM vs new VDOM
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  DOM Update   │ = Apply minimal changes to real DOM
└───────────────┘ (Only if VDOM actually changed)
```

**Example**:
```typescript
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  
  // Re-renders every second
  console.log('Re-render');
  
  return (
    <div>
      <h1>Timer</h1>              {/* No DOM update */}
      <p>Seconds: {seconds}</p>   {/* DOM updated (text node) */}
    </div>
  );
}
```

**What Happens**:
```
Every second:
  1. setSeconds triggers re-render
  2. Component function runs → new VDOM
  3. React diffs:
     - <h1> unchanged → skip
     - <p> text changed → update just the text node
  4. Real DOM: Only text node updated
```

**Performance Implication**:
- Re-renders are relatively cheap (JS function calls)
- DOM updates are expensive (browser reflow/repaint)
- React minimizes DOM updates via diffing

### What Triggers Re-render

**Three Trigger Types**:

**1. State Update**
```typescript
function Component() {
  const [count, setCount] = useState(0);
  
  // setCount(1) triggers re-render of this component
  return <button onClick={() => setCount(count + 1)}>+1</button>;
}
```

**2. Props Change**
```typescript
function Parent() {
  const [value, setValue] = useState(0);
  
  // When value changes, Parent re-renders
  // Child re-renders because props changed
  return <Child value={value} />;
}

function Child({ value }: { value: number }) {
  console.log('Child re-render');
  return <div>{value}</div>;
}
```

**3. Parent Re-render**
```typescript
function Parent() {
  const [count, setCount] = useState(0);
  
  // When count changes, Parent re-renders
  // Child also re-renders (even though props same)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Update Parent</button>
      <Child /> {/* No props, but still re-renders */}
    </>
  );
}

function Child() {
  console.log('Child re-render'); // Logs on parent updates
  return <div>Static content</div>;
}
```

**Why Child Re-renders on Parent Re-render**:
- React's default behavior: re-render children when parent re-renders
- Reason: Props might be new objects/functions (referential equality)
- Can be optimized with `React.memo` (not covered here)

**What Does NOT Trigger Re-render**:
```typescript
function Component() {
  let localVar = 0;
  
  const updateLocal = () => {
    localVar++; // ❌ Does not trigger re-render
  };
  
  const ref = useRef(0);
  const updateRef = () => {
    ref.current++; // ❌ Does not trigger re-render
  };
  
  return <button onClick={updateRef}>Update</button>;
}
```

### Why React Re-runs Entire Component

**Simplicity and Consistency**:
```typescript
function Component() {
  const [count, setCount] = useState(0);
  
  const doubled = count * 2;        // Must recalculate
  const message = `Count is ${count}`; // Must recreate
  
  if (count > 5) {
    return <div>High: {count}</div>;  // Different branch
  }
  
  return <div>Low: {doubled}</div>;
}
```

**Why Full Re-execution**:
1. **Derived values need updating**: `doubled`, `message` depend on `count`
2. **Conditional logic**: Can't know what code to run without running all
3. **Simplicity**: No partial execution tracking needed
4. **Correctness**: Guarantees UI reflects current state

**Alternative Would Be Complex**:
```
❌ Track dependencies for each line?
   → Complex, error-prone

❌ Only run changed lines?
   → How to determine what changed?

✓ Run entire function
   → Simple, correct, fast enough
```

**Performance**:
- Function calls are cheap
- Modern JS engines optimize hot paths
- React's optimizations (batching, memoization) address performance
- Focus optimization on reducing re-renders, not avoiding function execution

### Why That Does NOT Mean Entire DOM is Destroyed

**Re-execution ≠ DOM destruction**

```typescript
function App() {
  const [count, setCount] = useState(0);
  
  // Every re-render:
  // 1. Function runs
  // 2. New VDOM created
  // 3. React diffs against previous VDOM
  // 4. Only changed parts update real DOM
  
  return (
    <div>                           {/* DOM node reused */}
      <h1>Counter</h1>              {/* DOM node reused */}
      <p>Count: {count}</p>         {/* Text node updated */}
      <button onClick={() => setCount(count + 1)}>
        Increment                   {/* DOM node reused */}
      </button>
    </div>
  );
}
```

**Flow**:
```
State update (count: 0 → 1)
     ↓
Component re-runs → New VDOM
     ↓
Old VDOM:
{
  type: 'div',
  children: [
    { type: 'h1', children: 'Counter' },
    { type: 'p', children: 'Count: 0' },
    { type: 'button', children: 'Increment' }
  ]
}
     ↓
New VDOM:
{
  type: 'div',
  children: [
    { type: 'h1', children: 'Counter' },
    { type: 'p', children: 'Count: 1' },  ← Only change
    { type: 'button', children: 'Increment' }
  ]
}
     ↓
Diff: Only <p> text changed
     ↓
Real DOM: Update text node in <p> only
```

**DOM Node Lifecycle**:
```typescript
function Toggle() {
  const [show, setShow] = useState(true);
  
  return (
    <div>                          {/* DOM node: Created once, kept */}
      {show && <p>Visible</p>}     {/* DOM node: Created/destroyed */}
      <button onClick={() => setShow(!show)}>
        Toggle                     {/* DOM node: Created once, kept */}
      </button>
    </div>
  );
}
```

**When DOM Nodes Are Actually Destroyed**:
1. **Removed from VDOM**: Element not in new VDOM
   ```jsx
   {show && <div>Content</div>}
   // show: true → false removes from VDOM → DOM node destroyed
   ```

2. **Type changed**: Element type changed
   ```jsx
   // <div> → <span>
   // DOM node destroyed and recreated
   ```

3. **Key changed**: List item key changed
   ```jsx
   <div key="a" /> → <div key="b" />
   // Treated as different element → destroyed and recreated
   ```

**State Preservation Example**:
```typescript
function InputWithCounter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <input type="text" />  {/* DOM node persists */}
      {/* User typing preserved across re-renders */}
      <button onClick={() => setCount(count + 1)}>
        Counted {count} times
      </button>
    </div>
  );
}
```

User's text in input persists because:
1. `<input>` is in same position in VDOM
2. Same type (`input`)
3. React reuses the real DOM node
4. Only button text updated

### Summary

- **Re-render**: Calling component function again to generate new VDOM snapshot
- **Not same as DOM update**: Re-render = JS execution; DOM update = browser operation
- **Triggers**: State update, props change, parent re-render
- **Full component re-execution**: Simplicity and correctness; derived values updated
- **DOM is NOT destroyed**: React diffs VDOM and only updates changed real DOM nodes
- **Performance model**: Re-renders (cheap) → Diffing (cheap) → Minimal DOM updates (expensive but minimized)
- **Mental model**: Re-render produces new UI snapshot; React figures out how to efficiently apply it

---

## Key Takeaways

### Level 0: Core Mental Models

1. **UI = f(state)**: UI is pure function of state; React handles synchronization
2. **Virtual DOM**: Lightweight JS representation enabling efficient diffing
3. **Declarative**: Describe what, not how; React manages the how

### Level 1: Fundamental Mechanisms

1. **Components**: Pure functions returning VDOM; full re-execution on render
2. **State**: React's primitive for persistence + re-render triggering
3. **Hooks**: Order-dependent, closure-based state management
4. **Rendering**: Re-render (cheap) → Diff (cheap) → DOM update (expensive, minimized)

### Critical Insights

- **Separation of concerns**: Your code (pure functions) vs React's runtime (state management, diffing, DOM updates)
- **Re-render ≠ DOM update**: Most re-renders result in minimal or no DOM changes
- **Immutability**: New VDOM every render enables simple diffing
- **Performance**: Optimize by reducing re-renders, not avoiding function calls

### Development Mindset

- Write components as pure functions of props and state
- Let React handle efficiency (batching, diffing, DOM updates)
- Trust the abstractions until you measure performance issues
- Focus on correct state modeling, not premature optimization

---

*Last updated: 2026-02-27*
