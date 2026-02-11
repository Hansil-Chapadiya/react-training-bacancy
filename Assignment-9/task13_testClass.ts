/*

Create a class with public, private, and protected members
Try accessing them outside the class
Which members should be exposed and why?

*/

abstract class NeuralNetwork {

    private type: string;
    private numberOfActivationFunctions: number;
    protected childNetworks: string[];

    constructor(
        type: string,
        numberOfActivationFunctions: number,
        childNetworks: string[]
    ) {
        this.type = type;
        this.numberOfActivationFunctions = numberOfActivationFunctions;
        this.childNetworks = childNetworks;
    }

    // getters
    getType(): string {
        return this.type;
    }

    getActivationFunctionCount(): number {
        return this.numberOfActivationFunctions;
    }

    getChildNetworks(): string[] {
        return this.childNetworks;
    }

    // setters
    setType(type: string) {
        this.type = type;
    }

    setActivationFunctionCount(count: number) {
        if (count < 0) throw new Error("Invalid count");
        this.numberOfActivationFunctions = count;
    }

    setChildNetworks(children: string[]) {
        this.childNetworks = children;
    }

    // force subclasses to explain themselves
    abstract describe(): void;
}
class FeedForwardNetwork extends NeuralNetwork {

    private modelType: "Single Level Perceptron" | "Multi Layer Perceptron";

    constructor(
        modelType: "Single Level Perceptron" | "Multi Layer Perceptron"
    ) {
        super("FeedForward", modelType === "Single Level Perceptron" ? 1 : 3, []);
        this.modelType = modelType;
    }

    getModelType() {
        return this.modelType;
    }

    setModelType(type: "Single Level Perceptron" | "Multi Layer Perceptron") {
        this.modelType = type;
    }

    describe(): void {
        console.log(
            `${this.modelType}: data flows only forward without loops.`
        );
    }
}

class RecurrentNetwork extends NeuralNetwork {

    private modelType: "Vanilla RNN" | "LSTM" | "GRU";

    constructor(modelType: "Vanilla RNN" | "LSTM" | "GRU") {
        super("Recurrent", 5, ["memory"]);
        this.modelType = modelType;
    }

    getModelType() {
        return this.modelType;
    }

    setModelType(type: "Vanilla RNN" | "LSTM" | "GRU") {
        this.modelType = type;
    }

    describe(): void {
        console.log(
            `${this.modelType}: supports feedback connections and time memory.`
        );
    }
}


const singlelayer = new FeedForwardNetwork("Single Level Perceptron");
singlelayer.describe();

const multilayer = new FeedForwardNetwork("Multi Layer Perceptron");
multilayer.describe();

const rnn = new RecurrentNetwork("GRU");
rnn.describe()


/*


All public method exposed and public data member available to initialize private data member 
Protected only extended in subclass provide properties in child class

*/