(function () {
    document.getElementById("newJoke").onclick = function () {
        getJokes();
        console.log("button");
    };
    function getJokes() {
        $.ajax({
            url: "https://icanhazdadjoke.com/",
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            success: function (data) {
                var jokeDiv = document.getElementById("joke");
                jokeDiv.innerText = data.joke;
            },
            error: function (error) {
                console.log("error");
                console.log(error);
            },
        });
    }
    getJokes();
})();
