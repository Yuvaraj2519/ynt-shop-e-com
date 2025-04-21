package in.ynt.shop.app.model;

import in.ynt.shop.app.entity.Address;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Profile {

    private String firstName;
    private String lastName;
    private String email;
    private List<Address> addressList;
}
