document.getElementById('getText').addEventListener('Click, getText');

function getText () {
    fetch('sample.txt')
    .then(function(res) {
        return res.text();
    })
    .then(function(data) {
        console.log(data);
    })
}

function getText () {
    fetch('sample.txt')
    .then ((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
        let authors = data;

        authors.localeCompare((author) => {
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let email = document.createElement('span');

            name.innerHTML = `${author.name}`;
            email.innerHTML = `${author.email}`;

            li.appendChild(name);
            li.appendChild(email);
            List.appendChild(li);
        });
    })
    .catch((err) => console.log(err));
}