package com.example.back.controller;


import com.example.back.domain.Posting;
import com.example.back.dto.PostingDto;
import com.example.back.service.PostingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@RestController
@RequestMapping("/posting")
public class PostingController {


    @Autowired
    private PostingService postingService;

    //PostList
    @GetMapping("/list")
    public ResponseEntity<List<PostingDto>> getAllPostings() throws Exception {
        List<PostingDto> allPostings = postingService.getAllPostings();
        return new ResponseEntity<List<PostingDto>>(allPostings, HttpStatus.ACCEPTED);
    }

    //CreatePost
    @PostMapping()
    public ResponseEntity<PostingDto> createPosting(@RequestBody PostingDto postingDto) throws  Exception {
        try {
            PostingDto createdPostingDto = postingService.createPosting(postingDto);
            return new ResponseEntity<PostingDto>(createdPostingDto, HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity<PostingDto>(postingDto,HttpStatus.OK);
        }
    }
}
