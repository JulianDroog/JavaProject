package be.thomasmore.autoedgeservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Car {

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
