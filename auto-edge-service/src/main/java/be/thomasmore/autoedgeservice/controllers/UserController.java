package be.thomasmore.autoedgeservice.controllers;


import be.thomasmore.autoedgeservice.models.GenericResponseWrapper;
import be.thomasmore.autoedgeservice.models.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ObjectMapper objectMapper;

    @RequestMapping("/{userId}")
    public User getUserInfo(@PathVariable("userId") int userId) {
        return new User(userId, "test");
    }

}
