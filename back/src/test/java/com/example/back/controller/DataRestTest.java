package com.example.back.controller;


import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
public class DataRestTest {
    private final MockMvc mvc;

    public DataRestTest(@Autowired MockMvc mvc) {
        this.mvc = mvc;
    }
    
//    @DisplayName("restapi 테스트")
//    @Test
//    void restapi테스트() throws Exception {
//        // given
//
//        // when
//
//        // then
//        mvc.perform(MockMvcRequestBuilders.get("/postings"))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(MediaType.valueOf("application/hal+json")));
//    }
}
