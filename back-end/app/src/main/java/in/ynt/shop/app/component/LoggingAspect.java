package in.ynt.shop.app.component;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @Before("execution(* in.ynt.shop.app.serviceImpl.*.*(..))")
    public void logBeforeMethod(JoinPoint joinPoint) {
        logger.info("Entering into method :: {} from class - {}", joinPoint.getSignature().getName(),
                joinPoint.getTarget().getClass().getName());
    }

    @After("execution(* in.ynt.shop.app.serviceImpl.*.*(..))")
    public void logAfterMethod(JoinPoint joinPoint) {
        logger.info("Exiting from method :: {} from class - {}", joinPoint.getSignature().getName(),
                joinPoint.getTarget().getClass().getName());
    }
}
