package com.example.back.repository;

import com.example.back.config.JpaConfig;
import com.example.back.domain.Posting;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.assertj.core.api.Assertions.*;


@ActiveProfiles("testdb")
@DisplayName("JPA 연결 테스트")
@Import(JpaConfig.class)
@DataJpaTest
class JpaRepositoryTest {
    private final PostingRepository postingRepository;

    public JpaRepositoryTest(
            @Autowired PostingRepository postingRepository
    ){
        this.postingRepository = postingRepository;
    }

    @DisplayName("Select Test")
    @Test
    void select테스트() {
     // given
        List<Posting> postings = postingRepository.findAll();
     // when

     // then
        assertThat(postings)
                .isNotNull()
                .hasSize(0);
    }


}