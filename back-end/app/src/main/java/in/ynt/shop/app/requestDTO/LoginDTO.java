package in.ynt.shop.app.requestDTO;

import in.ynt.shop.app.validator.ValidEmail;
import in.ynt.shop.app.validator.ValidPassword;
import lombok.*;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {

    @ValidEmail
    private String email;
    private String password;
}
