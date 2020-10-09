
function resolvedPromise() {
    return new Promise(function (resolve, reject) {
        if (setTimeout()) {
            resolve("message: 'delayed success!'")
        } else {
            reject(500)
        }
    });
}


function rejectedPromise() {
    return new Promise(function () {
        setTimeout(()=>{
            try{
                new Error('error: delayed exception!');
            } catch(e){
                console.error(e);
            }
        },500)
    })
}


resolvedPromise()
    .then((result) => console.log(result))
    .catch(error => console.log(error))


rejectedPromise()
    .then((result) => console.log(result))
    .catch(error => console.log(error))