import { dispatcher } from '../redux/redux';
import removeTransition from './removeTransition';

export default function changePage(path, pop = null) {
    if (!path && path !== '') return;
    if (window.width > 500) {
        // removeTransition('html');
    }
    dispatcher({ type: 'path', path });
    if (pop === null) {
        window.history.pushState(null, null, path === '/' ? path : `/${path}`);
    }
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    body.scrollTop = 0;
    html.scrollTop = 0;

    document.dispatchEvent(new CustomEvent('changePage', {}));
}

window.onpopstate = function() {
    removeTransition('.widget');
    changePage(window.location.pathname.slice(1), true);
};