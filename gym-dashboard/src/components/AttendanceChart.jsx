import { PieChart, Pie, Cell } from 'recharts'

const data = [
    { name: 'Kids', value: 52 },
    { name: 'Adults', value: 40 },
    { name: 'Walk-Ins/Trial', value: 8 },
]

const COLORS = ['#00C49F', '#0088FE', '#FFBB28']

function AttendanceChart() {
    return (
        <PieChart width={400} height={400}>

            <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={1}
            >
                {data.map((entry, index) => (
                    <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                />
                ))}
            </Pie>
        </PieChart>
    )
}

export default AttendanceChart