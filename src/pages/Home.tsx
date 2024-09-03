import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Heading, StackDivider, Box, Text, Stack, SimpleGrid } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box p={5} height={"100vh"} background={"lightgray"}>
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        <Link to="/qrcode">
          <Card height="240px">
            <CardHeader>
              <Heading size="lg">QRコード生成</Heading>
            </CardHeader>
            <CardBody>
              <Text>入力されたメッセージやURLのQRコードを生成します。</Text>
            </CardBody>
          </Card>
        </Link>

        <Link to="/Passwd">
          <Card height="240px">
            <CardHeader>
              <Heading size="lg">パスワード生成</Heading>
            </CardHeader>
            <CardBody>
              <Text>パスワード長や文字種を指定して様々な条件でパスワードを生成します。</Text>
            </CardBody>
          </Card>
        </Link>

        <Link to="/whoami">
          <Card height="240px">
            <CardHeader>
              <Heading size="lg">IPアドレス</Heading>
            </CardHeader>
            <CardBody>
              <Text>接続に使われる自身のグローバルIPアドレスを表示します。</Text>
            </CardBody>
          </Card>
        </Link>

        <Link to="/base64">
          <Card height="240px">
            <CardHeader>
              <Heading size="lg">Base64 変換</Heading>
            </CardHeader>
            <CardBody>
              <Text>Base64 のエンコード・デコード変換します。</Text>
            </CardBody>
          </Card>
        </Link>
      </SimpleGrid>
    </Box>
  );
};
export default Home;
