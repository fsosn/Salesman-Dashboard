import {useState} from "react";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, ReferenceDot, ResponsiveContainer,
} from "recharts";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const SalesChart = () => {
    const {t} = useTranslation();
    const [measure, setMeasure] = useState("revenue");
    const [timeRange, setTimeRange] = useState("today");
    const [chartType, setChartType] = useState("bar");
    const [showPreviousData, setShowPreviousData] = useState(false);
    const jsonData = useSelector((state) => state.salesChart.chartData)

    const todayData = jsonData.today;
    const currentWeekData = jsonData.currentWeek;

    const selectedData = timeRange === "today" ? todayData : currentWeekData;

    const filteredData = selectedData.filter((entry) => {
        const entryDate = new Date(entry.date);

        if (timeRange === "today") {
            const today = new Date("2024-01-27");
            today.setHours(0, 0, 0, 0);
            return entryDate >= today && entryDate < new Date(today.getTime() + 24 * 60 * 60 * 1000);
        } else if (timeRange === "currentWeek") {
            const startOfWeek = new Date();
            startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
            return entryDate >= startOfWeek && entryDate < new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000);
        } else {
            return true;
        }
    });

    const ChartComponent = chartType === "bar" ? BarChart : LineChart;
    const SeriesComponent = chartType === "bar" ? Bar : Line;

    let referenceDotCoords = {x: "18:00", y: 0};

    if (timeRange === "currentWeek") {
        referenceDotCoords.x = "Sat";
    }

    const referenceDataPoint = filteredData.find((entry) => entry.name === referenceDotCoords.x);

    if (referenceDataPoint) {
        referenceDotCoords.y = referenceDataPoint[measure];
    }

    return (
        <div className={"chart-container pl-2 d-flex flex-column justify-content-center"}>
            <div className={"p-2 d-flex justify-content-around align-items-center"}>
                <div>
                    <select className={"rounded"} value={measure} onChange={(e) => setMeasure(e.target.value)}>
                        <option value="revenue">{t("revenue")}</option>
                        <option value="quantity">{t("quantity")}</option>
                    </select>
                </div>
                <div>
                    <select className={"rounded"} value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                        <option value="today">{t("today")}</option>
                        <option value="currentWeek">{t("week")}</option>
                    </select>
                </div>
                <div>
                    <select className={"rounded"} value={chartType} onChange={(e) => setChartType(e.target.value)}>
                        <option value="bar">{t("bar-chart")}</option>
                        <option value="line">{t("line-chart")}</option>
                    </select>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={showPreviousData}
                        onChange={() => setShowPreviousData(!showPreviousData)}
                        className={"margin-right-16"}
                    />
                    <label>
                        {t("show-previous-data")}
                    </label>
                </div>
            </div>
            <ResponsiveContainer width={'99%'} height={300}>
                <ChartComponent data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis
                        dataKey="name"
                        interval={timeRange === "currentWeek" ? 0 : (timeRange === "today" ? 3 : "preserveStartEnd")}
                        tickCount={timeRange === "today" ? 6 : undefined}
                    />
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>

                    <SeriesComponent
                        type="monotone"
                        dataKey={measure}
                        name={showPreviousData ? "Current " + measure : measure}
                        fill="#877DC7"
                        stroke="#6257B5"
                    />
                    {showPreviousData && (
                        <SeriesComponent
                            type="monotone"
                            dataKey={`previous${measure.charAt(0).toUpperCase() +
                            measure.slice(1)}`}
                            name={`Previous ${measure}`}
                            fill="#D6A8FF"
                            stroke="#C483FF"
                        />
                    )}
                    <ReferenceDot
                        x={referenceDotCoords.x}
                        y={referenceDotCoords.y}
                        r={6}
                        fill="#E59035"
                        stroke="#CB7D2D"
                    />
                </ChartComponent>
            </ResponsiveContainer>
        </div>
    );
};


export default SalesChart;
