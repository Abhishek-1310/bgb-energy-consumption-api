exports.handler = async (event) => {
    console.log("event", event);

    const energyData = [
        { month: "January", consumption_kWh: 420, cost_usd: 63.00, peakUsage_kWh: 52 },
        { month: "February", consumption_kWh: 390, cost_usd: 58.50, peakUsage_kWh: 49 },
        { month: "March", consumption_kWh: 450, cost_usd: 67.50, peakUsage_kWh: 55 },
        { month: "April", consumption_kWh: 470, cost_usd: 70.50, peakUsage_kWh: 60 },
        { month: "May", consumption_kWh: 510, cost_usd: 76.50, peakUsage_kWh: 63 },
        { month: "June", consumption_kWh: 530, cost_usd: 79.50, peakUsage_kWh: 66 },
        { month: "July", consumption_kWh: 600, cost_usd: 90.00, peakUsage_kWh: 72 },
        { month: "August", consumption_kWh: 580, cost_usd: 87.00, peakUsage_kWh: 70 },
        { month: "September", consumption_kWh: 490, cost_usd: 73.50, peakUsage_kWh: 59 },
        { month: "October", consumption_kWh: 460, cost_usd: 69.00, peakUsage_kWh: 56 },
        { month: "November", consumption_kWh: 430, cost_usd: 64.50, peakUsage_kWh: 53 },
        { month: "December", consumption_kWh: 410, cost_usd: 61.50, peakUsage_kWh: 50 },
    ];

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Monthly energy consumption data retrieved successfully.",
            unit: "kWh",
            year: 2025,
            data: energyData
        }),
    };
};
