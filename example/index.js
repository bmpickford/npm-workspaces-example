import default_one from '@npmworkspacesexample/one';
import default_two from '@npmworkspacesexample/two';
import default_three from '@npmworkspacesexample/three';

import { name as name_one } from '@npmworkspacesexample/one';
import { name as name_two } from '@npmworkspacesexample/two';
import { name as name_three } from '@npmworkspacesexample/three';

const named_items = [name_one, name_two, name_three];
const default_export_items = [default_one, default_two, default_three];

addListToDOM(named_items, document.getElementById('named'));
addListToDOM(default_export_items, document.getElementById('modules'));

function addListToDOM(items, element) {
    const list = document.createElement('ul');
    for (const i of items) {
        const li = document.createElement('li');
        li.innerText = i;

        list.appendChild(li);
    }

    element.appendChild(list);
}