package in.ynt.shop.app.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {

    private int errorCode;
    private String errorCategory;
    private String errorPath;
    private String errorMessage;

}
