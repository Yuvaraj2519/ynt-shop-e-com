package in.ynt.shop.app.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Getter
@Setter
@Entity
@Builder
@Table( name = "address")
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    @Id
    @Column( name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column( name ="street")
    private String street;

    @Column( name = "city")
    private String city;

    @Column( name = "state")
    private String state;

    @Column( name = "pin_code")
    private String pincode;

    @Column( name = "is_default")
    private boolean isDefault;

    @Column( name = "created")
    @CreationTimestamp
    private Date created;

    @Column( name = "updated")
    @UpdateTimestamp
    private Date updated;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn( name = "user_id", nullable = false)
    private AppUser appUser;

}
