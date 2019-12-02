package be.thomasmore.autoedgeservice.controllers;

import be.thomasmore.autoedgeservice.models.Car;
import be.thomasmore.autoedgeservice.models.GenericResponseWrapper;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
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

    @PostMapping("/car")
    public ResponseEntity<String> postCar(@RequestBody Car auto){
        Car car = new Car(auto.getMake(), auto.getModel(), auto.getType(), auto.getYear(), auto.getTransmission(), auto.getCc(), auto.getHp(), auto.getDoors(), auto.getUserId());

        ResponseEntity<String> result = restTemplate.postForEntity(
                "http://auto-service/autos/", car, String.class
        );

        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userId}")
    public List<Car> getCarsByUserId(@PathVariable("userId") Integer userId){
        GenericResponseWrapper wrapper = restTemplate.getForObject(
                "http://auto-service/autos/search/getCarsByUserId?userId=" + userId, GenericResponseWrapper.class
        );

        List<Car> cars = objectMapper.convertValue(wrapper.get_embedded().get("autos"), new TypeReference<List<Car>>() {});

        return cars;
    }

    @GetMapping()
    public List<Car> getCars(){
        GenericResponseWrapper wrapper = restTemplate.getForObject(
                "http://auto-service/autos", GenericResponseWrapper.class
        );

        List<Car> cars = objectMapper.convertValue(wrapper.get_embedded().get("autos"), new TypeReference<List<Car>>() {});

        return cars;
    }

    @PutMapping("/car")
    public ResponseEntity<String> putCar(@RequestBody Car auto){
        List<HttpMessageConverter<?>> list = new ArrayList<>();
        list.add(new MappingJackson2HttpMessageConverter());
        restTemplate.setMessageConverters(list);

        restTemplate.put("http://auto-service/autos/" + auto.get_id(), auto, String.class);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/car/{carId}")
    public ResponseEntity deleteCarByCarId(@PathVariable("carId") String carId){

        restTemplate.delete("http://auto-service/autos/" + carId);

        return ResponseEntity.ok().build();
    }
}
