import { View, Card, Flex, Heading } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

export default function GenericFeed({ posts }) {
  return (
    <View>
      {posts.map((post) => (
        <div className="max-w-[80vh] m-5" key={post.id}>
          <Card variation="elevated">
            <Flex direction="row" justifyContent="space-between">
              <Flex direction="column">
                <Heading isTruncated={true} level={4}>
                  Title: {post.title}
                </Heading>
                <p className="break-words">User: {post.username}</p>
                <p className="break-words">Content: {post.content}</p>
                <p className="break-words">
                  <Link
                    to={`/post/${post.id}`}
                    className="inline pb-1 pt-0 m-0 text-blue-900 border-b-2"
                  >
                    View More
                  </Link>
                </p>
              </Flex>
            </Flex>
          </Card>
        </div>
      ))}
    </View>
  );
}
