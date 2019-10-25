package be.thomasmore.autoedgeservice.controllers;

import be.thomasmore.autoedgeservice.models.Car;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ObjectMapper objectMapper;

    @RequestMapping("/{carId}")
    public Car getCarInfo(@PathVariable("carId") int carId) {
        return new Car(carId, "test car");
    }
}
