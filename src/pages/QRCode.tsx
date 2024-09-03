import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormErrorMessage, FormControl, Icon, FormLabel, VStack, HStack, Select, Textarea, Button, Box, Input, Center, Heading } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Container } from "@chakra-ui/react";
import { QRCodeSVG } from "qrcode.react";
import { MdBuild, MdQrCode2, MdSettings } from "react-icons/md";

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

type QRProps = {
  value: string;
  size?: number;
  level?: ErrorCorrectionLevel;
  fgColor?: string;
  bgColor?: string;
  includeMargin?: boolean;
  marginSize?: number;
  title?: string;
  minVersion?: number;
};

function QRCode() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<QRProps>();

  const [params, setParams] = useState<QRProps>({
    value: "",
    size: 400,
    level: "M",
    fgColor: "#000000",
    bgColor: "#FFFFFF",
  });

  function onSubmit(data: QRProps) {
    setParams(data);
  }

  return (
    <Container maxW="900px">
      <Box p={2} pt={4}>
        <HStack>
          <Icon as={MdQrCode2} boxSize={14} />
          <Heading as="h1" fontSize="2xl">
            QRコード生成アプリケーション
          </Heading>
        </HStack>
      </Box>

      <Box p={5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <FormControl isInvalid={!!errors.value}>
              <Textarea
                id="value"
                defaultValue={params.value}
                placeholder="ここにQRコードを作成するデータを入力してください"
                {...register("value", {
                  required: "※ 必須です",
                })}
              ></Textarea>
              <FormErrorMessage>{errors.value && errors.value.message}</FormErrorMessage>
            </FormControl>

            <Box w={"100%"}>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <Icon as={MdSettings} boxSize={5} />
                    <Box as="span" flex="1" textAlign="left">
                      オプション設定
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <HStack>
                      <FormControl isInvalid={!!errors.size}>
                        <FormLabel htmlFor="size">
                          サイズ:
                          <Input
                            id="size"
                            defaultValue={params.size}
                            {...register("size", {
                              required: "※ 必須です",
                            })}
                          ></Input>
                          <FormErrorMessage>{errors.size && errors.size.message}</FormErrorMessage>
                        </FormLabel>
                      </FormControl>

                      <FormControl isInvalid={!!errors.fgColor}>
                        <FormLabel htmlFor="fgColor">
                          前景色:
                          <Input
                            id="fgColor"
                            defaultValue={params.fgColor}
                            {...register("fgColor", {
                              required: "※ 必須です",
                            })}
                          ></Input>
                          <FormErrorMessage>{errors.fgColor && errors.fgColor.message}</FormErrorMessage>
                        </FormLabel>
                      </FormControl>

                      <FormControl isInvalid={!!errors.bgColor}>
                        <FormLabel htmlFor="bgColor">
                          背景色:
                          <Input
                            id="bgColor"
                            defaultValue={params.bgColor}
                            {...register("bgColor", {
                              required: "※ 必須です",
                            })}
                          ></Input>
                          <FormErrorMessage>{errors.bgColor && errors.bgColor.message}</FormErrorMessage>
                        </FormLabel>
                      </FormControl>

                      <FormControl isInvalid={!!errors.level}>
                        <FormLabel>
                          誤り訂正レベル:
                          <Select
                            id="level"
                            defaultValue={params.level}
                            {...register("level", {
                              required: "※ 必須です",
                            })}
                          >
                            <option value="L">L(7%)</option>
                            <option value="M">M(15%)</option>
                            <option value="Q">Q(25%)</option>
                            <option value="H">H(30%)</option>
                          </Select>
                          <FormErrorMessage>{errors.level && errors.level.message}</FormErrorMessage>
                        </FormLabel>
                      </FormControl>
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>

            <Button type="submit" w="100%" leftIcon={<MdBuild />} size="lg" colorScheme="blue">
              QRコード生成
            </Button>
          </VStack>
        </form>
      </Box>

      {params.value && (
        <Center>
          <QRCodeSVG {...params} />
        </Center>
      )}
    </Container>
  );
}

export default QRCode;
