import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Flex,
  Text,
  useToast,
  Link,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SetUserDataAfterLogin } from "../redux/AuthReducer/action";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
let initialValue = {
  email: "",
  password: "",
};

export const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const toast = useToast();
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => {
    return state.AuthReducer;
  });

  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  function handleBack(){
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialValue);
    try {
      let users = axios
        .get("https://spendwiser-mock-api.onrender.com/userData")
        .then((response) => {
          let login = response.data.find((item) => {
            return (
              item.email === formValues.email &&
              item.password === formValues.password
            );
          });

          if (login) {
           
            dispatch(SetUserDataAfterLogin(login));
            toast({
              position: "top",
              title: "Welcome to SpendWiser",
              description: "Successfully Logged in...",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            
            
            if(!location.state){
              navigate('/dashboard')
            }else{
              navigate(location.state);
            }
         

          } else {
            toast({
              position: "top",
              title: "Invalid Credential.",
              description: "",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box mx="auto" w={{ base: "80%", md: "50%" }}>
      <Heading as="h1" textAlign="center" my="8">
        Log In
      </Heading>
      {isError && (
        <Box textAlign="center" mb="4" bg="red">
          <p>Error logging in. Please try again later.</p>
        </Box>
      )}
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormControl isRequired>
            <FormLabel display="inline"  htmlFor="email">Email:</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>
          <Box>
          <FormControl isRequired>
            <FormLabel display="inline" htmlFor="password">Password:</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>
          </Box>
          <Box>
          <Button 
            type="submit"
            backgroundColor={"#84c225"}
            color={"white"}
            isLoading={isLoading}
            loadingText="Logging in..."
            w="10%"
            // colorScheme="blue"
          >
            Log In
          </Button>
          </Box>
          <br/>
          <Box textAlign="center">
            <h5 onClick={handleBack}>Back</h5>
          </Box>
          {/* <br />
        <Link
          href="/signup"
          textAlign="center"
          _hover={{ textDecoration: "underline" }}
        >
          Sign Up
        </Link> */}
        </Stack>
      </form>
    </Box>
  );
};
