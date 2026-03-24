#include <stdio.h>
#include <string.h>

#define MAX_PRODUCTS 100
#define NAME_LENGTH 30

int readInt(const char prompt[])
{
    int value;
    while (1)
    {
        printf("%s", prompt);

        if (scanf("%d", &value) == 1)
        {
            return value;
        }

        int c;
        while ((c = getchar()) != '\n' && c != EOF)
        {
        }
        printf("Input not valid. Try again.\n");
    }
}

int printMenu()
{
    int choice;
    printf("\n=========================================\n");
    printf("              INVENTORY SYSTEM\n");
    printf("=========================================\n");
    printf("1. Insert new product\n");
    printf("2. Show all products\n");
    printf("3. Search product by code\n");
    printf("4. Update product price\n");
    printf("5. Update product quantity\n");
    printf("6. Register a sale\n");
    printf("7. Add new stock\n");
    printf("9. Calculate warehouse value\n");
    printf("0. Exit\n");
    printf("=========================================\n");

    int ch = readInt("Select an option: ");

    return ch;
}
void addProduct(int codes[], char names[][NAME_LENGTH], float prices[], int quantities[], int position)
{

    printf("Code: ");
    scanf("%d", &codes[position]);

    printf("Name: ");
    scanf("%s", names[position]);

    printf("Price: ");
    scanf("%f", &prices[position]);

    printf("Quantity: ");
    scanf("%d", &quantities[position]);
}

int findProduct(int codes[], int count, int searchCode)
{
    int i;
    for (int i = 0; i < count; i++)
    {
        if (codes[i] == searchCode)
        {
            printf("%d ", i);
            return i;
        }
    }
    return -1;
}

void printArchive(int codes[], char names[][NAME_LENGTH], float prices[], int quantities[], int count)
{
    int i;

    if (count == 0)
    {
        printf("no product avaible");
    }
    else
    {
        printf("\n%-10s %-20s %-10s %-10s\n", "CODE", "NAME", "PRICE", "QUANTITY");
        for (i = 0; i < count; i++)
        {
            printf("%-10d %-20s %-10.2f %-10d\n",
                   codes[i], names[i], prices[i], quantities[i]);
        }
    }
}

int searchProduct()
{
}

int main()
{

    int codes[MAX_PRODUCTS];
    char nameProduct[MAX_PRODUCTS];
    float prices[MAX_PRODUCTS];
    int quantities[MAX_PRODUCTS];
    int count = 0;
    int choice;

    do
    {
        choice = printMenu();
        switch (choice)
        {
        case 1:
            if (count < MAX_PRODUCTS)
            {
                printf("you are selected n1: ");
                addProduct(codes, nameProduct, prices, quantities, count);
                count++;
            }
            else
            {
                printf("!!! ARCHIVE IS FULL !!!\n");
            }
            break;
        case 2:
            printf("you are selected n2: ");
            printArchive(codes, nameProduct, prices, quantities, count);
            break;
        case 3:
            int searchedCode;
            int index;
            printf("Enter code: ");
            scanf("%d", &searchedCode);
            printf("you are selected (3): ");

            index = findProduct(codes, count, searchedCode);

            if (index != -1)
            {
                printf("Code: %d\n", codes[index]);
                printf("Name: %s\n", nameProduct[index]);
                printf("Price: %.2f\n", prices[index]);
                printf("Quantity: %d\n", quantities[index]);
            }
            break;
        case 4:
            printf("you are selected (4): ");
            int searchedCode;
            int index;
            float newPrice;
            printf("Enter code: ");
            scanf("%d", &searchedCode);

            index = findProductIndex(codes, count, searchedCode);

            if (index != -1)
            {
                printf("New price: ");
                scanf("%f", &newPrice);
                prices[index] = newPrice;
                printf("Price updated.\n");
            }
            else
            {
                printf("Product not found.\n");
            }
            break;
        case 5:
            printf("you are selected (5): ");
            int searchedCode;
            int index;
            int newQuantity;

            printf("Enter code: ");
            scanf("%d", &searchedCode);

            index = findProductIndex(codes, count, searchedCode);

            if (index != -1)
            {

                printf("New quantity: ");
                scanf("%d", &newQuantity);
                quantities[index] = newQuantity;
                printf("Quantity updated.\n");
            }
            else
            {

                printf("Product not found.\n");
            }
            break;
        case 6:
            printf("you are selected (3): ");
            int searchedCode;
            int index;
            int soldQuantity;
            printf("Enter code: ");
            scanf("%d", &searchedCode);

            index = findProductIndex(codes, count, searchedCode);
            if (index != -1)
            {
                printf("Quantity to sell: ");
                scanf("%d", &soldQuantity);
                if (soldQuantity > 0 && soldQuantity <= quantities[index])
                {
                    quantities[index] = quantities[index] - soldQuantity;
                    printf("Sale completed.\n");
                }
                else
                {
                    printf("Insufficient quantity.\n");
                }
            }
            else
            {
                printf("Product not found.\n");
            }
            break;
        case 7:
            printf("you are selected (3): ");
            int searchedCode;
            int index;
            int addedQuantity;
            printf("Enter code: ");
            scanf("%d", &searchedCode);
            index = findProductIndex(codes, count, searchedCode);
            if (index != -1)
            {
                printf("Quantity to add: ");
                scanf("%d", &addedQuantity);
                if (addedQuantity > 0)
                {
                    quantities[index] = quantities[index] + addedQuantity;
                    printf("Stock updated.\n");
                }
                else
                {
                    printf("Invalid quantity.\n");
                }
            }
            else
            {
                printf("Product not found.\n");
            }
            break;
        case 8:
            printf("you are selected (3): ");
            int i;
            float totalValue = 0;
            for (i = 0; i < count; i++)
            {
                totalValue = totalValue + prices[i] * quantities[i];
            }
            printf("Total warehouse value: %.2f\n", totalValue);

            break;
        case 0:
            printf("you are selected (0): EXIT NOW!");
            break;
        default:
            break;
        }

    } while (choice = !0);
}