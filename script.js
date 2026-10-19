
vegaEmbed("#ramsar-map", "ramsar_map.json", {
    actions: false,
    renderer: "svg"
})
.then(() => {
    console.log("Ramsar wetlands map loaded successfully.");
})
.catch(error => {
    console.error("Map loading error:", error);
    document.getElementById("ramsar-map").textContent =
        "The map could not be loaded. Check the browser console.";
});


vegaEmbed(
    "#ramsar-choropleth",
    "ramsar_choropleth.json",
    {
        actions: false,
        renderer: "svg"
    }
)
.then(() => {
    console.log("Choropleth map loaded successfully.");
})
.catch(error => {
    console.error("Choropleth map error:", error);
});




vegaEmbed(
    "#wetland-treemap",
    "wetland_treemap.json",
    {
        actions: false,
        renderer: "svg"
    }
)
.then(() => {
    console.log("Wetland treemap loaded successfully.");
})
.catch(error => {
    console.error("Treemap loading error:", error);
});




vegaEmbed("#wetland-heatmap", "wetland_heatmap.json", {
    actions: false,
    renderer: "svg"
})
.then(() => {
    console.log("Wetland heatmap loaded successfully.");
})
.catch(error => {
    console.error("Heatmap loading error:", error);
});

vegaEmbed("#wetland-permanence", "wetland_permanence.json", {
    actions: false,
    renderer: "svg"
})
.then(() => {
    console.log("Wetland permanence chart loaded successfully.");
})
.catch(error => {
    console.error("Wetland permanence chart error:", error);
});


vegaEmbed("#inland-water-trends", "inland_water_trends.json", {
    actions: false,
    renderer: "svg"
})
.then(() => console.log("Chart 7 loaded successfully."))
.catch(error => console.error("Chart 7 error:", error));

vegaEmbed("#inland-water-dumbbell", "inland_water_dumbbell.json", {
    actions: false,
    renderer: "svg"
})
.then(() => console.log("Chart 8 loaded successfully."))
.catch(error => console.error("Chart 8 error:", error));

vegaEmbed("#ramsar-symbol-map", "ramsar_symbol_map.json", {
    actions: false,
    renderer: "svg"
})
.then(() => console.log("Chart 9 loaded successfully."))
.catch(error => console.error("Chart 9 error:", error));

vegaEmbed("#ramsar-area-boxplot", "ramsar_area_boxplot.json", {
    actions: false,
    renderer: "svg"
})
.then(() => console.log("Chart 10 loaded successfully."))
.catch(error => console.error("Chart 10 error:", error));

vegaEmbed("#ramsar-total-area", "ramsar_total_area.json", {
    actions: false,
    renderer: "svg"
})
.then(() => console.log("Chart 11 loaded successfully."))
.catch(error => console.error("Chart 11 error:", error));

vegaEmbed(
    "#ramsar-rank-slopegraph",
    "ramsar_rank_slopegraph.json",
    {
        actions: false,
        renderer: "svg"
    }
)
.then(() => {
    console.log("Ramsar slopegraph loaded successfully.");
})
.catch(error => {
    console.error("Slopegraph loading error:", error);
});


