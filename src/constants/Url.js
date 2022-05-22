export const url = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsB`;

export const headers = {
    headers: {
        auth: localStorage.getItem('token')
    }
}