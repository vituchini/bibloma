export default function getWidthText(
    text,
    font = { size: 16, family: 'Regular', letterSpacing: 0 },
) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let width;

    context.font = `${font.size}px ${font.family}`;

    width = context.measureText(text).width;

    if (font.letterSpacing) {
        width += (text.length - 1) * font.letterSpacing;
    }

    return width;
}