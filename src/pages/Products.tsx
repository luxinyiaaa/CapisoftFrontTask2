import { AppLayout } from "@/components/layout/AppLayout";
import { Box } from "@chakra-ui/react";

export default function ProductPage() {
  return (
    <AppLayout title="Products">
      {/* 1) 整页背景：占满高度 */}
      <Box bg="bg.dashboard" minH="dvh" w="full">
        {/* 2) 响应式内边距：手机小一点，桌面大一点 */}
        <Box px={{ base: 4, md: 6 }} py={{ base: 4, md: 6 }}>
          {/* 3) 内容最大宽度：不是写死宽度，是“上限” */}
          <Box w="full" maxW={{ base: "full", xl: "1200px" }} mx="auto">
            {/* 4) 行间距：响应式 */}
            contetent
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
}
