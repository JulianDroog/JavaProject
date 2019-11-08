package be.thomasmore.autoedgeservice.controllers;

import be.thomasmore.autoedgeservice.models.Car;
import be.thomasmore.autoedgeservice.models.GenericResponseWrapper;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ObjectMapper objectMapper;

    /*@RequestMapping("/{carId}")
    public Car getCarInfo(@PathVariable("carId") int carId) {
        return new Car(carId, "test car");
    }*/

    @PostMapping("/car")
    public ResponseEntity<String> postCar(String make, String model, String type, Integer year, String transmission, Integer cc, Integer hp, Integer doors, Integer userId){
        Car car = new Car(make, model, type, year, transmission, cc, hp, doors, userId);

        ResponseEntity<String> result = restTemplate.postForEntity(
                "http://auto-service/autos/", car, String.class
        );

        return ResponseEntity.ok().build();
    }

    @GetMapping("/{carId}")
    public List<Car> getCarsByUserId(@PathVariable("userid") Integer userId){
        GenericResponseWrapper wrapper = restTemplate.getForObject(
                "http://auto-service/autos/search/getCarsByUserId?userid=" + userId, GenericResponseWrapper.class
        );

        List<Car> cars = objectMapper.convertValue(wrapper.get_embedded().get("cars"), new TypeReference<List<Car>>() {
        });

        return cars;
    }
}
