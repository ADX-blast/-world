// locations.js - 專門存放歷史資料
export const locations = [
    {
        iconType: "舊石器時代",
        name: "八仙洞遺址",
        period: "舊石器時代",
        latlng: [23.3961, 121.4772],
        startYear: -30000,
        endYear: -5000,
        description: "台灣最古老史前遺址。",
        sources: []
    },
    {
        iconType: "原住民",
        name: "南島民族遷徙",
        period: "南島民族文化",
        startYear: -5000,
        endYear: 2026,
        description: "南島語族由東南亞移入台灣，並在島內遷徙發展。",
        path: [
            [-5000, 10.0, 110.0], [-4000, 25.1, 121.4],
            [-1000, 23.5, 121.3], [2026, 22.7, 121.1]
        ],
        sources: []
    },
    {
        iconType: "明鄭時期",
        name: "鄭成功開台航路",
        period: "明鄭時期",
        startYear: 1661.306, // 4月22日
        endYear: 1662.087,   // 2月1日
        description: "1661年4月22日金門啟航，4月30日登陸鹿耳門。1662年2月1日荷蘭投降。",
        path: [
            [1661.306, 24.4, 118.4], // 金門
            [1661.328, 23.0, 120.1], // 鹿耳門
            [1662.087, 23.0, 120.1]  // 投降定點
        ],
        sources: []
    }
];