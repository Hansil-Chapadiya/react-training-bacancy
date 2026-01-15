/**
 * 
 * Execution context: where js code is evaluated  and executed
 * 
 * types:
 * 
 * 1) Global Execution Context(GEC) -> Created when js file run first -> only one GEC per program
 * 
 * -> Creating the global window object (in browser) or global (in node)
 * -> Creating global scope 
 * -> storing global variable and functions
 * 
 * 
 * 2) Function Execution Context(FEC) ->  Created every time when a function is invoked  -> multiple FEC per program 
 * 
 * -> Responsible for Local variables
 * -> Function arguments 
 * -> inner function 
 * -> scope chain 
 * -> this binding 
 * 
 * Each FEC is pushed to the call stack and popped when finished.
 * 
 * 3) Eval execution context (EEC) -> The eval() function takes a string argument, interprets it as JavaScript code, and runs it within the current scope. 
 * 
 * -> created when eval() is executed 
 * 
 * 
 * Execution Context internal working
 * 
 * A. creation phase -> allocates variable , function decalration , scope, TDZ setup (Temporal Dead Zone)
 * 
 * TDZ -> a period of time when 'let' and 'const' decalred but value not assigned to them and can't access them.
 * 
 * Hoisiting comes in this phase :
 * 
 * -> where decalration of variable and function moved top of scope before code executed properly 
 * 
 * ex : greet();
 * 
 * function greet(){ console.log('Hello');} // runs successfully 
 * 
 * but 
 * 
 * greet(); // throws reference error 
 * 
 * const greet = () => { 
 *  console.log("Hello");
 * }
 * 
 * -> because const is declared but can't access 
 * -> let and const both are block scope so they are hoisted but placed in TDZ
 * -> when js execute code one by one then it will assign the value.
 * -> var get undefined during creation phase  
 * -> const and let in TDZ
 * 
 * 
 * 
 * setup :
 * Lexical Environment  -> local memory assigned to variable and manages link(reference) to outer environment
 * 
 * closure -> when a function remember the variable of parent or outer scope even after parent exeuction has been done.
 * 
 * Variable Environment  -> all declared variable resides in this 
 * 
 * this binding ->  refer to current objects 
 * 
 * B. Execution phase -> Js run code one by one
 * 
 * setup :
 * 
 * assign value 
 * excution function call 
 * computes expression 
 * allocates heap objects 
 * 
 */ 

/**
 * 
 * Js runs on:  1) Browser 2) Node environment
 */

/**
 * 
 * Event loop: it is mechanism that handle task asynchronously even though js is single threaded    
 * 
 * js has single call stack, so it can run one thign at a time 
 * 
 * Model of event loop:
 * 
 * 1) Call stack :
 * 
 * where js code is executed
 * 
 * function go -> call stack -> executed -> popped out 
 * 
 * 
 * 2) Web API(browser)/ Node API
 * 
 * tasks provide by enviroment 
 * 
 * Handle task like: 
 * setTimeout
 * event handling 
 * DOM event 
 * fetch / ajax calls 
 * 
 * 
 * 3) Macro Queue / call backs -> Low Priority -> execute after only all micro queue task is completed
 * 
 * task :
 * 
 * 1) settimeout 
 * 2) setInterval
 * 3) DOM event 
 * 
 * 4) Micro Queue  -> High priority -> Run before macro tasks 
 * 
 * task :
 * 
 * 1) Promises 
 * 2) catch
 * 3) then
 * 4) finally
 * 5) MutationObserver -> observe changes in DOM tree
 * 6) queueMicrotask -> schedules a function to run after current synchronous code finishes its excution
 * 
 * Why microtask has higher priority?
 * 
 * -> cause they are just like small batch, fast and quick to execute and lightweight, and they finished quickly so we can render and avoid inconsistent UI or logic 
 * -> where macrotask can be delayed beacuse they heavy weighted and require time to complete task
 * 
 */