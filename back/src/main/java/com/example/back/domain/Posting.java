package com.example.back.domain;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@ToString
@Table(indexes = {
        @Index(columnList = "title"),
        @Index(columnList = "createdAt"),
        @Index(columnList = "createdBy")
})
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
    @Setter private String createdBy;
    @LastModifiedDate private LocalDateTime modifiedAt;
    @Setter private String modifiedBy;

    // 모든 JPA entity들은 hibernate 기준 기본생성자를 가지고 있어야함
    protected Posting() {} // new로 생성하는 것을 막음

    private Posting(String title, String content, Integer period, String category) {
        this.title = title;
        this.content = content;
        this.period = period;
        this.category = category;
    }

    public static Posting of(String title, String content, Integer period, String category) {
        return new Posting(title, content, period, category);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Posting posting)) return false;
        return Objects.equals(id, posting.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
