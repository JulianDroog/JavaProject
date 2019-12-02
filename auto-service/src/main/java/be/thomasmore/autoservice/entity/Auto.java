package be.thomasmore.autoservice.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "car")
public class Auto {
    @Id
    private String _id;
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
