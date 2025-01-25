const token = 'BQBtYDocmiOyEPGsiOqe_IEhK8imDXey_x1qmdksEZPajrwoM9HkH0mWY2cB-WOtkRVXj75tOoZfL495GINo_1xAPriV6bznrjiwCBYygWGjFbtN3UdnMqysw4NxQANE55I1JTDlZy5ZGqR7-kvFwLSLeQCuNb2WlbO9McoLEFYaA_Yz--JOSP6eCjc-oj8U8Bb-shYGAdmtKckJN81RmggXJ09T3Xc96nqywM2NaoC7HwyG2ANDXI2-w7KGXYAWn9sNUf0cMTImuxhgO159RFlLQ2jLvH8f';
require('dotenv').config({ path: '../../.env' })

module.exports = async function(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json()

}