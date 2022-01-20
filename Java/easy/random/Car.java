package easy.random;

public class Car {
    private int doors;
    private int wheels;
    private String model;
    private String engine; 
    private String colour;

    public void setModel(String model){
        String expensiveModel = model.toLowerCase();

        if(expensiveModel.equals("ferrari") || expensiveModel.equals("viper")){
            System.out.println("This guy is loaded");
        }

        this.model = model;
    }

    public String getModel(){
        return this.model;
    }
}
