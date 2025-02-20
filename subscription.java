import java.util.ArrayList;
import java.util.Scanner;

public class Subscription {
    private static ArrayList<String> subscribers = new ArrayList<>();

    public static void subscribe(String email) {
        subscribers.add(email);
        System.out.println("Subscribed successfully with email: " + email);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your email to subscribe: ");
        String email = scanner.nextLine();
        subscribe(email);
    }
}
