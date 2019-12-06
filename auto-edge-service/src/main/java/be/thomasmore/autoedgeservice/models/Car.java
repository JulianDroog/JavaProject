package be.thomasmore.autoedgeservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@ApiModel(description = "klasse voor auto zoekertjes")
public class Car {
    @ApiModelProperty(notes = "de database genereert de id met autonummering")
    private String _id;
    @ApiModelProperty(notes = "fabrikant van de auto")
    private String make;
    @ApiModelProperty(notes = "model van de auto")
    private String model;
    @ApiModelProperty(notes = "type van de auto")
    private String type;
    @ApiModelProperty(notes = "bouwjaar van de auto")
    private Integer year;
    @ApiModelProperty(notes = "transmissie van de auto")
    private String transmission;
    @ApiModelProperty(notes = "aantal cc van de auto")
    private Integer cc;
    @ApiModelProperty(notes = "aantal paardenkracht van de auto")
    private Integer hp;
    @ApiModelProperty(notes = "aantal deuren van de auto")
    private Integer doors;
    @ApiModelProperty(notes = "id van de gebruiker van de auto")
    private Integer userId;

    public Car(String _id, String make, String model, String type, Integer year, String transmission, Integer cc, Integer hp, Integer doors, Integer userId) {
        this._id = _id;
        this.make = make;
        this.model = model;
        this.type = type;
        this.year = year;
        this.transmission = transmission;
        this.cc = cc;
        this.hp = hp;
        this.doors = doors;
        this.userId = userId;
    }

    public String get_id() {
        return _id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
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

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public Integer getCc() {
        return cc;
    }

    public void setCc(Integer cc) {
        this.cc = cc;
    }

    public Integer getHp() {
        return hp;
    }

    public void setHp(Integer hp) {
        this.hp = hp;
    }

    public Integer getDoors() {
        return doors;
    }

    public void setDoors(Integer doors) {
        this.doors = doors;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
