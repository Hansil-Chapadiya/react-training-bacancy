import React, { useEffect, useState } from "react";

const UserData = {
    1: {
        name: "Hansil",
        age: 12
    },

    2: {
        name: "Alice",
        age: 12
    },

    3: {
        name: "Eve",
        age: 13
    },

    4: {
        name: "Anna",
        age: 14
    },
}

const ChangeUserId = () => {

    const [userId, setuserId] = useState(1);
    const [user, setUser] = useState<{ name: string, age: number } | null>(null);

    useEffect(() => {
        getUser(userId).then((data) => {
            setUser(data);
        });
    }, [userId]);

    const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuserId(Number(e.target.value));
    }

    return (
        <>
            <p>ASSIGNMENT (TASK-3)</p>
            <input type="text" value={userId} onChange={handleUserId} />
            {user && (
                <div>

                    <p>User ID: {userId}</p>
                    <p>Name: {user?.name}</p>
                    <p>Age: {user?.age}</p>
                    {/* <p>User : {getUser(userId).then((res)=>console.log(res))}</p> */}
                </div>

            ) ||  (<p> Not Found </p>)}

        </>
    );


}

function getUser(id: number) {

    return new Promise<{ name: string; age: number }>((res) => {
        setTimeout(() => {
            res(UserData[id as keyof typeof UserData]);
        }, 500);
    })

}

export default ChangeUserId;

