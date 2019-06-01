let prevHighlighted;
let prevStyle;

const clearPrevHighlighted = () => {
  if (prevHighlighted) {
    prevHighlighted.style.opacity = prevStyle.opacity;
    prevHighlighted.style.border = prevStyle.border;
    prevHighlighted.style.cursor = prevStyle.cursor;
  }
};

const highlight = (e) => {
  prevHighlighted = e.target;
  prevStyle = {
    opacity: prevHighlighted.style.opacity,
    border: prevHighlighted.style.border,
    cursor: prevHighlighted.style.cursor,
  };

  prevHighlighted.style.opacity = '0.5';
  prevHighlighted.style.border = '2px solid red';
  prevHighlighted.style.cursor = 'pointer';
};

const getElementByXpath = path => {
  return new XPathEvaluator().evaluate(
    path,
    document.documentElement,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null)
    .singleNodeValue;
};

window.addEventListener('message', () => {
  document.onmouseover = (e) => {
    clearPrevHighlighted();
    highlight(e);
  };

  document.addEventListener('click', (e) => {
    const path = getPathTo(e.target);
    console.log(path);
    console.log(getElementByXpath(path));
    console.log(e.currentTarget);

    e.preventDefault();
    e.stopImmediatePropagation();

    parent.postMessage({ action: 'xpath', data: path }, '*');
  }, { capture: true });
});


function getPathTo(element) {
  if (element.id !== '')
    return 'id("' + element.id + '")';
  if (element === document.body)
    return element.tagName;

  var ix = 0;
  var siblings = element.parentNode.childNodes;
  for (var i = 0; i < siblings.length; i++) {
    var sibling = siblings[ i ];
    if (sibling === element)
      return getPathTo(element.parentNode) + '/' + element.tagName + '[' + (ix + 1) + ']';
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName)
      ix++;
  }
}
