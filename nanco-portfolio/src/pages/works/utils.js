export function findMousePosition(e) {
    const el = e.currentTarget;
    const { width, height } = el.getBoundingClientRect();

    const { pageX: x, pageY: y} = e.nativeEvent;
    const yMin = el.offsetTop;
    const yMax = el.offsetTop + height;
    const xMin = el.offsetLeft;
    const xMax = el.offsetLeft + width;

    const miscalculation = 20;
    const isMouseRightOfEl = yMin <= y <= yMax && xMax - miscalculation <= x;
    const isMouseLeftOfEl = yMin <= y <= yMax && x <= xMin + miscalculation;
    const isMouseUnderEl = xMin <= x <= xMax && yMax - miscalculation <= y;
    const isMouseAboveEl = xMin <= x <= xMax && y <= yMin + miscalculation;

    if (isMouseRightOfEl) return 'right';
    if (isMouseLeftOfEl) return 'left';
    if (isMouseAboveEl) return 'above';
    if (isMouseUnderEl) return 'under';
}