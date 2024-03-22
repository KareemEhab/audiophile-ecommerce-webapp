import { useState } from "react";
import { Box, Button, VStack, Heading, HStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import FormField from "../components/common/FormField";

interface RegisterFormValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(3, "First name must be at least 3 characters")
      .max(50, "First name must be at most 50 characters")
      .required("Required"),
    last_name: Yup.string()
      .min(3, "Last name must be at least 3 characters")
      .max(50, "Last name must be at most 50 characters")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .max(50, "Must be at most 50 characters")
      .required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
        "Password must include at least one numeric value and one special character"
      )
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be at most 50 characters")
      .required("Required"),
  });

  const handleSubmit = async (
    values: RegisterFormValues,
    { setSubmitting }: any
  ) => {
    try {
      // Make API request to register user
      const response = await apiClient.post("/users", values);
      // Check if request was successful
      if (!response.data) {
        throw new Error(response.data.message || "Registration failed");
      }

      // Redirect to login page after successful registration
      navigate("/login");
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
          Register
        </Heading>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <VStack spacing={4}>
                <FormField
                  name="first_name"
                  label="First Name"
                  placeholder="Enter your first name"
                />
                <FormField
                  name="last_name"
                  label="Last Name"
                  placeholder="Enter your last name"
                />
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
                  Register
                </Button>
                <Button
                  colorScheme="blue"
                  width="full"
                  onClick={() => navigate("/login")}
                >
                  Back to Login
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </HStack>
  );
};

export default RegisterPage;
