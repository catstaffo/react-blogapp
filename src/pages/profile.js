import { Flex, Grid, Image, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import AuthForm from "../components/auth/authform";
import awsExports from "../aws-exports";
import "../index.css";

Amplify.configure(awsExports);

export default function Profile() {
  return (
    <Grid templateColumns={{ base: "1fr 0", medium: "1fr .8fr" }}>
      <Flex
        backgroundColor="white"
        justifyContent="center"
        className="container"
        alignItems="center"
        height="80vh"
      >
        <AuthForm />
      </Flex>
      <View height="80vh">
        <Image
          src="https://source.unsplash.com/LHA5EWdwWE4"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </View>
    </Grid>
  );
}
