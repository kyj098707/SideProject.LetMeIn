package com.example.back.repository;

import com.example.back.domain.Posting;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PostingRepository extends JpaRepository<Posting,Long> {
}
