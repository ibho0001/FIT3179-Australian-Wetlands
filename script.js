
vegaEmbed("#ramsar-map", "charts/ramsar_map.json", {
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
    "charts/ramsar_choropleth.json",
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


vegaEmbed("#ramsar-bar", "charts/ramsar_bar.json", {
    actions: false,
    renderer: "svg"
})
.then(() => {
    console.log("Ramsar bar chart loaded successfully.");
})
.catch(error => {
    console.error("Bar chart error:", error);
});


vegaEmbed(
    "#wetland-treemap",
    "charts/wetland_treemap.json",
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


vegaEmbed(
    "#wetland-heatmap",
    "charts/wetland_heatmap.json",
    {
        actions: false,
        renderer: "svg"
    }
)
.then(() => {
    console.log("Wetland heatmap loaded successfully.");
})
.catch(error => {
    console.error("Heatmap loading error:", error);
});
