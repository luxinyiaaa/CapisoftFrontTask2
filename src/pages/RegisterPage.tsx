// pages/RegisterPage.tsx
import { VStack, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "@/components/auth/Authlayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthField } from "@/components/auth/AuthField";
import { PasswordField } from "@/components/auth/PasswordField";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <VStack gap={4} align="stretch" textAlign="center">
          <Heading>Sign up!</Heading>
          <Text color="text.muted">
            Register to our service to be able to invite clients!
          </Text>

          <AuthField placeholder="Full Name" />
          <AuthField placeholder="Email" />
          <PasswordField />
          <AuthField placeholder="Phone Number" />
          <AuthField placeholder="Date Of Birth" />

          <Button
            bg="button.primary"
            borderRadius="button"
            color="text.primary"
          >
            Register
          </Button>

          <Text fontSize="sm">
            Already have an account?{" "}
            <Link asChild textDecoration="underline">
              <RouterLink to="/login">Log In</RouterLink>
            </Link>
          </Text>
        </VStack>
      </AuthCard>
    </AuthLayout>
  );
}
