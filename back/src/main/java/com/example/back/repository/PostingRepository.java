package com.example.back.repository;

import com.example.back.domain.Posting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


public interface PostingRepository extends JpaRepository<Posting,Long> {
}
