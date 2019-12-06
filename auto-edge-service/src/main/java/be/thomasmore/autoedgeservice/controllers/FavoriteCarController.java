package be.thomasmore.autoedgeservice.controllers;

import be.thomasmore.autoedgeservice.models.FavoriteCar;
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

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/favoriteCars")
public class FavoriteCarController {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ObjectMapper objectMapper;

    @ApiOperation(value = "Geeft alle favoriete auto's terug met de opgegeven userId",
            response = FavoriteCar.class,
            responseContainer = "List")
    @GetMapping("user/{userId}")
    public List<FavoriteCar> getFavoriteCarsByUserId(@PathVariable("userId") String userId) {

        GenericResponseWrapper wrapper = restTemplate.getForObject("http://favorite-service/favoriteCars/search/getAllFavoriteCarsByUserId?userId=" + userId, GenericResponseWrapper.class);

        List<FavoriteCar> myFavoriteCars = objectMapper.convertValue(wrapper.get_embedded().get("favoriteCars"), new TypeReference<List<FavoriteCar>>() {});

        return myFavoriteCars;
    }

    @ApiOperation(value = "post de opgegeven favoriete auto", response = FavoriteCar.class)
    @PostMapping("/favoritecar")
    public ResponseEntity<String> postFavoriteCar(@RequestBody FavoriteCar favoriteCar){

        FavoriteCar myFavoriteCar = new FavoriteCar(
                favoriteCar.getId(), favoriteCar.getCarId(), favoriteCar.getUserId(), favoriteCar.getMake(), favoriteCar.getModel(), favoriteCar.getType(), favoriteCar.getYear());
        ResponseEntity<String> result = restTemplate.postForEntity("http://favorite-service/favoritecars/", myFavoriteCar, String.class);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "wijzig de opgegeven favoriete auto", response = FavoriteCar.class)
    @PutMapping("/favoritecar")
    public ResponseEntity<String> putFavoriteCar(@RequestBody FavoriteCar favoriteCar){
        List<HttpMessageConverter<?>> list = new ArrayList<>();
        list.add(new MappingJackson2HttpMessageConverter());

        restTemplate.setMessageConverters(list);
        restTemplate.put("http://favorite-service/favoritecars/" + favoriteCar.getId(), favoriteCar, String.class);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "verwijder een favoriete auto met de opgegeven id", response = FavoriteCar.class)
    @DeleteMapping("/favoritecar/{id}")
    public ResponseEntity deleteFavoriteCarById(@PathVariable("id") Integer id){

        restTemplate.delete("http://favorite-service/favoritecars/" + id);

        return ResponseEntity.ok().build();
    }
}
