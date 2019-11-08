package be.thomasmore.autoedgeservice.controllers;

import be.thomasmore.autoedgeservice.models.Dealer;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

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
        Dealer dealer =  new Dealer(id,name,street,number,city,postal,provence,country,phone,manufacturer);

        ResponseEntity<String> result = restTemplate.postForEntity(
                "http://dealers-service/dealers" , dealer, String.class
        );
        return ResponseEntity.ok().build();
    }



//    @getMapping("/{dealer}")
//    public ResponseEntity<List<Dealer>> findAllDealers(){
//        return ResponseEntity.ok(restTemplate.allfindAllDealers());
//
//    }




//    @GetMapping(path = {"/{dealer}"})
//    public ResponseEntity<String> findDealerById(@PathVariable("dealer") int id){
//        Dealer dealer = new Dealer();
//
//        ResponseEntity<String> result = restTemplate.getForEntity(
//                "http://dealers-service/dealers" , String.class
//        );
//
//        return ResponseEntity.ok().build();
//    }



//    @DeleteMapping("/{dealer}")
//    public ResponseEntity<String> deleteById(@PathVariable("dealer")int id) {
//
//        ResponseEntity<String> result = restTemplate.delete("http://dealers-service/dealers");
//
//
//        return ResponseEntity.ok().build();
//    }
}
