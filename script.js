
const chartFontConfig = {
    title: {
        font: "DM Sans",
        subtitleFont: "DM Sans"
    },
    axis: {
        labelFont: "DM Sans",
        titleFont: "DM Sans"
    },
    legend: {
        labelFont: "DM Sans",
        titleFont: "DM Sans"
    },
    header: {
        labelFont: "DM Sans",
        titleFont: "DM Sans"
    },
    text: {
        font: "DM Sans"
    }
};

vegaEmbed("#ramsar-map", "charts/ramsar_hexbin.json", 
    
{
     actions: false,
    renderer: "svg",
    config: chartFontConfig

})
.then(() => {
    console.log("Ramsar hexbin map loaded successfully.");
})
.catch(error => {
    console.error("Hexbin map error:", error);
    document.getElementById("ramsar-map").textContent =
        "The map could not be loaded. Check the browser console.";
});


vegaEmbed(
    "#ramsar-choropleth",
    "ramsar_choropleth.json",
    {
         actions: false,
        renderer: "svg",
        config: chartFontConfig
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
        renderer: "svg",
        config: chartFontConfig
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
    "wetland_heatmap.json",
    {
         actions: false,
        renderer: "svg",
        config: chartFontConfig
    }
)
.then(() => {
    console.log("Wetland heatmap loaded successfully.");
})
.catch(error => {
    console.error("Heatmap loading error:", error);
});


vegaEmbed(
    "#wetland-permanence",
    "wetland_permanence.json",
    {
         actions: false,
        renderer: "svg",
        config: chartFontConfig
    }
)
.then(() => {
    console.log("Wetland permanence chart loaded successfully.");
})
.catch(error => {
    console.error("Wetland permanence chart error:", error);
});


vegaEmbed(
    "#inland-water-trends",
    "inland_water_trends.json",
    {
         actions: false,
        renderer: "svg",
        config: chartFontConfig
    }
)
.then(() => {
    console.log("Inland water trends chart loaded successfully.");
})
.catch(error => {
    console.error("Inland water trends chart error:", error);
});


vegaEmbed(
    "#inland-water-dumbbell",
    "inland_water_dumbbell.json",
    {
         actions: false,
        renderer: "svg",
        config: chartFontConfig
    }
)
.then(() => {
    console.log("Inland water dumbbell chart loaded successfully.");
})
.catch(error => {
    console.error("Inland water dumbbell chart error:", error);
});


vegaEmbed(
    "#ramsar-symbol-map",
    "ramsar_symbol_map.json",
    {
         actions: false,
    renderer: "svg",
    config: chartFontConfig
    }
)
.then(() => {
    console.log("Ramsar symbol map loaded successfully.");
})
.catch(error => {
    console.error("Ramsar symbol map error:", error);
});


vegaEmbed(
    "#ramsar-area-boxplot",
    "ramsar_area_boxplot.json",
    {
         actions: false,
    renderer: "svg",
    config: chartFontConfig
    }
)
.then(() => {
    console.log("Ramsar area boxplot loaded successfully.");
})
.catch(error => {
    console.error("Ramsar area boxplot error:", error);
});


vegaEmbed(
    "#ramsar-total-area",
    "ramsar_total_area.json",
    {
         actions: false,
    renderer: "svg",
    config: chartFontConfig
    }
)
.then(() => {
    console.log("Ramsar total area chart loaded successfully.");
})
.catch(error => {
    console.error("Ramsar total area chart error:", error);
});


vegaEmbed(
    "#ramsar-rank-slopegraph",
    "ramsar_rank_slopegraph.json",
    {
         actions: false,
        renderer: "svg",
        config: chartFontConfig
})
.then(() => {
    console.log("Ramsar slopegraph loaded successfully.");
})
.catch(error => {
    console.error("Slopegraph loading error:", error);
});
