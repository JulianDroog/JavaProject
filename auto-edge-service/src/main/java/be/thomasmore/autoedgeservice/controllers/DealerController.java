package be.thomasmore.autoedgeservice.controllers;

import be.thomasmore.autoedgeservice.models.Dealer;
import be.thomasmore.autoedgeservice.models.GenericResponseWrapper;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;



@RestController
@RequestMapping("/dealers")
public class DealerController {


    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("/{dealer}")
    public ResponseEntity<String> postDealerById(@PathVariable("dealer") int id, String name, String street, String number, String city, String postal, String provence, String country, String phone, String manufacturer) {
        Dealer dealer = new Dealer(id, name, street, number, city, postal, provence, country, phone, manufacturer);

        ResponseEntity<String> result = restTemplate.postForEntity(
                "http://dealers-service/dealers", dealer, String.class
        );
        return ResponseEntity.ok().build();
    }


    @GetMapping("all")
    public List<Dealer> getAllDealers() {
        GenericResponseWrapper wrapper = restTemplate.getForObject("http://dealers-service/dealers/", GenericResponseWrapper.class);

        List<Dealer> dealers = objectMapper.convertValue(wrapper.get_embedded().get("dealers"), new TypeReference<List<Dealer>>() {
        });

        return dealers;
    }


    @DeleteMapping("/dealer/{id}")
    public ResponseEntity deleteDealerById(@PathVariable("id") Integer dealerId) {

        Dealer dealer = restTemplate.getForObject("http://dealers-service/dealers/findDealerById?id=" + dealerId, Dealer.class);
        restTemplate.delete("http://dealers-service/dealers/findDealerById?id=" + dealer.getId());

        return ResponseEntity.ok().build();
    }

}