/**
 * I wrote this in 2017 for university :)
 **/

public class Deck<C> extends ArrayList<AbstractCard> {

    private int top = 0;
    private int level = 0;

    void setLevel(int level) { this.level = level; }
    public int getLevel() { return this.level; }

    // only DeckFactory should make decks.
    Deck() {}

    public AbstractCard drawCard() {
        if (this.size() == 0)
            return null;

        AbstractCard rtn = this.get(this.top);

        if (this.top + 1 == this.size()) {
            this.top = 0;
            this.randomise();
        } else {
            this.top += 1;
        }

        return rtn;
    }

    public void randomise() { Collections.shuffle(this, new Random()); }
}
