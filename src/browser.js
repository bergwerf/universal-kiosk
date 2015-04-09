window.onload = function()
{
    var webview = document.querySelector('#webview');
    document.querySelector('#exit').onclick = function()
    {
        window.close();
    };

    document.querySelector('#location-form').onsubmit = function(e)
    {
        e.preventDefault();
        webview.src = document.querySelector('#location').value;
        document.querySelector('#location-layer').style.display = "none";
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
