package in.ynt.shop.app.requestDTO;

import lombok.*;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {

    private String email;
    private String password;
}
