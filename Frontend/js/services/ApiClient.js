export default class Services {
    getAdat(vegpont, callback) {
        fetch(vegpont)
            .then(response => response.json())
            .then(data => {
                callback(data);
            })
            .catch(error => console.log(error));
    }
    
    postAdat(vegpont, adat, callback) {
        fetch(vegpont, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adat)
        })
            .then(response => response.json())
            .then(data => {
                callback(data);
            })
            .catch(error => console.log(error));
    }
}