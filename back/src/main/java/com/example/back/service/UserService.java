package com.example.back.service;


import com.example.back.dto.UserDto;
import com.example.back.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public Map<String, Object> joinUser(UserDto userDto) {
        Map<String, Object> resultMap = new HashMap<>();
        userDto.setPw(passwordEncoder.encode(userDto.getPw()));
        resultMap.put("result",userDto);
        return resultMap;
    }


}
