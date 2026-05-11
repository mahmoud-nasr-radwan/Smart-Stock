// 1. تحديد البيانات
const banks = ['COMI', 'SAUD', 'ADIB', 'FAIT', 'HDBK']; // هذا هو محور X (أسماء البنوك)
const prices = [75.50, 12.30, 42.80, 38.20, 52.60]; // هذا هو محور Y (الأسعار)

const upperTrend = [85, 16, 55, 48, 65];
const lowerTrend = [65, 8, 35, 30, 45];

const ctx = document.getElementById('comparisonChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: banks, // X-Axis
        datasets: [{
                label: 'السعر الحالي (EGP)',
                data: prices, // Y-Axis
                borderColor: '#00ff80',
                backgroundColor: 'rgba(0, 255, 128, 0.1)',
                borderWidth: 3,
                pointRadius: 6,
                tension: 0.3,
                fill: true
            },
            {
                label: 'الحد العلوي (Upper)',
                data: upperTrend,
                borderColor: '#ffaa00',
                borderDash: [5, 5],
                pointRadius: 0,
                fill: false
            },
            {
                label: 'الحد السفلي (Lower)',
                data: lowerTrend,
                borderColor: '#ff4444',
                borderDash: [5, 5],
                pointRadius: 0,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { labels: { color: '#fff', font: { size: 12 } } }
        },
        scales: {
            // إعدادات المحور الرأسي Y
            y: {
                title: {
                    display: true,
                    text: 'القيمة بالسعر (EGP)', // توضيح محور Y
                    color: '#75FB4C',
                    font: { size: 14, weight: 'bold' }
                },
                grid: { color: '#333' },
                ticks: { color: '#fff' },
                min: 0,
                max: 100
            },
            // إعدادات المحور الأفقي X
            x: {
                title: {
                    display: true,
                    text: 'البنوك المدرجة (Ticker)', // توضيح محور X
                    color: '#75FB4C',
                    font: { size: 14, weight: 'bold' }
                },
                grid: { display: false },
                ticks: { color: '#fff' }
            }
        }
    }
});