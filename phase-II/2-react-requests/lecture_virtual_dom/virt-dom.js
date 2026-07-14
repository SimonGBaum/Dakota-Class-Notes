let li = {
    'tag': 'li',
    'innerText': 'This is a list item 1'
}

let li2 = {
    'tag': 'li',
    'innerText': 'This is a list item 2'
}

let ul = {
    'tag': 'ul',
    'children': [li, li2]
}

let p = {
    "tag": "p",
    'innerText': 'This is just some random text'
}

let div = {
    'tag': 'div',
    'children': [p, ul]
}

let h1 = {
    'tag': 'h1',
    'innerText': 'Hello World',
    'innerHTML': '<strong>Hello World</strong>'
}

let body = {
    'children': [h1, div]
}

let document = {
    'body': body
}