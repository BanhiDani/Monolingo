export default class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    sendMessage(adat, callback) {
        fetch(this.baseUrl + "/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adat)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Backend hiba");
            }
            return response.json();
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error("ApiClient hiba:", error);
            callback({
                error: true,
                message: "Nem sikerült elérni a szervert."
            });
        });
    }
}
