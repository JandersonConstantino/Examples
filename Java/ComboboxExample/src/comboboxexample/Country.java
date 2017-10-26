package comboboxexample;

/**
 * @author Janderson Constantino
 */
public class Country {
    private int    IdCountry;
    private String Country;    

    public int getIdCountry() {
        return IdCountry;
    }

    public void setIdCountry(int IdCountry) {
        this.IdCountry = IdCountry;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String Country) {
        this.Country = Country;
    }
    
    //Override "toString()" for display value in combobox.
    @Override
    public String toString() {
        return getCountry();
    }

}
