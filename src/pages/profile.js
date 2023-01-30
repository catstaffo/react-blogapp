import { Flex, Grid, Image, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../context";
import "../styles/index.css";

export default function Profile() {
  const { user } = useUser();
  let username = false;
  const location = useLocation();
  const history = location.pathname;

  if (user !== "undefined" && user !== null) {
    username = true;
  } else {
    username = false;
  }

  return username ? (
    <Grid templateColumns={{ base: "1fr 0", medium: "1fr .8fr" }}>
      <Flex
        backgroundColor="white"
        justifyContent="center"
        className="container"
        alignItems="center"
        height="80vh"
      >
        <main>
          <h1>Hello {user.username}</h1>
        </main>
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
  ) : (
    <Navigate to="/login" state={{ history }} />
  );
}
