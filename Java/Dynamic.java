package Practice;

import java.util.Arrays;
import java.util.Scanner;

public class Dynamic {
    int[] array;
    int size;
    int capacity;
    int initialCapacity;

    Dynamic (int capacity) {
        array = new int[capacity];
        this.capacity = capacity;
    }

    public void Add (int value) {
        if (size == capacity)
            Extend();

        array[size] = value;
        size += 1;
        Display();
    }

    public void Insert (int index, int value) {
        if (size == capacity)
            Extend();

        for (int i=size-1; i>=index; i--)
            array[i+1] = array[i];
        array[index] = value;
        size += 1;
        Display();
    }

    public void Update (int index, int value) {
        array[index] = value;
        Display();
    }

    public void Delete (int index) {
        for (int i=index; i<size; i++)
            array[i] = array[i+1];
        size -= 1;

        if (size < initialCapacity)
            Shrink();
        Display();
    }

    public void Extend () {
        initialCapacity = capacity;
        capacity = capacity * 2;
        array = Arrays.copyOf(array, capacity);
    }

    public void Shrink () {
        capacity = initialCapacity;
        array = Arrays.copyOf(array, capacity);
    }

    public void Display () {
        for(int i=0; i<size; i++)
            System.out.print(array[i] + " ");
        System.out.println(Arrays.toString(array));
    }

    static void main (String[] args) {
        int index, value;
        Dynamic obj = new Dynamic(2);
        Scanner scan = new Scanner(System.in);

        while (true) {
            System.out.println("1. Insert Value");
            System.out.println("2. Insert Value At Specified Index");
            System.out.println("3. Update Value At Specified Index");
            System.out.println("4. Delete Value At Specified Index");
            System.out.println("5. Exit");

            System.out.print("Select Your Move: ");
            int choice = scan.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter Value: ");
                    value = scan.nextInt();
                    obj.Add(value);
                    break;

                case 2:
                    System.out.print("Enter Index: ");
                    index = scan.nextInt();
                    System.out.print("Enter Value: ");
                    value = scan.nextInt();
                    obj.Insert(index, value);
                    break;

                case 3:
                    System.out.print("Enter Index: ");
                    index = scan.nextInt();
                    System.out.print("Enter Value: ");
                    value = scan.nextInt();
                    obj.Update(index, value);
                    break;

                case 4:
                    System.out.print("Enter Index: ");
                    index = scan.nextInt();
                    obj.Delete(index);
                    break;

                case 5: System.exit(0);

                default:
                    System.out.println("Invalid Move");
            }
        }

    }
}
