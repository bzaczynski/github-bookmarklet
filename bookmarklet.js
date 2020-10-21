(function() {

    function showOverlay() {

        const text = document.createElement("div");
        text.innerText = "⌛ Loading...";
        text.id = "text";
        text.style.position = "absolute";
        text.style.top = "50%";
        text.style.left = "50%";
        text.style.fontSize = "50px";
        text.style.color = "white";
        text.style.transform = "translate(-50%,-50%)";

        const overlay = document.createElement("div");
        overlay.appendChild(text);
        overlay.id = "overlay";
        overlay.style.position = "fixed";
        overlay.style.display = "block";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.right = "0";
        overlay.style.bottom = "0";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        overlay.style.zIndex = "999";

        document.body.appendChild(overlay);
    }

    function hideOverlay() {
      const child = document.getElementById("overlay");
      if (child) {
          child.parentElement.removeChild(child);
      }
    }

    function loadAll() {
        showOverlay();
        return new Promise((resolve, reject) => {

            const fetch_ = window.fetch;

            function intercept(method, regex, callback) {
                window.fetch = function(url, options) {
                    const promise = fetch_.apply(this, arguments);
                    if (url.match(regex)) {
                        const httpMethod = (options && options.method) || "get";
                        if (method.toLowerCase() === httpMethod) {
                            promise.then(callback);
                        }
                    }
                    return promise;
                }
            }

            function loadMore() {
                const button = document.querySelector(".ajax-pagination-btn:not([disabled])")
                if (button !== null) {
                    button.click();
                } else {
                    window.fetch = fetch_;
                    hideOverlay();
                    resolve();
                }
            }

            intercept("get", /.*\/more_threads.*/, loadMore);
            loadMore();
        });
    }

    function showAllResolved() {
        const buttons = document.querySelectorAll("details:not([open]).js-comment-container span.Details-content--closed");
        buttons.forEach(button => button.click());
    }

    loadAll().then(showAllResolved);
})();
