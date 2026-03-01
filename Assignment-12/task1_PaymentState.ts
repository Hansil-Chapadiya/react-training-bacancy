/*

Create a PaymentState discriminated union.
Add exhaustive checking to handle all states.
Create a generic ApiResponse<T> for products.
Write a type guard to check if response is success.

*/

type PaymentState = {
    status: "PENDING",
} | {
    status: "IN-PROGRESS"
} | {
    status: "SUCCESS"
} | {
    status: "FAILED"
}

function handleState(state: PaymentState) {
    switch (state.status) {
        case "PENDING":
            console.log("YOUR PAYMENT IS PENDING");
            break;

        case "IN-PROGRESS":
            console.log("YOUR PAYMENT IS IN-PROGRESS");
            break;

        case "SUCCESS":
            console.log("YOUR PAYMENT WAS SUCCESSFUL");
            break;

        case "FAILED":
            console.log("YOUR PAYMENT FAILED");
            break;

        default:
            const _exhaustiveCheck: never = state;
            return _exhaustiveCheck;
    }
}

// type APIResponse<T> = 

const state: PaymentState = {
    status: "SUCCESS"
}
handleState(state);


type ApiResponse<T> =
    | {
        success: true;
        data: T;
    }
    | {
        success: false;
        error: string;
    };

function isSuccess<T>(
    response: ApiResponse<T>
): response is { success: true; data: T } {
    return response.success === true;
}

type Product = {
    id: number;
    name: string;
    price: number;
};

const productResponse: ApiResponse<Product> = {
    success: true,
    data: {
        id: 1,
        name: "Laptop",
        price: 1200,
    },
};

if (isSuccess(productResponse)) {
    console.log(productResponse.data.name); // fully typed
} else {
    console.log("Error");
}