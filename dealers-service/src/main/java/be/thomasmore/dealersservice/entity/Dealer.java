package be.thomasmore.dealersservice.entity;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collation = "dealer")
public class Dealer {
    @Id
    private String id;
    private String name;
    private String street;
    private String number;
    private String city;
    private String postal;
    private String provence;
    private String country;
    private String phone;
    private String manufacturer;


}