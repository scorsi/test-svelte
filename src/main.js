import page from 'page';

import Home from './components/Home/index.html';


const render = (id, component, props) => {
  const e = document.getElementById(id);
  e.innerHTML = '';
  props = props || {};
  new component({
    ...props,
    target: e
  });
};

page('/', () => {
  render('root', Home, {data: {name: 'world'}});
});
page();

export default app;