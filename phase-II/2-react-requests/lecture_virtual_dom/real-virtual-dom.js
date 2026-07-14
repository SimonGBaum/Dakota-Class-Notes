const virtualDOM = {
  type: 'body',
  key: null,
  ref: null,
  props: {
    children: [
      {
        type: 'h1',
        key: null,
        ref: null,
        props: {
          children: {
            type: 'strong',
            key: null,
            ref: null,
            props: { children: 'Hello World' }
          }
        }
      },
      {
        type: 'div',
        key: null,
        ref: null,
        props: {
          children: [
            {
              type: 'p',
              key: null,
              ref: null,
              props: { children: 'This is just some random text' }
            },
            {
              type: 'ul',
              key: null,
              ref: null,
              props: {
                children: [
                  {
                    type: 'li',
                    key: null,
                    ref: null,
                    props: { children: 'This is a list item 1' }
                  },
                  {
                    type: 'li',
                    key: null,
                    ref: null,
                    props: { children: 'This is a list item 2' }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
};

console.log(virtualDOM);