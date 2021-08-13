const url =
    'https://script.google.com/macros/s/AKfycbxIGvjk1hSZOQBwmC-iwX-cHeH-h6z6goLgJhqiDkTyGCtfiZQ/exec';

function testGS() {
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById('app').textContent = d[0].status;
        });
}

document.getElementById('btn').addEventListener('click', testGS);

function addGS() {
    // v4

    fetch(url, {
        method: 'POST', // GET*, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // default*, no-cache, reload, force-cache, only-if-cached
        // credentials: 'omit', // same-origin' include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body data type must match "Content-Type" header
        body: JSON.stringify({
            name: 'Someone Else',
            email: 'someone@somewhere.com',
            ip: '68.49.203.255',
        }),
    });
}

document.getElementById('btn2').addEventListener('click', addGS);
