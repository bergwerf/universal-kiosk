window.onload = function()
{
    chrome.storage.sync.get('defaultUrl', function (obj)
    {
        document.querySelector('#location').value = obj.defaultUrl || "http://";
    });

    var webview = document.querySelector('#webview');

    document.querySelector('#save-preset').onclick = function()
    {
        var url = document.querySelector('#location').value;
        chrome.storage.sync.set({ 'defaultUrl': url }, function()
        {
            document.querySelector('#location').style.transition = "";
            window.setTimeout(function()
            {
                document.querySelector('#location').style.color = "#cccccc";
                window.setTimeout(function()
                {
                    document.querySelector('#location').style.transition = "color .3s ease-in";
                    document.querySelector('#location').style.color = "#000000";
                }, 100);
            }, 100);
        });
    };

    document.querySelector('#exit').onclick = function()
    {
        chrome.app.window.current().close();
    };

    document.querySelector('#location-form').onsubmit = function(e)
    {
        e.preventDefault();
        webview.src = document.querySelector('#location').value;
        document.querySelector('#location-layer').style.display = "none";
        document.querySelector('#save-preset').style.display = "none";
        webview.style.display = "block";
    };

    resize();
    window.onresize = resize();
};

function resize()
{
    var webview = document.querySelector('#webview');
    var bar = document.querySelector('#control-bar');
    webview.style.width = document.documentElement.clientWidth + 'px';
    webview.style.height = (document.documentElement.clientHeight - bar.offsetHeight) + 'px';
}
