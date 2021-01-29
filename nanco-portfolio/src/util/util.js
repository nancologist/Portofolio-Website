export function isElementVisible(el) {
    const rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    return el.contains(efp((rect.left + rect.right) / 2, (rect.bottom + rect.top) / 2 ))
}
