package be.thomasmore.autoedgeservice.controllers;

import be.thomasmore.autoedgeservice.models.FavoriteCar;
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
@RequestMapping("/favoriteCars")
public class FavoriteCarController {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("user/{userId}")
    public List<FavoriteCar> getFavoriteCarsByUserId(@PathVariable("userId") String userId) {

        GenericResponseWrapper wrapper = restTemplate.getForObject("http://favorite-service/favoritecars/search/getAllFavoriteCarsByUserID?userid=" + userId, GenericResponseWrapper.class);

        List<FavoriteCar> favoriteCars = objectMapper.convertValue(wrapper.get_embedded().get("favoriteCars"), new TypeReference<List<FavoriteCar>>() { });

        return favoriteCars;
    }

    @PostMapping("/favoriteCar")
    public ResponseEntity<String> postFavoriteCar(@RequestBody FavoriteCar favoriteCar){

        FavoriteCar myFavoriteCar = new FavoriteCar(favoriteCar.getId(), favoriteCar.getCarID(), favoriteCar.getUserID(), favoriteCar.getMake(), favoriteCar.getModel());
       // FavoriteCar myFavoriteCar = new FavoriteCar(favoriteCar.getId(), favoriteCar.getCarID(), favoriteCar.getUserID());
        ResponseEntity<String> result = restTemplate.postForEntity("http://favorite-service/favoritecars/", favoriteCar, String.class);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/favoriteCar/{favoriteCarId}")
    public ResponseEntity deleteFavoriteCarById(@PathVariable("favoriteCarId") int favoriteCarId){

        restTemplate.delete("http://favorite-service/favoritecars/" + favoriteCarId);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/favoriteCar")
    public ResponseEntity<String> putFavoriteCar(@RequestBody FavoriteCar favoriteCar){
        List<HttpMessageConverter<?>> list = new ArrayList<>();
        list.add(new MappingJackson2HttpMessageConverter());

        restTemplate.setMessageConverters(list);
        restTemplate.put("http://favorite-service/favoritecars/" + favoriteCar.getId(), favoriteCar, String.class);
        return ResponseEntity.ok().build();
    }
}
