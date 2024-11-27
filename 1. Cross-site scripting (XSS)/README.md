# Cross-site scripting (XSS)

## Requirements

- Register/Login into [Port Swigger](https://portswigger.net/users)
- Navigate to [Cross Site Scripting](https://portswigger.net/web-security/cross-site-scripting)

## More

- [Cross-site scripting (XSS) cheat sheet](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet)
- [How to prevent XSS](https://portswigger.net/web-security/cross-site-scripting/preventing)
- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Shazzer Website](https://shazzer.co.uk/)
- [Hackvertor Website](https://hackvertor.co.uk/)
- [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

## Safe Sinks

### Functions

elem.textContent = dangerVariable;
elem.insertAdjacentText(dangerVariable);
elem.className = dangerVariable;
elem.setAttribute(safeName, dangerVariable);
formfield.value = dangerVariable;
document.createTextNode(dangerVariable);
document.createElement(dangerVariable);
elem.innerHTML = DOMPurify.sanitize(dangerVar);

### Attributes

align, alink, alt, bgcolor, border, cellpadding, cellspacing, class, color, cols, colspan, coords, dir, face, height, hspace, ismap, lang, marginheight, marginwidth, multiple, nohref, noresize, noshade, nowrap, ref, rel, rev, rows, rowspan, scrolling, shape, span, summary, tabindex, title, usemap, valign, value, vlink, vspace, width.
