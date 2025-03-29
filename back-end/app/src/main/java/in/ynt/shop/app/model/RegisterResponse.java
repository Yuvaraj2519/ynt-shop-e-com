package in.ynt.shop.app.model;

import lombok.*;

@Data
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterResponse {
    private String status;
    private String message;
}
