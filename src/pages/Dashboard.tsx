import { AppLayout } from "@/components/layout/AppLayout";
import { Box, Text } from "@chakra-ui/react";

export default function DashboardPage() {
  return (
    <AppLayout title="Dashboard">
      <Box
        bg="bg.canvas"
        borderWidth="1px"
        borderColor="border.subtle"
        borderRadius="lg"
        p={4}
      >
        <Text>Dashboard content goes here</Text>
      </Box>
    </AppLayout>
  );
}
