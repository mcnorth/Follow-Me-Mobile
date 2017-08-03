// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
$(document).ready(function ()
{
    $("#login-page").on("click", "#btnLogSubmit", function () {
        GetDashboard();
    });

    $("#register-page").on("click", "#btnRegSubmit", function () {
        GetDashboard();
    });


});



function GetDashboard()
{
    var choice = $("#userType :selected").text();

    if (choice == "Personal Use")
    {
        $.mobile.pageContainer.pagecontainer("change", "#pDashboard", { transition: "slide" });
    }
    if (choice == "Business Use")
    {
        $.mobile.pageContainer.pagecontainer("change", "#bDashboard", { transition: "slide" });
    }
}
