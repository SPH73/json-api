function testGS() {
    const url =
        'https://script.google.com/macros/s/AKfycbx_vMEICySkq5KNNPeqbGsVWIH2S4PdcEbIMIsqafV7wTcfAjE1orA7cQJFnenHPI7L/exec';

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById('app').textContent = d[0].status;
        });
}

document.getElementById('btn').addEventListener('click', testGS);

function addGS() {
    // v4
    const url =
        'https://script.google.com/macros/s/AKfycbxhBwgbr2_t-T1DkAOE44EPAqWvUcJEW1MsyhMmxzk19Z4fuJmjgKij-K88keifCnRk/exec';
    fetch(url, {
        method: 'POST', // GET*, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // default*, no-cache, reload, force-cache, only-if-cached
        // credentials: 'omit', // same-origin' include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            name: 'sally',
            ip_address: '76.153.114.0',
            email: 'user@example.com',
        }), // body data type must match "Content-Type" header
    });
}

document.getElementById('btn2').addEventListener('click', addGS);
