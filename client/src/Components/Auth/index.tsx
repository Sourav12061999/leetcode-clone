import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  LoadingOverlay,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ServerResponseType, UserType } from "../../Types";
import { BACKEND_SERVER_URL } from "../../globals";
import { AuthContext } from "../../context";
import { notifications } from "@mantine/notifications";

type PropTypes = {
  type: "Signup" | "Signin";
};

type FormDataType = {
  name: string;
  email: string;
  password: string;
};
export default function AuthForm({ type }: PropTypes) {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);

  const handleChange = (key: keyof FormDataType, data: string) => {
    setFormData(() => {
      return { ...formData, [key]: data };
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BACKEND_SERVER_URL}/${type.toLowerCase()}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            name: formData.name,
          }),
        }
      );
      const data: ServerResponseType<UserType & { token: string }> =
        await response.json();
      setIsLoading(false);
      if (data.isSuccess === false || !data.data) {
        setIsError(true);
        return setError(data.error?.message || "Some Error occoured");
      }
      localStorage.setItem("auth", data.data.token);
      authContext?.setAuthData({
        isAuthenticated: true,
        token: data.data.token,
        userData: {
          email: data.data.email,
          name: data.data.name,
        },
      });
      notifications.show({
        title: `${type} Successful`,
        message: "Please continue with your coding journey",
        color: "green",
      });
    } catch (error: any) {
      setIsLoading(false);
      setIsError(true);
      if (error["message"] !== undefined) setError(error.message);
    }
  };

  useEffect(() => {
    if (!error || isError === false) return;
    notifications.show({
      title: `${type} Error`,
      message: error,
      color: "red",
    });
  }, [error, isError, type]);
  return (
    <>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          {type !== "Signin" ? "Create an account" : "Welcome back!"}
        </Title>
        {type !== "Signup" ? (
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Link to={"/signup"}>
              <Anchor size="sm" component="button">
                Create account
              </Anchor>
            </Link>
          </Text>
        ) : (
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Already have an account?{" "}
            <Link to={"/signin"}>
              <Anchor size="sm" component="button">
                Sign in
              </Anchor>
            </Link>
          </Text>
        )}

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {type === "Signup" && (
            <TextInput
              onChange={(e) => handleChange("name", e.target.value)}
              label="Name"
              required
              mt="md"
            />
          )}
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button onClick={handleSubmit} fullWidth mt="xl">
            {type === "Signup" ? "Sign up" : "Sign in"}
          </Button>
        </Paper>
        <LoadingOverlay visible={isLoading} overlayBlur={2} />
      </Container>
    </>
  );
}
