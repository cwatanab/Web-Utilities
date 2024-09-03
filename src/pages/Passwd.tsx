import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Icon, VStack, HStack, Button, Box, Heading } from "@chakra-ui/react";
import { Checkbox, FormLabel, FormControl, Container } from "@chakra-ui/react";
import { Slider, SliderTrack, SliderMark, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { MdBuild, MdLock } from "react-icons/md";
import { Wrap, WrapItem, Switch, Code, Badge } from "@chakra-ui/react";
import { generateRandomPassword } from "generate-strings";
import "./Passwd.css";

type Params = {
  value: string;
  size: number;
  level: string;
  fgColor: string;
  bgColor: string;
};

function ColorText(props: any) {
  let r = props.children.split("").map((c: string, i: number) => {
    let type = "special";
    if (/[A-Za-z]/.test(c)) type = "alphabet";
    else if (/[0-9]/.test(c)) type = "number";

    return (
      <span key={i} className={type}>
        {c}
      </span>
    );
  });
  return <div>{r}</div>;
}
const strengthLevel = ["red", "orange", "yellow", "green"];
function Passwd() {
  const [password, setPassword] = useState<any[]>([]);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [length, setLength] = useState(16);
  const [quantity, setQuantity] = useState(10);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Params>();

  const [params, setParams] = useState<Params>({
    value: "",
    size: 400,
    level: "M",
    fgColor: "#000000",
    bgColor: "#FFFFFF",
  });

  function onSubmit(data: Params) {
    let passwords: any[] = [];

    for (let i = 0; i < quantity; i++) {
      const p = generateRandomPassword({
        passwordLength: length,
        upperCase: upperCase,
        lowerCase: lowerCase,
        number: numbers,
        special: symbols,
      });
      passwords.push(p);
    }

    setPassword(passwords);
  }
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  return (
    <Container maxW="900px">
      <Box p={2} pt={4}>
        <HStack>
          <Icon as={MdLock} boxSize={14} />
          <Heading as="h1" fontSize="2xl">
            パスワード生成
          </Heading>
        </HStack>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack w="100%" p={4}>
          <FormLabel w="120px" mb="0" textAlign="right" pr={3}>
            文字種別
          </FormLabel>
          <HStack w="100%" p={4}>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="isChecked" mb="0">
                英字(大文字)
              </FormLabel>
              <Switch id="isChecked" isChecked={upperCase} onChange={(e) => setUpperCase(e.target.checked)} />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="isDisabled" mb="0">
                英字(小文字)
              </FormLabel>
              <Switch id="isDisabled" isChecked={lowerCase} onChange={(e) => setLowerCase(e.target.checked)} />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="isFocusable" mb="0">
                数字
              </FormLabel>
              <Switch id="isFocusable" isChecked={numbers} onChange={(e) => setNumbers(e.target.checked)} />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="isInvalid" mb="0">
                記号
              </FormLabel>
              <Switch id="isInvalid" isChecked={symbols} onChange={(e) => setSymbols(e.target.checked)} />
            </FormControl>
          </HStack>
        </HStack>

        <VStack>
          <HStack w="100%" p={4} pt={10}>
            <FormLabel w="120px" mb="0" textAlign="right" pr={3}>
              長さ
            </FormLabel>
            <Slider min={6} max={40} defaultValue={length} onChange={(val) => setLength(val)}>
              <SliderMark value={10} {...labelStyles}>
                10
              </SliderMark>
              <SliderMark value={20} {...labelStyles}>
                20
              </SliderMark>
              <SliderMark value={30} {...labelStyles}>
                30
              </SliderMark>
              <SliderMark value={40} {...labelStyles}>
                40
              </SliderMark>
              <SliderMark value={length} textAlign="center" bg="blue.500" color="white" mt="-10" ml="-5" w="12">
                {length}
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>

          <HStack w="100%" p={4} pt={10}>
            <FormLabel w="120px" mb="0" textAlign="right" pr={3}>
              個数
            </FormLabel>
            <Slider min={10} max={100} defaultValue={quantity} onChange={(val) => setQuantity(val)}>
              <SliderMark value={10} {...labelStyles}>
                10
              </SliderMark>
              <SliderMark value={20} {...labelStyles}>
                20
              </SliderMark>
              <SliderMark value={30} {...labelStyles}>
                30
              </SliderMark>
              <SliderMark value={40} {...labelStyles}>
                40
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50
              </SliderMark>
              <SliderMark value={60} {...labelStyles}>
                60
              </SliderMark>
              <SliderMark value={70} {...labelStyles}>
                70
              </SliderMark>
              <SliderMark value={80} {...labelStyles}>
                80
              </SliderMark>
              <SliderMark value={90} {...labelStyles}>
                90
              </SliderMark>
              <SliderMark value={100} {...labelStyles}>
                100
              </SliderMark>
              <SliderMark value={quantity} textAlign="center" bg="blue.500" color="white" mt="-10" ml="-5" w="12">
                {quantity}
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>

          <HStack w="100%" p={4}>
            <FormControl display="flex" alignItems="center">
              <FormLabel w="120px" mb="0" textAlign="right" pr={3}>
                オプション
              </FormLabel>
              <Box w="100%">
                <Checkbox>オプション</Checkbox>
              </Box>
            </FormControl>
          </HStack>
        </VStack>

        <Button w="100%" type="submit" leftIcon={<MdBuild />} size="lg" colorScheme="blue">
          パスワード生成
        </Button>
      </form>

      <Wrap pt={10}>
        {password &&
          password.map((x, i) => (
            <WrapItem key={i} p={2}>
              <Code p={4} fontSize="2xl">
                <ColorText>{x.password}</ColorText>
              </Code>
              <Badge colorScheme={strengthLevel[x.passwordStrength.level]}>{x.passwordStrength.points}</Badge>
            </WrapItem>
          ))}
      </Wrap>
    </Container>
  );
}

export default Passwd;
