package com.example.back.domain;


import com.example.back.dto.PostingDto;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Getter
@ToString
@Entity
public class Posting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter @Column(nullable = false) private String title;
    @Setter @Column(nullable = false, length = 1000) private String content;
    @Setter @Column(nullable = false) private Integer period;
    @Setter @Column(nullable = false) private String category;

    // 자동으로 업데이트 하는 분
    @CreatedDate private LocalDateTime createdAt;
    @Setter @ManyToOne @JoinColumn(name="user_id") private User createdBy;
    @LastModifiedDate private LocalDateTime modifiedAt;

    public PostingDto toDto(){
        return PostingDto.builder()
                .id(this.id)
                .title(this.title)
                .content(this.content)
                .period(this.period)
                .category(this.category)
                .createdAt(this.createdAt)
                .createdBy(this.createdBy)
                .modifiedAt(this.modifiedAt)
                .build();
    }

}
