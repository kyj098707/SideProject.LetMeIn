package com.example.back.controller;


import com.example.back.dto.UserDto;
import com.example.back.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


// User API
@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody UserDto userDto) throws Exception {
        try {
            Map<String, Object> resultMap = userService.joinUser(userDto);
            return new ResponseEntity<String>("성공", HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity<String>("실패", HttpStatus.OK);
        }
    }

}
