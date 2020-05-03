let tabsWithContent = (function () {
    let tabs = document.querySelectorAll(".tabs li");
    let tabsContent = document.querySelectorAll(".tab-content");

    let deactvateAllTabs = function () {
        tabs.forEach(function (tab) {
            tab.classList.remove("is-active");
        });
    };

    let hideTabsContent = function () {
        tabsContent.forEach(function (tabContent) {
            tabContent.classList.remove("is-active");
        });
    };

    let activateTabsContent = function (tab) {
        tabsContent[getIndex(tab)].classList.add("is-active");
    };

    let getIndex = function (el) {
        return [...el.parentElement.children].indexOf(el);
    };

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            deactvateAllTabs();
            hideTabsContent();
            tab.classList.add("is-active");
            activateTabsContent(tab);
        });
    });

    tabs[0].click();
})();

// Setup the breakpoint variable
let breakpoint;

// Get the current breakpoint
let getBreakpoint = function () {
    return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
};

let changeImageSrc = function () {
    if(breakpoint === 'small'){
        document.getElementById('dsultan-kering-tempe').src = "https://via.placeholder.com/360x360?text=360x360"
        document.getElementById('dsultan-kering-tempe-250gram').src = "https://via.placeholder.com/360x360?text=360x360xa"
        document.getElementById('dsultan-kering-tempe-500gram').src = "https://via.placeholder.com/360x360?text=360x360xb"
        document.getElementById('dsultan-kering-tempe-with-rice').src = "https://via.placeholder.com/360x360?text=360x360"
        document.getElementById('dsultan-kering-tempe-only').src = "https://via.placeholder.com/360x360?text=360x360"
        document.getElementById('dsultan-kering-tempe-full').src = "https://via.placeholder.com/360x360?text=360x360"
    }else{
        document.getElementById('dsultan-kering-tempe-with-rice').src = "https://via.placeholder.com/1152x500?text=1152x500"
        document.getElementById('dsultan-kering-tempe-only').src = "https://via.placeholder.com/1152x500?text=1152x500"
        document.getElementById('dsultan-kering-tempe-full').src = "https://via.placeholder.com/1152x500?text=1152x500"
        document.getElementById('dsultan-kering-tempe').src = "https://via.placeholder.com/1152x500?text=1152x500"
        document.getElementById('dsultan-kering-tempe-250gram').src = "https://via.placeholder.com/1152x500?text=1152x500xa"
        document.getElementById('dsultan-kering-tempe-500gram').src = "https://via.placeholder.com/1152x500?text=1152x500xb"
    }
};

// Calculate breakpoint on page load
breakpoint = getBreakpoint();

changeImageSrc();

// Recalculate breakpoint on resize
window.addEventListener('resize', function () {

	breakpoint = getBreakpoint();

	changeImageSrc();

}, false);
