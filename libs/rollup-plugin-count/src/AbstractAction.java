/**
 * I wrote this in 2017 for university :)
 **/

public abstract class AbstractAction {

    private Enum arg;

    <E extends Enum<E>>
    AbstractAction(String arg, Class<E> acceptedArgs) throws ActionCreationException {
        try {
            this.arg = E.valueOf(acceptedArgs, arg);
        } catch (IllegalArgumentException iae) {
            throw new ActionCreationException();
        }
    }

    Enum getArg() { return arg; }
}
