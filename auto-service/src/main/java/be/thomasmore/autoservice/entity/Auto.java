package be.thomasmore.autoservice.entity;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "car")
public class Auto {
    @Id
    private String id;
    private String make;
    private String model;
    private String type;
    private Integer year;
    private String transmission;
    private Integer cc;
    private Integer hp;
    private Integer doors;
    private Integer userId;
}
