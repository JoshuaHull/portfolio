/**
 * I wrote this in 2017 for university :)
 **/

public class Until extends AbstractAction {

    private AcceptedArgs arg;

    Until(String arg) throws ActionCreationException {
        super(arg, AcceptedArgs.class);

        this.arg = (AcceptedArgs) super.getArg();
    }

    boolean isSatisfied(Board state, Player satisfyFor) {
        switch (this.arg) {
            case GRADING:
                return state.sittingOn(satisfyFor).getType() == TileType.GRADE;
            case BATTLE:
                return state.sittingOn(satisfyFor).getType() == TileType.BATTLE;
            case ACTION:
                return state.sittingOn(satisfyFor).getType() == TileType.ACTION;
        }
        return false;
    }

    private enum AcceptedArgs {
        GRADING,
        BATTLE,
        ACTION
    }
}
