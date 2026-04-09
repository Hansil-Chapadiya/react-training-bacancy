function retry(url, retrycount) {

    if (retrycount == 0) {
        console.log("Retry is over");
    }
    else {


        return fetch(url).then(res => {
            if (!res.ok) throw new Error("Failed");
            console.log("Fetch Successfull");
            return res;
        }).catch(() => {
            console.log("Retrying Remaining: ", retrycount);
            return new Promise(res => setTimeout(res, 1000)).then(() => retry(url, retrycount - 1))
        })


        /* const p1 = new Promise((resolve, reject) => {

            setTimeout(() => {
                if (fetch(url)) {
                    resolve("Success");
                }
                else {
                    reject(retrycount);
                }

            }, 1000);

        })
            .then((msg) => console.log("Fetch Successfully"))
            .catch((err) => { console.log("Remaining Retry ", (retrycount - 0)); retry(url, retrycount - 1) }); */
    }
}
retry("https://www.google", 2).catch(err => console.log(err));