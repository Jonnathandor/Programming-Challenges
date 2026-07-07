import java.util.Locale;

class Badge {
    public String print(Integer id, String name, String department) {
        String departmentLabel = department == null ? "OWNER" : department.toUpperCase(Locale.ROOT);

        String idPrefix = id == null ? "" : "[" + id + "] - ";

        return idPrefix + name + " - " + departmentLabel;
    }
}
