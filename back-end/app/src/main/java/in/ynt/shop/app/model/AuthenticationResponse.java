package in.ynt.shop.app.model;

import lombok.*;

import java.util.Date;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String status;
    private String message;
    private String token;
    private Profile profile;
    private Date expires;
}
