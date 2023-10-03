package com.example.back.domain;


import com.example.back.dto.UserDto;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long id;

    @Column(length = 20, nullable = false)
    private String username;

    @Column(length = 200, nullable = false)
    private String pw;

    @Column(length = 10)
    private String nickname;

    public UserDto toDto() {
        return UserDto.builder()
                .id(this.id)
                .username(this.username)
                .pw(this.pw)
                .nickname(this.nickname)
                .build();
    }

}
