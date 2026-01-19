import { Box, useToken } from "@chakra-ui/react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { day: "12 Jan", earnings: 28000, revenue: 9000 },
  { day: "13 Jan", earnings: 21000, revenue: 16000 },
  { day: "14 Jan", earnings: 24000, revenue: 32000 },
  { day: "15 Jan", earnings: 23000, revenue: 21000 },
  { day: "16 Jan", earnings: 18000, revenue: 38000 },
];

export function RevenueOverviewChart() {
  const [purple500, green500] = useToken("colors", ["purple.500", "green.500"]);

  return (
    <Box h="300px" w="full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 6" vertical={false} />
          <XAxis
            dataKey="day"
            tickMargin={10}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tickMargin={10} axisLine={false} tickLine={false} />
          <Tooltip />

          <Legend />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke={purple500}
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={green500}
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <Line
        type="monotone"
        dataKey="earnings"
        stroke={purple500}
        strokeWidth={3}
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="revenue"
        stroke={green500}
        strokeWidth={3}
        dot={false}
      />
      {/* ===== Legend（Figma 风格） ===== */}
      {/* <HStack gap={6} mt={3} pl={2}>
        <HStack gap={2}>
          <Box w="14px" h="6px" bg={purple500} borderRadius="full" />
          <Text fontSize="sm" color="fg.muted">
            Earnings
          </Text>
        </HStack>

        <HStack gap={2}>
          <Box w="14px" h="6px" bg={green500} borderRadius="full" />
          <Text fontSize="sm" color="fg.muted">
            Revenue
          </Text>
        </HStack>
      </HStack> */}
    </Box>
  );
}
