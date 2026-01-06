function runCommand() {
    let cmd = document.getElementById('command').value.trim().toLowerCase();
    let output = document.getElementById('output');
    output.innerHTML += `<p>> ${cmd}</p>`;

    if (cmd === 'hack nasa') {
        output.innerHTML += '<p>Hacking NASA... Success! (jk, this is fake)</p>';
    } else if (cmd === 'ls') {
        output.innerHTML += '<p>files: moon.js, api.txt</p>';
    } else {
        output.innerHTML += '<p>Command not found. Try "hack nasa"</p>';
    }

    document.getElementById('command').value = '';
    output.scrollTop = output.scrollHeight;
