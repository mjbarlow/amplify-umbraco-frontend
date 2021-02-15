// Utility function
class Util {
 
    /* 
	class manipulation functions
*/
static hasClass (el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

static addClass (el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.add(classList[0]);
    else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
}

static removeClass (el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.remove(classList[0]);
    else if (Util.hasClass(el, classList[0])) {
        var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
    if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
}

static toggleClass (el, className, bool) {
    if (bool) Util.addClass(el, className);
    else Util.removeClass(el, className);
}

static setAttributes (el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

/* 
  DOM manipulation
*/
static getChildrenByClassName (el, className) {
    var childrenByClass = [];
    for (var i = 0; i < el.children.length; i++) {
        if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
    }
    return childrenByClass;
}

/* 
	Animate height of an element
*/
static setHeight (start, to, element, duration, cb) {
    var change = to - start,
        currentTime = null;

    var animateHeight = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        var val = parseInt((progress / duration) * change + start);
        element.setAttribute("style", "height:" + val + "px;");
        if (progress < duration) {
            window.requestAnimationFrame(animateHeight);
        } else {
            cb();
        }
    };

    //set the height of the element before starting animation -> fix bug on Safari
    element.setAttribute("style", "height:" + start + "px;");
    window.requestAnimationFrame(animateHeight);
}

/* 
	Smooth Scroll
*/

static scrollTo (final, duration, cb) {
    var start = window.scrollY || document.documentElement.scrollTop,
        currentTime = null;

    var animateScroll = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        if (progress > duration) progress = duration;
        var val = Util.easeInOutQuad(progress, start, final - start, duration);
        window.scrollTo(0, val);
        if (progress < duration) {
            window.requestAnimationFrame(animateScroll);
        } else {
            cb && cb();
        }
    };

    window.requestAnimationFrame(animateScroll);
}

/* 
  Focus utility classes
*/

//Move focus to an element
static moveFocus (element) {
        if (!element) element = document.getElementsByTagName("body")[0];
        element.focus();
        if (document.activeElement !== element) {
            element.setAttribute('tabindex', '-1');
            element.focus();
        }
    }

    /* 
    Misc
    */

static getIndexInArray (array, el) {
        return Array.prototype.indexOf.call(array, el);
    }

static cssSupports (property, value) {
        if ('CSS' in window) {
        return CSS.supports(property, value);
        } else {
        var jsProperty = property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        return jsProperty in document.body.style;
        }
    }

/* 
	Animation curves
*/
static easeInOutQuad (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
}
export default Util