const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    if (input.value != "") {
        let mySelection = input.value;
        
        let listItem = document.createElement('li');
        listItem.textContent = mySelection;

        let listButton = document.createElement('button');
        listButton.textContent = ('❌')
        
        listItem.appendChild(listButton);
        list.appendChild(listItem);

        listButton.addEventListener('click', () => {

            list.removeChild(listItem);
        });

        input.value = '';
        input.focus();
    }

});