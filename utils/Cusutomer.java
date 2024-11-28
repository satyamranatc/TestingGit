package utils;
public class Cusutomer
{
    String CName;
    String CPhone;
    int TotalBill;

    public Cusutomer(String CName, String CPhone) {
        this.CName = CName;
        this.CPhone = CPhone;
        this.TotalBill = 0;
    }

    // Show The Data:
    public void showData() {
        System.out.println("***************************************");
        System.out.println("Customer Name: " + CName);
        System.out.println("Customer Phone: " + CPhone);
        System.out.println("Total Bill: " + TotalBill);
        System.out.println("***************************************");
    }

}