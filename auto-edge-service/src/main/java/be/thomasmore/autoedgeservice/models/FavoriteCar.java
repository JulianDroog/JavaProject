package be.thomasmore.autoedgeservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@ApiModel(description = "klasse om favoriete auto's van een gebruiker te beheren")
public class FavoriteCar {
    @ApiModelProperty(notes = "de database genereert uniek id met autonummering")
    private int id;
    @ApiModelProperty(notes = "id van het car Object dat wordt bewaard als favoriteCar")
    private String carId;
    @ApiModelProperty(notes = "id van de user bij wie de favoriteCar hoort")
    private String userId;
    @ApiModelProperty(notes = "het merk van de auto")
    private String make;
    @ApiModelProperty(notes = "het model van de auto")
    private String model;
    @ApiModelProperty(notes = "het type van de auto")
    private String type;
    @ApiModelProperty(notes = "het bouwjaar van de auto")
    private Integer year;

    public FavoriteCar(int id, String carId, String userId, String make, String model, String type, int year) {
        this.carId = carId;
        this.userId = userId;
        this.id = id;
        this.make = make;
        this.model = model;
        this.type = type;
        this.year = year;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCarId() {
        return carId;
    }

    public void setCarId(String carId) {
        this.carId = carId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }
}
