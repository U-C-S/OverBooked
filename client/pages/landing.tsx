import React from "react";
import { useForm, useToggle, upperFirst } from "@mantine/hooks";
import {
	TextInput,
	PasswordInput,
	Text,
	Paper,
	Group,
	Button,
	Divider,
	Checkbox,
	Anchor,
	Center,
} from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";

export default function AuthenticationForm() {
	const [type, toggle] = useToggle("login", ["login", "signup"]);
	const form = useForm({
		initialValues: {
			email: "",
			name: "",
			password: "",
			terms: true,
		},

		validationRules: {
			// email: val => /^\S+@\S+$/.test(val),
			password: val => val.length >= 2,
		},
	});

	const submit = (values: typeof form.values) => {
		let rootUrl = process.env.NEXT_PUBLIC_API_SERVER;
		fetch(`${rootUrl}auth/${type}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: values.email,
				password: values.password,
			}),
		});
	};

	return (
		<Center style={{ width: "100%", height: "90vh" }}>
			<Paper radius="md" p="50px" withBorder>
				<Text size="lg" weight={500}>
					Welcome to Overbooked, {type} with
				</Text>

				<Center>
					<Button style={{ margin: "15px 0 0" }}>
						<BrandGithub />
						<Text size="sm">GitHub</Text>
					</Button>
				</Center>

				<Divider label="Or continue with email" labelPosition="center" my="lg" />

				<form onSubmit={form.onSubmit(submit)}>
					<Group direction="column" grow>
						{type === "signup" && (
							<TextInput
								label="Name"
								placeholder="Your name"
								value={form.values.name}
								onChange={event => form.setFieldValue("name", event.currentTarget.value)}
							/>
						)}

						<TextInput
							required
							label="Email"
							placeholder="Just type your email, man"
							value={form.values.email}
							onChange={event => form.setFieldValue("email", event.currentTarget.value)}
							error={form.errors.email && "Invalid email"}
						/>

						<PasswordInput
							required
							label="Password"
							placeholder="Whatever your password is...."
							value={form.values.password}
							onChange={event => form.setFieldValue("password", event.currentTarget.value)}
							error={form.errors.password && "Password should include at least 6 characters"}
						/>

						{type === "signup" && (
							<Checkbox
								label="I accept terms and conditions"
								checked={form.values.terms}
								onChange={event => form.setFieldValue("terms", event.currentTarget.checked)}
							/>
						)}
					</Group>

					<Group position="apart" mt="xl">
						<Anchor component="button" type="button" color="gray" onClick={() => toggle()} size="xs">
							{type === "signup" ? "Already have an account? Login" : "Don't have an account? signup"}
						</Anchor>
						<Button type="submit">{upperFirst(type)}</Button>
					</Group>
				</form>
			</Paper>
		</Center>
	);
}
