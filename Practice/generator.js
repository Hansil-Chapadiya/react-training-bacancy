function* genfunc() {

    yield "Hello";
    yield console.log('Hi');
    yield Promise.resolve("Noise");
    return 12;
}

const nextVal = genfunc()

console.log(nextVal.next());
console.log(nextVal.next());
console.log(nextVal.next());
console.log(nextVal.next());


/*




Key Differences Between yield and return in Generators
Feature |	yield |	return
Pauses Execution |	Yes, pauses and remembers the state for continuation. |	No, immediately stops the generator's execution permanently.
done Property |	Sets the done property of the iterator result to false. |	Sets the done property of the iterator result to true.
Value Usage |Provides values as part of a sequence or stream that can be iterated over (e.g., in a for...of loop).	| Provides a final, optional value upon completion. This value is typically ignored by built-in iteration methods like for...of loops or the spread operator.
Subsequent Calls |	The generator can be resumed with further next() calls to produce more values.	 | Subsequent calls to next() after a return will always result in { value: undefined, done: true }.


*/