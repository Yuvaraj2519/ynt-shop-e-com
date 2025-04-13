package in.ynt.shop.app.validator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Target({ ElementType.FIELD})
@Constraint(validatedBy = {ValidPasswordValidator.class})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidPassword {
    String message() default "Invalid Password - password policy is not followed";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
