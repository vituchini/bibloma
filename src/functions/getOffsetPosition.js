export default function getOffsetPosition(element, offset = null) {
    // window.pageXOffset
    return [
        element.getBoundingClientRect().x + (offset && offset[0]),
        element.getBoundingClientRect().y + (offset && offset[1]),
    ];
}