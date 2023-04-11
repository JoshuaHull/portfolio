/**
 * I wrote this in 2017 for university :)
 **/

public class Operation extends AbstractAction {

    <E extends Enum<E>>
    Operation(String arg, Class<E> acceptedArgs) throws ActionCreationException {
        super(arg, acceptedArgs);
    }
}
