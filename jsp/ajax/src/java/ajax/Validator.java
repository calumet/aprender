package ajax;

/**
 * Validadores para los servicios.
 */
public class Validator {

    /**
     * Validar si un string es un número válido.
     * @param str El string a validar.
     * @return Si es un número.
     */
    public static boolean isNumeric(String str) {
        try {
            double d = Double.parseDouble(str);
        } catch(NumberFormatException nfe) {
            return false;
        }
        return true;
    }

}
