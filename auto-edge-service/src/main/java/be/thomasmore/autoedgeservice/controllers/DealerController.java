package be.thomasmore.autoedgeservice.controllers;

import be.thomasmore.autoedgeservice.models.Dealer;
import be.thomasmore.autoedgeservice.models.GenericResponseWrapper;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
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

    @ApiOperation(value = "post de opgegeven nieuwe dealer", response = Dealer.class)
    @PostMapping("/dealer")
    public ResponseEntity<String> postDealerById(@RequestBody Dealer dealer) {
        Dealer newDealer = new Dealer(dealer.get_id(), dealer.getName(), dealer.getCity(), dealer.getCountry(), dealer.getNumber(), dealer.getPhone(), dealer.getPostal(), dealer.getProvence(), dealer.getStreet(), dealer.getManufacturer());

        ResponseEntity<String> result = restTemplate.postForEntity(
                "http://dealers-service/dealers/", newDealer, String.class
        );
        return ResponseEntity.ok().build();
    }



//    @PostMapping("/dealer")
//    public ResponseEntity<String> postDealer(@RequestBody Dealer dealer){
//
//        Dealer dealer1 = new Dealer(dealer.get_id(), dealer.getName(),dealer.getStreet(),dealer.getNumber(),dealer.getCity(),dealer.getPostal(),dealer.getProvence(),dealer.getCountry(),dealer.getPhone(),dealer.getManufacturer());
//
//        ResponseEntity<String> result = restTemplate.postForEntity(
//                "http://dealers-service/dealers", dealer1, String.class
//        );
//
//        return ResponseEntity.ok().build();
//    }

    @ApiOperation(value = "haal dealer op met opgegeven id", response = Dealer.class)
    @GetMapping("/dealer/{id}")
    public Dealer getDealerById(@PathVariable("id") String id){
        Dealer dealer = restTemplate.getForObject("http://dealers-service/dealers/search/findDealerBy_id?_id=" + id, Dealer.class);

        return dealer;
    }

    @ApiOperation(value = "wijzig de opgegeven dealer", response = Dealer.class)
    @PutMapping("/dealer")
    public ResponseEntity<String> putDealer(@RequestBody Dealer dealer){
        List<HttpMessageConverter<?>> list = new ArrayList<>();
        list.add(new MappingJackson2HttpMessageConverter());
        restTemplate.setMessageConverters(list);

        restTemplate.put("http://dealers-service/dealers/" + dealer.get_id(), dealer, String.class);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "Geeft een lijst van alle dealers terug",
            response = Dealer.class,
            responseContainer = "List")
    @GetMapping()
    public List<Dealer> getAllDealers() {
        GenericResponseWrapper wrapper = restTemplate.getForObject("http://dealers-service/dealers", GenericResponseWrapper.class);

        List<Dealer> dealers = objectMapper.convertValue(wrapper.get_embedded().get("dealers"), new TypeReference<List<Dealer>>() {
        });

        return dealers;
    }

    @ApiOperation(value = "verwijder een dealer met de opgegeven id", response = Dealer.class)
    @DeleteMapping("/dealer/{id}")
    public ResponseEntity deleteDealerById(@PathVariable("id") String dealerId) {

        restTemplate.delete("http://dealers-service/dealers/" + dealerId);

        return ResponseEntity.ok().build();
    }

}
