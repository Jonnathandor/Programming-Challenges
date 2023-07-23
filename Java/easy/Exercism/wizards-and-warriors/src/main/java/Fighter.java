abstract class Fighter {

    boolean isVulnerable() {
        throw new UnsupportedOperationException("Please provide implementation for this method");
    }

    abstract int damagePoints(Fighter fighter);

}

class Warrior extends Fighter {

    @Override
    public String toString() {
        return "Fighter is a Warrior";
    }

    @Override
    boolean isVulnerable() {
        return false;
    }

    @Override
    int damagePoints(Fighter wizard) {
        return wizard.isVulnerable() ? 10 : 6;
    }
}

class Wizard extends Fighter {

    private boolean isVulnerable = true;

    @Override
    public String toString(){
        return "Fighter is a Wizard";
    }

    @Override
    boolean isVulnerable() {
        return isVulnerable;
    }

    @Override
    int damagePoints(Fighter warrior) {
        return isVulnerable ? 3 : 12;
    }

    void prepareSpell() {
        isVulnerable = false;
    }

}
