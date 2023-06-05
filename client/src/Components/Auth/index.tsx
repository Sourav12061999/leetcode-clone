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
} from "@mantine/core";
import { Link } from "react-router-dom";

type PropTypes = {
  type: "Signup" | "Signin";
};
export default function AuthForm({ type }: PropTypes) {
  return (
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
        {type === "Signup" && <TextInput label="Name" required mt="md" />}
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
        <Button fullWidth mt="xl">
          {type === "Signup" ? "Sign up" : "Sign in"}
        </Button>
      </Paper>
    </Container>
  );
}
