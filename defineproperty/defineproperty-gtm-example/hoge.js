var isCalled = false;
if (typeof window.HogeInit === 'function') {
    // not GTM
    console.log("FUNCTION!!");
    window.HogeInit();
    isCalled = true;
} else {
    // when GTM
    console.log("NOT FUNCTION!!");
}

Object.defineProperty(window, 'HogeInit', {
    get() {
        return "isCalled: " + isCalled;
    },
    set(initFunc) {
        if (isCalled) {
            console.warn("HogeInit is already defined!!!!")
            return
        }
        initFunc();
        isCalled = true;
    },
});
