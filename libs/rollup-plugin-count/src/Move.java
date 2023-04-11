/**
 * I wrote this in 2017 for university :)
 **/
 
 public class Move extends Operation {

    private AcceptedArgs arg;

    Move (String arg) throws ActionCreationException {
        super(arg, AcceptedArgs.class);

        this.arg = (AcceptedArgs) super.getArg();
    }

    int getMovement() {
        switch (this.arg) {
            case FORWARD:
                return 1;
            case BACKWARD:
                return -1;
        }
        return 0;
    }

    private enum AcceptedArgs {
        FORWARD,
        BACKWARD
    }
}
