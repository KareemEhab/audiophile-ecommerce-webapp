import { useState } from "react";
import { Box, Button, VStack, Heading, HStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import FormField from "../components/common/FormField";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .max(50, "Must be at most 50 characters")
      .required("Required"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .max(50, "Password must be at most 50 characters")
      .required("Required"),
  });

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: any
  ) => {
    try {
      // Make API request to authenticate user
      const response = await apiClient.post("/auth", values);
      // Check if request was successful
      if (!response.data) {
        throw new Error(response.data.message || "Login failed");
      }

      // Extract token from response
      const token = response.data;
      // Set token in localStorage
      localStorage.setItem("audiophile-token", token);

      // Call the onLoginSuccess callback to navigate to a different route
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <HStack width="100vw" height="100vh" justify="center" align="center">
      <Box
        maxW="md"
        mx="auto"
        mt={8}
        p={6}
        borderWidth={1}
        borderRadius="md"
        boxShadow="lg"
      >
        <Heading as="h2" textAlign="center" mb={6} fontSize="xl">
          Login
        </Heading>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <VStack spacing={4}>
                <FormField
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                />
                <FormField
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                {error && <Box color="red.500">{error}</Box>}
                <Button
                  colorScheme="blue"
                  isLoading={formik.isSubmitting}
                  type="submit"
                  width="full"
                >
                  Login
                </Button>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  width="full"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </HStack>
  );
};

export default LoginPage;
