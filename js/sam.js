const addressBook = [
    {
      names: 'UKUNDIWABO Aline',
      address: 'KK 8 Ave',
      email: 'example@gmail.com',
      phoneNumber: '+250780607308'
    },
  ]
  
  const renderList = (data) => {
    const ul = document.querySelector('.list');
    ul.innerHTML = '';
    data.forEach((item, index) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        const mark = document.createElement('div');
        mark.setAttribute('class', 'mark');
        const h4 = document.createElement('h4');
        h4.setAttribute('class', 'name');
        h4.textContent = item.names;
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'remove');
        deleteBtn.setAttribute('value', index);
        deleteBtn.textContent = 'x'
        deleteBtn.addEventListener('click', (e) => {
            addressBook.splice(parseInt(e.target.value), 1);
            renderList(addressBook)
        })
        const div = document.createElement('div')
        div.setAttribute('class', 'more-info hide');
        const name = document.createElement('h5');
        name.textContent = `Name:  ${item.names}`;
        const address = document.createElement('h5')
        address.textContent =`Address:  ${item.address}`;
        const email = document.createElement('h5')
        email.textContent = `Email:  ${item.email}` ;
        const phoneNumber = document.createElement('h5')
        phoneNumber.textContent = `Phone Number:   ${item.phoneNumber}`;
        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(email);
        div.appendChild(phoneNumber);
        h4.addEventListener('click', (e) => {
            div.classList.toggle("hide");
        })
        mark.appendChild(h4);
        mark.appendChild(deleteBtn);
        li.appendChild(mark);
        li.appendChild(div);
        ul.appendChild(li);
    })
  }

  document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = {
        names: e.target.elements['names'].value,
        address: e.target.elements['address'].value,
        email: e.target.elements['email'].value,
        phoneNumber: e.target.elements['phoneNumber'].value
    }
    addressBook.push(formData);
    renderList(addressBook)
    e.target.elements['names'].value = '';
    e.target.elements['address'].value = '';
    e.target.elements['email'].value = '';
    e.target.elements['phoneNumber'].value = '';
  })
  renderList(addressBook)
  