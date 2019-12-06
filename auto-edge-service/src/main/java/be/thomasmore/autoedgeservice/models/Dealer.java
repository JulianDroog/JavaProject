package be.thomasmore.autoedgeservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@ApiModel(description = "klasse voor autodealers")
public class Dealer {
    @ApiModelProperty(notes = "de database genereert uniek id met autonummering")
    private String _id;
    @ApiModelProperty(notes = "de naam van de dealer")
    private String name;
    @ApiModelProperty(notes = "de straat waarin de dealer gelegen is")
    private String street;
    @ApiModelProperty(notes = "de huisnummer bijhorend bij de straat de dealer")
    private String number;
    @ApiModelProperty(notes = "de stad waarin de dealer gelegen is")
    private String city;
    @ApiModelProperty(notes = "de postcode van de stad waarin de dealer gelegen is")
    private String postal;
    @ApiModelProperty(notes = "de provincie waarin de dealer gelegen is")
    private String provence;
    @ApiModelProperty(notes = "het land waarin de dealer gelegen is")
    private String country;
    @ApiModelProperty(notes = "de telefoonnummer van de dealer")
    private String phone;
    @ApiModelProperty(notes = "fabrikant van het automerk")
    private String manufacturer;

    public Dealer(String id, String name, String street, String number, String city, String postal, String provence, String country, String phone, String manufacturer) {
        this._id = id;
        this.name = name;
        this.street = street;
        this.number = number;
        this.city = city;
        this.postal = postal;
        this.provence = provence;
        this.country = country;
        this.phone = phone;
        this.manufacturer = manufacturer;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostal() {
        return postal;
    }

    public void setPostal(String postal) {
        this.postal = postal;
    }

    public String getProvence() {
        return provence;
    }

    public void setProvence(String provence) {
        this.provence = provence;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }
}
