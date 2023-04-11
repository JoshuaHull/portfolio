/**
 * I wrote this in 2017 for university :)
 **/

public class Players extends AbstractAction {

    private AcceptedArgs arg;

    Players(String arg) throws ActionCreationException {
        super(arg, AcceptedArgs.class);

        this.arg = (AcceptedArgs) super.getArg();
    }

    Player[] getPlayers(Board state) {
        switch (this.arg) {
            case CURRENT:
                return new Player[] { state.getTurnPlayer() };
            case ALL:
                return state.getAllPlayers();
        }

        return new Player[] {};
    }

    private enum AcceptedArgs {
        CURRENT,
        ALL;
    }
}
