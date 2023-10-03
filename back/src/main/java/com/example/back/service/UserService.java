package com.example.back.service;


import com.example.back.domain.User;
import com.example.back.dto.UserDto;
import com.example.back.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {


    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Map<String, Object> joinUser(UserDto userDto) {
        Map<String, Object> resultMap = new HashMap<>();
        userDto.setPw(passwordEncoder.encode(userDto.getPw()));
        userRepository.save(userDto.toEntity());
        resultMap.put("result",userDto);
        return resultMap;
    }

    public List<UserDto> getAllUser() {
        List<User> userList = userRepository.findAll();
        if (userList.isEmpty()) {
            System.out.println("사용자 없음");
            return null;
        }
        List<UserDto> userDtoList = new ArrayList<>();
        for(User u:userList){
            UserDto userDto = u.toDto();
            userDtoList.add(userDto);
        }
        return userDtoList;
    }
}
