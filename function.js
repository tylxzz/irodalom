function createTableCell(tagName, innerHTML, parent) {
    const cell = document.createElement(tagName);
    cell.innerHTML = innerHTML;
    parent.appendChild(cell);

    return cell;
}

function createHTMLElement(tag, id, parent) {
    const elem = document.createElement(tag);
    elem.id = id;
    parent.appendChild(elem);
}

function createHTMLElementWithParentId(tag, id, parentid) {
    const parent = document.getElementById(parentid);
    if (parent != undefined) {
        createHTMLElement(tag, id, parent);
    }
}

function renderTableHeaders() {
    const tr = document.getElementById('itr');
    createTableCell('th', 'Szerző neve', tr);
    createTableCell('th', 'Korszak', tr);
    const szerelmek = createTableCell('th', 'Szerelmek', tr);
    szerelmek.colSpan = 2;
}

function renderTable(irodalom) {
    const tbody = document.getElementById('itbody');
    tbody.innerHTML = '';
    for(const ir of irodalom) {
        const row = document.createElement('tr');
        tbody.appendChild(row);
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        
        td1.innerHTML = ir.nev;
        td2.innerHTML = ir.korszak;
        td3.innerHTML = ir.szerelem1;
        
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        
        if(ir.szerelem2) {
            const td4 =  document.createElement('td');
            td4.innerHTML = ir.szerelem2 || '';
            row.appendChild(td3);
            row.appendChild(td4);
        }
        else {
            td3.colSpan = 2;
            row.appendChild(td3);
        }
    }
}

function generateForm() {
    const form = document.createElement('form');
    form.id = 'form';
    document.body.appendChild(form);

    const formValues = [
        { id: 'nev', label: 'Költő neve:'},
        { id: 'korszak', label: 'Korszak:'},
        { id: 'szerelem1', label: 'Szerelme:'}
    ];

    const formValues1 = [
        { id: 'masodik', label: 'Volt másik szerelme? '}
    ];
    const formValues2 = [
        { id: 'szerelem2', label: 'Szerelme:'}
    ];

    for(const field of formValues) {
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;

        const input = document.createElement('input');
        input.type = 'text';
        input.id = field.id;
        input.name = field.id;

        const error = document.createElement('error');
        error.className = 'error';

        const br = document.createElement('br');
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');
        const br3 = document.createElement('br');

        div.appendChild(br);
        div.appendChild(label);
        div.appendChild(br1);
        div.appendChild(input);
        div.appendChild(br2);
        div.appendChild(error);
        div.appendChild(br3);
        form.appendChild(div);
    }

    for(const field1 of formValues1) {
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.htmlFor = field1.id;
        label.textContent = field1.label;

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox'
        checkBox.id = field1.id;
        checkBox.name = field1.id;

        const br = document.createElement('br');
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');

        div.appendChild(br);
        div.appendChild(label);
        div.appendChild(checkBox);
        div.appendChild(br1);
        div.appendChild(br2);
        form.appendChild(div);
    }

    for(const field2 of formValues2) {
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.htmlFor = field2.id;
        label.textContent = field2.label;

        const input = document.createElement('input');
        input.type = 'text';
        input.id = field2.id;
        input.name = field2.id;

        const error = document.createElement('error');
        error.className = 'error';

        const br = document.createElement('br');
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');
        const br3 = document.createElement('br');

        div.appendChild(br);
        div.appendChild(label);
        div.appendChild(br1);
        div.appendChild(input);
        div.appendChild(br2);
        div.appendChild(error);
        div.appendChild(br3);
        form.appendChild(div);
    }

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Hozzáadás';
    form.appendChild(button);
}

function validateFields(nev, korszak, szerelem1, masodik, szerelem2) {
    let valid = true;
    const errorMessages = form.querySelectorAll('.error');
    for(const error of errorMessages) {
        error.innerHTML = "";
    }

    valid = validateElement(nev, 'Kötelező megadni nevet!') && valid;
    valid = validateElement(korszak, 'Kötelező megadni korszakot!') && valid;

    if(masodik.checked) {
        valid = validateElement(szerelem1, 'A költőnek kötelező megadni a szerelemeit') && valid;
        valid = validateElement(szerelem2, 'A költőnek kötelező megadni a szerelemeit') && valid;
    }

    return valid;
}

function validateElement(element, errorMessages) {
    const error = element.parentElement.querySelector('.error');
    if(element.value === '') {
        error.innerHTML = errorMessages;
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}

function clearErrors() {
    const hibak = form.querySelectorAll('.error');
    for(const hiba of hibak) {
        hiba.innerHTML = '';
    }
}