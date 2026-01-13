// pages/LoginPage.tsx
import { VStack, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "@/components/auth/Authlayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthField } from "@/components/auth/AuthField";
import { PasswordField } from "@/components/auth/PasswordField";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <VStack gap={{ base: 3, md: 4 }} align="stretch" textAlign="center">
          <Heading textStyle="h1">Welcome</Heading>

          <Text color="text.muted">
            Great to see you! Please enter your account details.
          </Text>

          <AuthField placeholder="Email" />
          <PasswordField />

          <Button
            w="full"
            h="button"
            bg="button.primary"
            borderRadius="button"
            color="text.primary"
          >
            Login
          </Button>

          <Text fontSize="sm" color="text.primary">
            Don’t have an account?{" "}
            <Link asChild textDecoration="underline">
              <RouterLink to="/register">Sign Up</RouterLink>
            </Link>
          </Text>
        </VStack>
      </AuthCard>
    </AuthLayout>
  );
}
