const logs = [
    { user: "A", action: "login", time: 1 },
    { user: "A", action: "click", time: 3 },
    { user: "B", action: "login", time: 2 },
    { user: "A", action: "logout", time: 8 },
    { user: "B", action: "click", time: 5 },
    { user: "B", action: "logout", time: 7 },
    { user: "C", action: "login", time: 4 },
    { user: "C", action: "logout", time: 9 }
];


const arr = logs.reduce((acc, obj) => {

    const userobj = acc.reduce((ac, oj) => {

        if (oj.user == obj.user) {
            ac.push({ ...oj })
        }

        return ac;
    }, [])

    console.log(userobj);
    let logintime = obj.time;
    let clicktime = 0;
    let logouttime = 0;

    if (userobj.length > 0) {

        if (userobj.action == 'login') {
            logintime += userobj.time;
        }

        if (userobj.action == 'click') {
            clicktime += userobj.time;
        }

        if (userobj.action == 'logout') {
            logouttime += userobj.time;
        }

        // acc[userobj.sessiontime] = userobj.action==login - userobj.logout;
        acc.push({
            user: obj.user,
            sessiontime: logouttime - logintime,
            actiontime: clicktime
        })
    }
    else{
        acc.push({
            user: obj.user,
            login : logintime,
            logout : logouttime,
            action : clicktime
        })
    }
    return acc

}, [])

// console.log(arr);