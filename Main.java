import utils.Menu.*;
import utils.*;
import java.util.Scanner;

class Main {
    public static void main(String[] args) {

        
        Scanner sc = new Scanner(System.in);

        
        
        int TotalBillOfCustomer = 0;
        Starters starters[] = new Starters[10];
        MainCourse mainCourses[] = new MainCourse[10];
        Desserts desserts[] = new Desserts[10];

        starters[0] = new Starters(100, "French Fries");
        starters[1] = new Starters(150, "Chicken Wings");
        starters[2] = new Starters(200, "Chocolate Mousse Cake");
        starters[3] = new Starters(250, "Chocolate Chip Cookie");
        int StarterLen = 4;  

        mainCourses[0] = new MainCourse(300, "Chicken Biryani");
        mainCourses[1] = new MainCourse(350, "Pizza");
        mainCourses[2] = new MainCourse(400, "Burger");
        mainCourses[3] = new MainCourse(450, "Grilled Chicken Sandwich");
        int MainLen = 4;

        desserts[0] = new Desserts(500, "Ice Cream");
        desserts[1] = new Desserts(550, "Chocolate Cake");
        desserts[2] = new Desserts(600, "Vanilla Ice Cream");
        int DesertLen = 3;

        while (true) {
            System.out.println(
                    "Welcome to the Restaurant!\n" +
                            "1. View Menu\n" +
                            "2. Calculate Bill\n" +
                            "3. Exit\n" +
                            "Enter your choice: ");
            int choice = sc.nextInt();
            sc.nextLine(); // For \N Safety

            if (choice == 1) {
                System.out.println("Menu:");
                System.out.println("---------------------");
                System.out.println("1. Starters");
                System.out.println("2. Main Courses");
                System.out.println("3. Desserts");
                System.out.println("Enter your choice: ");
                int menuChoice = sc.nextInt();
                sc.nextLine(); // For \N Safety

                if (menuChoice == 1) {
                    System.out.println("Starters:");
                    for (int i = 0; i < StarterLen; i++) {
                        System.out.println(i + 1 + ". " + starters[i].getItemName() + " - " + starters[i].getPrice());
                    }
                } else if (menuChoice == 2) {
                    System.out.println("Main Courses:");
                    for (int i = 0; i < MainLen; i++) {
                        System.out.println(i + 1 + ". " + mainCourses[i].getItemName() + " - " + mainCourses[i].getPrice());
                    }
                } else if (menuChoice == 3) {
                    System.out.println("Desserts:");
                    for (int i = 0; i < DesertLen; i++) {
                        System.out.println(i + 1 + ". " + desserts[i].getItemName() + " - " + desserts[i].getPrice());
                    }
                } else {
                    System.out.println("Invalid choice. Please try again.\n");
                }

                System.out.println("---------select Your Item---------");
                System.out.print("Enter the index name: ");
                int ItemID = sc.nextInt();

                System.out.print("Enter the quantity: ");
                int quantity = sc.nextInt();

                // Add to Bill:
                if (menuChoice == 1) {
                    TotalBillOfCustomer += starters[ItemID - 1].getPrice() * quantity;
                } else if (menuChoice == 2) {
                    TotalBillOfCustomer += mainCourses[ItemID - 1].getPrice() * quantity;
                } else if (menuChoice == 3) {
                    TotalBillOfCustomer += desserts[ItemID - 1].getPrice() * quantity;
                } else {
                    System.out.println("Invalid choice. Please try again.\n");
                }

            } else if (choice == 2) {
                System.out.println("Total Bill: " + TotalBillOfCustomer);
                System.out.println("--------------------------------");
                System.out.println("Have a great day!");
                System.out.println("--------------------------------");
                break;

            } else if (choice == 3) {
                System.out.println("********************************");
                System.out.println("Thank you for visiting!");
                System.out.println("********************************");
                break;
            } else {
                System.out.println("\nInvalid choice. Please try again.\n");
            }

        }

    }
}