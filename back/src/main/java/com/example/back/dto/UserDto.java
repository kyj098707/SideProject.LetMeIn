package com.example.back.dto;


import com.example.back.domain.User;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;

    private String username;

    private String pw;

    private String nickname;

    // List<User> -> List<DTO>
    public UserDto(User user){
        this.id = user.getId();
        this.username = user.getUsername();
        this.pw = user.getPw();
        this.nickname = user.getNickname();
    }

    // DTO -> User
    public User toEntity(UserDto userDto) {
        return User.builder()
                .id(this.id)
                .username(this.username)
                .pw(this.pw)
                .nickname(this.nickname)
                .build();
    }

}
