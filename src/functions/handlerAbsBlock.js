import { dispatcher, store } from '../redux/redux';

export default function handlerAbsBlock(action, data) {
    const { absBlock } = store.getState();

    switch (action) {
        case 'show':
            // if (absBlock.isShow === false) {
            dispatcher({ type: 'absBlock', data: { isShow: true, ...data } });
            // }

            break;
        case 'hide':
            if (absBlock.isShow === true) {
                dispatcher({ type: 'absBlock', data: { isShow: false } });
            }

            break;
        case 'toggle':
            if (absBlock.isShow === true) {
                handlerAbsBlock('hide');
            } else {
                handlerAbsBlock('show', data);
            }
            break;
        default:
            break;
    }
}