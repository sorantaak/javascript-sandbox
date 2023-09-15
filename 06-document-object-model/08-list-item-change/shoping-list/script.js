// Quick & Dirty
function createListItme(item) {
	const li = document.createElement('li');
	li.innerHTML = `${item}
					<button class="remove-item btn-link text-red">
						<i class="fa-solid fa-xmark"></i>
					</button>`;
	document.querySelector('.items').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(item));

	const button = document.createElement('button');
	button.className = 'remove-item btn-link text-red';

	const icons = document.createElement('i');
	icons.className = 'fa-solid fa-xmark';

	button.appendChild(icons);
	li.appendChild(button);

	document.querySelector('.items').appendChild(li);
}

createListItme('Eggs');
createNewItem('Cheese');
