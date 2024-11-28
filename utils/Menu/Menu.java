package utils.Menu;
// Base class for menu items
public abstract class Menu {
    int price;
    String itemName;

    public Menu(int price, String itemName) {
        this.price = price;
        this.itemName = itemName;
    }

    public int getPrice() {
        return price;
    }

    public String getItemName() {
        return itemName;
    }

}

