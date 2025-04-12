package in.ynt.shop.app.exception;

import in.ynt.shop.app.constants.Status;
import in.ynt.shop.app.model.ErrorResponse;
import in.ynt.shop.app.responseDTO.ResponseDTO;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidationException(MethodArgumentNotValidException ex) {
        ErrorResponse errorResponse = new ErrorResponse();
        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
            errorResponse.setErrorCode(200);
            errorResponse.setErrorMessage(fieldError.getDefaultMessage());
            errorResponse.setErrorCategory("Validation Error");
            errorResponse.setErrorPath(fieldError.getField());
        }
        ResponseDTO<ErrorResponse> responseDTO = new ResponseDTO<>();
        responseDTO.setStatus(Status.FAILURE);
        responseDTO.setData(errorResponse);
        responseDTO.setSource("front end");
        return ResponseEntity.ok(responseDTO);
    }
}
