package com.example.back.dto;

import com.example.back.domain.Posting;
import com.example.back.domain.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;


@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PostingDto {

    private Long id;

    private String title;
    private String content;
    private Integer period;
    private String category;

    private LocalDateTime createdAt;
    private User createdBy;
    private LocalDateTime modifiedAt;
    private User modifiedBy;

    public Posting toEntity() {
        return Posting.builder()
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
