function dictionary() {
    var Cake = {
        Flour: 4 + "cups",
        Eggs: 2 + "ea",
        Salt: 1 + "tsp",
        Water: 2 + "cups",
        Water: 1 + "cup",

    };
    delete Cake.Flour;
    document.getElementById("recipe").innerHTML = "Start with " + Cake.Flour + " of flour.";
}

