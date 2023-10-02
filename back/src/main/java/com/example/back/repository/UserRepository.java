package com.example.back.repository;

import com.example.back.domain.User;
import jakarta.persistence.EntityManager;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {

}
