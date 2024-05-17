document.addEventListener('DOMContentLoaded', (event) => {
    function myDisplay(some) {
        document.getElementById('demo').innerHTML = some;
    }

    function myFirst() {
        myDisplay('Hello');
    }

    function mySecond() {
        myDisplay('Goodbye');
    }

    myFirst();
    setTimeout(mySecond, 2000);

    const series = [
        {
            title: 'Gilmore Girls',
            starring: 'Lorelai Gilmore'
        },
        {
            title: 'Friends',
            starring: 'Rachel Green'   
        }
    ];

    function getSeries() {
        setTimeout(() => {
            let output = '';
            series.forEach((post) => {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('series-list').innerHTML = output;
        }, 1000);
    }

    getSeries();

    function createSeries(post) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                series.push(post);

                const error = false;

                if (!error) {
                    resolve();
                } else {
                    reject('Error: Something Went Wrong');
                }
            }, 2000);
        });
    }

    createSeries({ title: 'Big Bang Theory', starring: 'Sheldon Cooper' })
        .then(getSeries)
        .catch((error) => {
            console.log(error);
        });
});
