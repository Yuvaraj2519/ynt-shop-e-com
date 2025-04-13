package in.ynt.shop.app.requestDTO;

import in.ynt.shop.app.validator.ValidEmail;
import in.ynt.shop.app.validator.ValidPassword;
import lombok.*;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDTO {

    private String firstName;
    private String lastName;
    @ValidEmail
    private String email;
    @ValidPassword
    private String password;
}
