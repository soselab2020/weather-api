
function getTest() {
    $.get("hello", function (res) {
        document.getElementById("display").innerHTML = res.message;
    });
}

function postTest() {
    $.post("/", { name: "Curry" }, function (res) {
        document.getElementById("display").innerHTML = res.status;
    }); //假裝有要發布的資料
}

function putTest() {
    $.ajax({
        method: "PUT",
        url: "hello",
        data: { name: "Curry" } //假裝有更新的資料
    }).done(function (res) {
        document.getElementById("display").innerHTML = res.message;
    });
}

function deleteTest() {
    $.ajax({
        method: "DELETE",
        url: "hello"
    }).done(function (res) {
        document.getElementById("display").innerHTML = res.status;
    });
}