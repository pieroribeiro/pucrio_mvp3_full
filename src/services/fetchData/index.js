export default function fetchData (url, method = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: method,
            body: (method.toUpperCase() === 'POST') ? JSON.stringify(data) : undefined
        })
        .then(res => res.json())
        .then(res => {
            resolve(res)
        })
        .catch(e => {
            reject(e)
        })
    })
}