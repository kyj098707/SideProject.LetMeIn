package com.example.back.service;


import com.example.back.domain.Posting;
import com.example.back.dto.PostingDto;
import com.example.back.repository.PostingRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class PostingService {

    @Autowired
    private PostingRepository postingRepository;

    //crud
    @Transactional
    public PostingDto createPosting(PostingDto postingDto) {
        Posting posting = postingRepository.save(postingDto.toEntity());
        return posting.toDto();
    }

    public List<PostingDto> getAllPostings() {
        List<Posting> allPostingList = postingRepository.findAll();
        if(allPostingList.isEmpty()){
            System.out.println("포스팅 없음");
            return null;
        }
        List<PostingDto> postingDtoList = new ArrayList<>();
        for(Posting p:allPostingList) {
            postingDtoList.add(p.toDto());
        }
        return postingDtoList;
    }

}
