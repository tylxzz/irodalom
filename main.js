let irodalom = [
    {
        nev: 'Balassi Bálint',
        korszak: 'reneszánsz',
        szerelem1: 'Losonczy Anna',
        szerelem2: 'Dobó Krisztina'
    },
    {
        nev: 'Csokonai Vitéz Mihály',
        korszak: 'felvilágosodás',
        szerelem1: 'Vajda Juliána',
    },
    {
        nev: 'Petőfi Sándor',
        korszak: 'magyar romantika',
        szerelem1: 'Mednyánszky Berta',
        szerelem2: 'Szendrey Júlia'
    },
    {
        nev: 'Ady Endre',
        korszak: '20. század',
        szerelem1: 'Léda',
        szerelem2: 'Csinszka'
    },
]

const table = createHTMLElement('table', 'itable', document.body);
createHTMLElementWithParentId('thead', 'ithead', 'itable');
createHTMLElementWithParentId('tr', 'itr', 'ithead');
renderTableHeaders();
createHTMLElementWithParentId('tbody', 'itbody', 'itable');

renderTable(irodalom);

generateForm();

const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const nev = document.getElementById('nev');
    const korszak = document.getElementById('korszak');
    const szerelem1 = document.getElementById('szerelem1');
    const masodik = document.getElementById('masodik');
    const szerelem2 = document.getElementById('szerelem2');

    const nevvalue = nev.value;
    const korszakvalue = korszak.value;
    let szerelem1value = szerelem1.value;
    let szerelem2value = szerelem2.value;

    if(validateFields(nev, korszak, szerelem1, masodik, szerelem2)) {
        const newIrodalom = {
            nev: nevvalue,
            korszak: korszakvalue,
            szerelem1: szerelem1value || '-',
            szerelem2: masodik.checked ? szerelem2value : undefined
        }

        irodalom.push(newIrodalom);
        clearErrors();
        form.reset();
        renderTable(irodalom);
    }
})