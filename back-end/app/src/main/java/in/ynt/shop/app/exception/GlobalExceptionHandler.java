package in.ynt.shop.app.exception;

import in.ynt.shop.app.constants.Status;
import in.ynt.shop.app.model.ErrorResponse;
import in.ynt.shop.app.responseDTO.ResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidationException(MethodArgumentNotValidException ex) {

        List<ErrorResponse> errorResponses = new ArrayList<>();
        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(200);
            errorResponse.setErrorMessage(fieldError.getDefaultMessage());
            errorResponse.setErrorCategory("Validation Error");
            errorResponse.setErrorPath(fieldError.getField());

            errorResponses.add(errorResponse);
        }

        ResponseDTO<List<ErrorResponse>> responseDTO = new ResponseDTO<>();
        responseDTO.setStatus(Status.FAILURE);
        responseDTO.setErrors(errorResponses);
        responseDTO.setSource("front end");
        return ResponseEntity.ok(responseDTO);
    }
}
