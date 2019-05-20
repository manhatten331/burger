$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        console.log("This is from burger.js front end code" + newDevoured);

        var devouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("changed sleep to", newDevoured);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers",  {
            type: "POST",
            data: newBurger
        }).then (
            function () {
                console.log("Created burger on line 36");

                location.reload();
            }
        );
    });
});